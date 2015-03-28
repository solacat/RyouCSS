var gulp     = require('gulp'),
    rename   = require('gulp-rename'),
    postcss  = require('gulp-postcss'),
    less     = require('gulp-less'),
    cssgrace = require('cssgrace'),
    del      = require('del')

gulp.task('default',['clean'], function () {
    var processors = [
        require('cssgrace')
    ];
    gulp.src('src/less/layout.less')
        .pipe(less({
            compress: true
        }))
        .pipe(postcss(processors))
        .pipe(gulp.dest('build/css'))
});

gulp.task('clean', function(cb) {
    del(['build/css', 'build/js'], cb)
});
