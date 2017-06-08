;(function(r) {
  'use strict';

  var gulp         = r('gulp');
  var sass         = r('gulp-sass');
  var browserify   = r('browserify');
  var babelify     = r('babelify');
  var source       = r('vinyl-source-stream');
  var buffer       = r('vinyl-buffer');
  var uglify       = r('gulp-uglify');
  var sourcemaps   = r('gulp-sourcemaps');
  var autoprefixer = r('gulp-autoprefixer');
  var livereload   = r('gulp-livereload');
  var browserSync  = r('browser-sync').create();

  gulp.task('apply-prod-environment', function() {
    process.env.NODE_ENV = 'development';
  });

  gulp.task('js', function () {
    return browserify({entries: './app/app.js', extensions: ['.js'], debug: true})
      .transform('babelify', {presets: ['es2015']})
      .bundle()
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./assets/js'))
      .pipe(livereload())
      .pipe(browserSync.stream());
  });

  gulp.task('sass', function() {
    return gulp.src('./app/sass/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(sourcemaps.init())
      .pipe(sourcemaps.write())
      .pipe(autoprefixer())
      .pipe(gulp.dest('./assets/css'))
      .pipe(browserSync.stream());
  });

  gulp.task('serve', ['js', 'sass'], function() {
    browserSync.init({
      server: './'
    });

    gulp.watch('./app/**/*.js', ['js']);
    gulp.watch('./app/sass/*.scss', ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);
  });

  gulp.task('default', ['apply-prod-environment', 'serve']);
})(require);
