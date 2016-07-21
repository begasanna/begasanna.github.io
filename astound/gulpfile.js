var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('minify', function(){
    gulp.src('dist/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('app/js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js.min'));
});
gulp.task('sass', function(){
   return gulp.src('dist/sass/main.scss')
  .pipe(sass())
  .pipe (gulp.dest('app/css'))
});

// Действия по умолчанию
gulp.task('default', function(){

  gulp.watch("dist/js/*.js", function(event){
    gulp.run('minify');
  });

  gulp.watch("dist/sass/*.scss", function(event){
    gulp.run('sass');
  });
});
