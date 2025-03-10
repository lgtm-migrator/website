/*!
 * Adorade (v1.0.0): tools/tasks/scripts.js
 * Copyright (c) 2018 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  src, dest, lastRun, isProd, fs, del, size, bs, fancyLog, green, magenta,
  concat, header, rename, replace, paths, opts, banner
} from '../utils/index.mjs';
import gEslint from 'gulp-eslint';
import gTerser from 'gulp-terser-js';

import gulpRollup from '../rollup/index.mjs';

const taskTarget = isProd ? paths.scripts.prod : paths.scripts.dev;

export async function cleanJs () {
  await del(taskTarget);
  fancyLog(`${green('-> Clean all scripts')} in ${magenta(taskTarget)} folder`);
}
cleanJs.displayName = 'clean:js';
cleanJs.description = 'Clean up scripts folders';

export function vendorJs () {
  fancyLog(`${green('-> Copying vendor JS files...')}`);
  return src(paths.vendors.src.js, {
    // since: lastRun(vendorJs)
  })
    .pipe(replace(/\/\/[#@]\s(source(?:Mapping)?URL)=\s*(\S+)/, ''))
    .pipe(replace(/^(?:[\t ]*(?:\r?\n|\r))+/, ''))
    .pipe(concat('vendors.min.js'))
    .pipe(size(opts.size))
    .pipe(dest(paths.vendors.dest.js))
    .pipe(bs.stream({ match: '**/*.js' }));
}
vendorJs.displayName = 'vendor:js';
vendorJs.description = 'Copy vendor JS files';

export function lintMjs () {
  fancyLog(`${green('-> Linting MJS files...')}`);

  const outputDir = paths.logs.gulp;
  fs.mkdirSync(`${outputDir}`, { recursive: true });
  const output = fs.createWriteStream( `${outputDir}/scripts.txt` );

  return src(paths.scripts.src, {
    since: lastRun(lintMjs)
  })
    .pipe(gEslint())
    .pipe(gEslint.format())
    .pipe(gEslint.format('stylish', output))
    .pipe(gEslint.failAfterError());
}
lintMjs.displayName = 'lint:mjs';
lintMjs.description = 'Lint MJS files';

export function transpile () {
  fancyLog(`${green('-> Transpiling MJS via Babel...')}`);
  return src(paths.scripts.input, {
    sourcemaps: true
  })
    .pipe(gulpRollup(paths.rollup.inputOpts, paths.rollup.outputOpts))
    .pipe(header(banner()))
    .pipe(size(opts.size))
    .pipe(dest(paths.scripts.dev, { sourcemaps: './' }))
    .pipe(bs.stream({ match: '**/*.js' }));
}
transpile.displayName = 'transpile:mjs';
transpile.description = 'Transpile MJS via Babel';

export function minifyJs (done) {
  if (isProd) {
    fancyLog(`${green('-> Minify JS...')}`);
    return src(paths.scripts.filter, {
      // since: lastRun(minifyJs)
    })
      .pipe(gTerser(opts.terser)
        .on('error', () => {
          this.emit('end');
        })
      )
      // .pipe(cached('min_js'))
      .pipe(rename({ extname: '.min.js' }))
      .pipe(size(opts.size))
      .pipe(dest(paths.scripts.prod))
      .pipe(bs.stream({ match: '**/*.min.js' }));
  } else {
    fancyLog(`${green('-> No minify JS...')}`);
  }

  done();
}
minifyJs.displayName = 'min:js';
minifyJs.description = 'Minify JS files';
