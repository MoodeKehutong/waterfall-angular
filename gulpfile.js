var gulp    = require('gulp'),
	connect = require('gulp-connect');

gulp.task('server', function() {
	connect.server({
		root: '.',
		livereload: true
	});
});

gulp.task('default', ['server'], function() {});