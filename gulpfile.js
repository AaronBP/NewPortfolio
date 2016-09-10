'use strict';

// ////////////////////////////
// Require modules
// ////////////////////////////

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    jade = require('gulp-jade'),
    fileInclude = require('gulp-file-include'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    sass = require('gulp-sass');

// ////////////////////////////
// Sass Tasks
// ////////////////////////////

gulp.task('sass', function(){
    return gulp.src('./sass/**/*.sass')
        .pipe(sass({indentedSyntax: true}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('./public/css'))
        .pipe(reload({stream: true}));
});

// ////////////////////////////
// Jade Tasks
// ////////////////////////////

gulp.task('jade', function(){
    return gulp.src('./jade/**/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./public/html'));
});

// ////////////////////////////
// Gulp File include
// ////////////////////////////

gulp.task('file-include', function(){
    return gulp.src('./public/html/index.html')
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'))
        .pipe(reload({stream: true}));
});

// ////////////////////////////
// Browser Sync Tasks
// ////////////////////////////

gulp.task('browser-sync', function(){
    browserSync({
        server:{
            baseDir: './'
        }
    });
});

// ////////////////////////////
// Watch Tasks
// ////////////////////////////

gulp.task('watch', function(){
    gulp.watch('./sass/**/*.sass', ['sass']);
    gulp.watch('./jade/**/*.jade', ['jade']);
    gulp.watch('./public/html/**/*.html', ['file-include']);
    gulp.watch('./public/js/**/*.js', ['file-include']);
});

// ////////////////////////////
// Default Tasks
// ////////////////////////////

gulp.task('default', ['sass', 'jade', 'browser-sync', 'watch']);
