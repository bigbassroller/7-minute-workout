var Path = require('path');
var Gulp = require('gulp');
var Newer = require('gulp-newer');
var Concat = require('gulp-concat');
var Sass = require('gulp-sass');

Gulp.task('sass', function () {

    var bundleConfigs = [{
        entries: [
            './app/scss/variables.scss',
            './app/scss/bootstrap.scss',
            './app/scss/font-awesome.scss',
            './app/scss/theme.scss',
            // './app/scss/custom.scss',
            './app/scss/style.scss'
        ],
        dest: './priv/static/css',
        outputName: 'style.css'
    }];

    return bundleConfigs.map(function (bundleConfig) {

        return Gulp.src(bundleConfig.entries)
            .pipe(Newer(Path.join(bundleConfig.dest, bundleConfig.outputName)))
            .pipe(Concat(bundleConfig.outputName))
            // .pipe(Sass({outputStyle: 'compressed'}))
            .pipe(Sass())
            .pipe(Gulp.dest(bundleConfig.dest));
    });
});
