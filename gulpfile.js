var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    webpack = require('webpack-stream'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    path = require('path'),
    babel = require("gulp-babel"),
    sourcemaps = require('gulp-sourcemaps'),
    fs = require('fs'),
    del = require('del'),
    end_dependencies = ['sass', 'js'],
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
    gulp.watch([
        'assets/js/dev/**/*.js',
        'assets/js/lib/**/*.js',
    ], ['js']).on('error', watchError);

});
gulp.task("js", function() {
    return gulp.src("assets/js/dev/app.js")
        .pipe(babel())
        .pipe(webpack({
            output: {
                path: path.resolve(__dirname, 'build'),
                filename: 'app.js'
            },
            module: {
                loaders: [{
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015'],
                        cacheDirectory: true
                    }
                }],
            },
            devtool: 'source-map'
        }))
        .pipe(gulp.dest("assets/js/build"));
});
gulp.task('default', function() {
    del('assets/js/build/**/*');
    del('assets/sass/build/**/*');
    var tasks = [];
    tasks.push('sass');
    tasks.push('js');
    tasks.push('watch');
    tasks.push('end');
    gulp.start(tasks);
});
