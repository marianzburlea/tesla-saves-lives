'use strict';

// This is a copy of imagemin.js and adapted for fonts

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget, dirs.fonts.replace(/^_/, ''));

  // Imagemin
  gulp.task('fonts', () => {
    return gulp.src(path.join(dirs.source, dirs.fonts, '**/*.{eot,svg,ttf,woff,woff2}'))
      .pipe(plugins.changed(dest))
      .pipe(gulp.dest(dest));
  });
}
