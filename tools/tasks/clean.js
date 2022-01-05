/*!
 * Adorade (v1.0.0): tools/tasks/clean.js
 * Copyright (c) 2018 - 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { args, del, fancyLog, green, magenta, dirs } from '../utils/index.js';

let delTarget;

if (args.production) {
  delTarget = [`${dirs.dev}`, `${dirs.prod}`];
} else {
  delTarget = `${dirs.dev}`;
}

export async function clean () {
  await del(delTarget);
  fancyLog(`${green('-> Clean all files')} in ${magenta(delTarget)} folder`);
}
clean.displayName = 'clean:all';
clean.description = 'Clean up dist folders';
