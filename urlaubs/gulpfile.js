var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('minify', function(){
    gulp.src('app/work/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('app/dist/js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/dist/js.min'));
});
gulp.task('sass', function(){
   return gulp.src('app/work/sass/main.scss')
  .pipe(sass())
  .pipe (gulp.dest('app/dist/css'))
});

// Действия по умолчанию
gulp.task('default', function(){

  gulp.watch("app/work/js/*.js", function(event){
    gulp.run('minify');
  });

  gulp.watch("app/work/sass/*.scss", function(event){
    gulp.run('sass');
  });
});
