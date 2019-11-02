/*!
 * Adorade (v1.0.0): tools/util/config.js
 * Copyright (c) 2018 - 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { args } from './plugins';

export const dirs = {
  root: './',
  src: 'src',
  dev: 'tmp',
  prod: 'dist',
  test: 'test',
  deploy: '.publish',
  logs: 'logs'
};

export const paths = {
  styles: {
    src: `${dirs.src}/scss/**/*.scss`,
    dev: `${dirs.dev}/css/`,
    prod: `${dirs.prod}/css/`,
    filter: [ `${dirs.dev}/css/*.css`, '!**/*.min.css' ]
  },
  scripts: {
    src: `${dirs.src}/mjs/**/*.mjs`,
    input: args.production ? `${dirs.src}/mjs/script.mjs` : `${dirs.src}/mjs/script-dev.mjs`,
    dev: `${dirs.dev}/js/`,
    prod: `${dirs.prod}/js/`,
    filter: [ `${dirs.dev}/js/*.js`, '!**/*.min.js' ]
  },
  vendor: {
    src: {
      css: [
        `${dirs.src}/vendor/css/animate.min.css`,                // 3.7.2
        `${dirs.src}/vendor/css/cookieconsent.min.css`           // 3.1.1
      ],
      js: [
        `${dirs.src}/vendor/js/jquery.min.js`,                   // 3.4.1
        `${dirs.src}/vendor/js/popper.min.js`,                   // 1.16.0
        `${dirs.src}/vendor/js/unikorn.min.js`,
        `${dirs.src}/vendor/js/yall.min.js`,                     // 3.1.6
        `${dirs.src}/vendor/js/browser.min.js`,                  // 4.0.0
        `${dirs.src}/vendor/js/cookieconsent.min.js`             // 3.1.1
      ]
    },
    dev: {
      css: `${dirs.dev}/css/vendor/`,
      js: `${dirs.dev}/js/vendor/`
    },
    prod: {
      css: `${dirs.prod}/css/vendor/`,
      js: `${dirs.prod}/js/vendor/`
    },
    watch: {
      css: `${dirs.src}/vendor/css/**/*.css`,
      js: `${dirs.src}/vendor/js/**/*.js`
    }
  },
  fonts: {
    css: {
      src: `${dirs.src}/fonts/**/*.css`,
      dev: `${dirs.dev}/fonts/`,
      prod: `${dirs.prod}/fonts/`
    },
    svg: {
      src: `${dirs.src}/fonts/**/*.svg`,
      dev: `${dirs.dev}/fonts/`,
      prod: `${dirs.prod}/fonts/`
    }
  },
  images: {
    src: `${dirs.src}/images/**/*.{gif,jpg,jpeg,png,svg}`,
    webp: `${dirs.src}/images/**/*.{jpg,jpeg,png}`,
    dev: `${dirs.dev}/images/`,
    prod: `${dirs.prod}/images/`
  },
  statics: {
    src: {
      icons: `${dirs.src}/statics/**/*.{ico,png,svg}`,
      conf: `${dirs.src}/statics/**/*.{json,txt,webmanifest,xml}`
    },
    dev: `${dirs.dev}/statics/`,
    prod: `${dirs.prod}/statics/`,
    ext: '**/*.{json,txt,webmanifest,xml}'
  },
  views: {
    src: [ `${dirs.src}/views/**/*.pug`, '!**/_*.pug' ],
    all: `${dirs.src}/views/**/*.pug`,
    data: `${dirs.src}/views/data/**/*.json`,
    datas: `${dirs.src}/views/data/`,
    dev: `${dirs.dev}/`,
    prod: `${dirs.prod}/`,
    files: {
      dev: `${dirs.dev}/**/*.html`,
      prod: `${dirs.prod}/**/*.html`
    }
  },
  test: {
    js: `${dirs.test}/js/`
  },
  logs: {
    gulp: `${dirs.logs}/gulp/`
  }
};
