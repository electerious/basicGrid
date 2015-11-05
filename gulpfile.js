'use strict'

let name    = require('./package.json').moduleName,
    gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')()

const catchError = function(err) {

	console.log(err.toString())
	this.emit('end')

}

const styles = function() {

	gulp.src('./src/styles/main.scss')
	    .pipe(plugins.sass())
	    .on('error', catchError)
	    .pipe(plugins.rename((path) => path.basename = name + '.min'))
	    .pipe(plugins.autoprefixer('last 2 version', '> 1%'))
	    .pipe(plugins.minifyCss())
	    .pipe(gulp.dest('./dist'))

}

const watch = function() {

	gulp.watch('./src/styles/**/*.scss', ['styles'])

}

gulp.task('styles', styles)
gulp.task('default', ['styles'])
gulp.task('watch', ['default'], watch)