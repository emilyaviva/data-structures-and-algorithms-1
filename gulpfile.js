var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('default', ['test'], function() {});

gulp.task('test', function() {
  return gulp
    .src('test/*.js')
    .pipe(mocha());
});
