var gulp = require('gulp'),
    del = require('del'),
    series = require('gulp-series'),
    inject = require('gulp-inject'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    gif = require('gulp-if');


gulp.task('debug:clean', function () {
    return del('build/debug/**/*');
});
gulp.task('debug:sass', function () {
    return gulp
        .src(['application/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/debug'))
});
gulp.task('debug:inject', function () {
    let libs = gulp.src([
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
        'web/application/system.js',
        //'web/styles/*.css'
    ], {read: false});

    return gulp
        .src('web/views/index.pug')
        .pipe(inject(libs, {ignorePath: ['node_modules', 'web/application']}))
        .pipe(gulp.dest('web/views'));
});


gulp.task('release:clean', function () {
    return del([
        'build/compiled/**/*',
        'build/temp/**/*',
        'build/release/**/*',
        '!build/compiled/main.release.ts',
        '!build/release/node_modules',
        '!build/release/.idea'
    ]);
});
gulp.task('release:precompile', function () {
    return gulp.src(['web/application/**/*'])
        .pipe(gulp.dest('build/compiled'))
});
gulp.task('release:libs', function () {
    return gulp.src([
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'web/application/module.js',
        'build/temp/bundle.min.js'
    ])
        .pipe(uglify())
        .pipe(concat("scripts.js"))
        .pipe(gulp.dest('build/release/web/js'));
});
gulp.task('release:move', function () {
    return gulp.src([
        'start.js',
        'package.json',
        'web/index.js',
        'web/favicon/*',
        'web/views/*'
    ], {base: './'})
        .pipe(gulp.dest('./build/release'));
});
gulp.task('release:sass', function () {
    gulp.src(['web/styles/**/*.scss'])
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('build/release/web/css'))
});
gulp.task('release:inject', function () {
    let files = gulp.src([
        /*'build/release/js/module.js',
         'build/release/js/reflect.js',
         'build/release/js/zone.js',*/
        'build/release/web/js/scripts.js',
        'build/release/web/css/styles.css'
    ], {read: false});

    return gulp.src('build/release/web/views/index.pug')
        .pipe(inject(files, {ignorePath: 'build/release/web'}))
        .pipe(gulp.dest('build/release/web/views'));
});