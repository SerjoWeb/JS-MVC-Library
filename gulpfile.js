;(function(r) {
    'use strict';
  
    const { gulp, dest, src, build, watch, series } = r('gulp');
    const sass         = r('gulp-sass')(require('sass'));
    const browserify   = r('browserify');
    const babelify     = r('babelify');
    const source       = r('vinyl-source-stream');
    const buffer       = r('vinyl-buffer');
    const uglify       = r('gulp-uglify');
    const sourcemaps   = r('gulp-sourcemaps');
    const autoprefixer = r('gulp-autoprefixer');
    const livereload   = r('gulp-livereload');
    const browserSync  = r('browser-sync').create();
    const port         = process.env.SERVER_PORT || 4444;
  
    const applyProdEnvironment = () => {
      return process.env.NODE_ENV = 'development';
    };

    const processJS = () => {
      return browserify({entries: './app/app.js', extensions: ['.js'], debug: true})
        .transform('babelify', {presets: ['@babel/preset-env']})
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(dest('./assets/js'))
        .pipe(livereload())
        .pipe(browserSync.stream());
    };
  
    const processSass = () => {
      return src('./app/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .pipe(dest('./assets/css'))
        .pipe(browserSync.stream());
    };
  
    const server = () => {
      browserSync.init({
        server: './',
        port: port
      });
  
      watch(['./app/**/*.js'], () => { processJS(); });
      watch(['./app/sass/*.scss'], () => { processSass(); });
      watch(['./*.html'], () => {}).on('change', browserSync.reload);
    };
  
    exports.build = build;
    exports.default = series(server);
  })(require);