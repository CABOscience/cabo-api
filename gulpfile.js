var gulp = require('gulp')
var del = require('del')

// Globals
global.__ROOT_DIR__ = __dirname

// Plugins
var babel = require('gulp-babel')

// Server
gulp.task('s_babel', function () {
  // Babel
  return gulp
    .src('server/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('build/server/'))
})
gulp.task('s_copy', function () {
  // Copy other files needed (not .js)
  return gulp
    .src(['server/**/*', 'server/**/.*', '!server/**/*.js'])
    .pipe(gulp.dest('build/server/'))
})

// Root
gulp.task('r_copy', function () {
  // Copy root files
  return gulp
    .src([
      // ".gitignore", // ?
      'package.json'
    ])
    .pipe(gulp.dest('build/'))
})

gulp.task('server', ['s_copy', 's_babel'])
gulp.task('root', ['r_copy'])
gulp.task('prod', ['root', 'server'])

gulp.task('default', ['prod'])

// Cleanup
gulp.task('clean:server', function () {
  return del([
    'build/server/'
  ])
})
gulp.task('clean:root', function () {
  return del([
    'build/'
  ])
})
gulp.task('clean', ['clean:root'])
