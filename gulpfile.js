var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    path = require('path'),
    sourcemaps = require('gulp-sourcemaps'),
    fs = require('fs'),
    del = require('del'),
    end_dependencies = ['sass'],
    watchError = function(event) {
        console.log('Event type: ' + event.type); // added, changed, or deleted
        console.log('Event path: ' + event.path); // The path of the modified file
    },
    errorAlert = function(_error) {
        console.log(_error.toString());
        this.emit("end");
    };
gulp.task('end', end_dependencies, function() {
    console.log('complete');
});
gulp.task('sass', function() {
    return gulp.src([
            'assets/sass/dev/**/*.scss',
        ])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
        }))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(sourcemaps.write('../build'))
        .pipe(gulp.dest('assets/sass/build'));
});
gulp.task('watch', function() {
    gulp.watch([
        'assets/sass/dev/**/*.scss',
        'assets/sass/imports/**/*.scss',
    ], ['sass']).on('error', watchError);

});

gulp.task('default', function() {
    del('assets/js/build/**/*');
    del('assets/sass/build/**/*');
    var tasks = [];
    tasks.push('sass');
    tasks.push('watch');
    tasks.push('end');
    gulp.start(tasks);
});
