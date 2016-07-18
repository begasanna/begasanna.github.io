var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs');

gulp.task('sass', function(){
   return gulp.src('app/sass/main.scss')
  .pipe(sass())
  .pipe (gulp.dest('app/css'))
});

gulp.task('scripts', function(){
  return gulp.src (['app/js/work/*.js'])
  .pipe(concat('script.main.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js/ext'))
});

gulp.task('watch', function(){
  gulp.watch('app/sass/*.scss',['sass'])
});
