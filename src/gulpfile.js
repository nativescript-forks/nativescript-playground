// 
'use strict'

var gulp = require('gulp')
var ts = require('gulp-typescript')
var merge = require('merge2')
var del = require('del')



/*=====  TSC  ======*/
let tsProject = ts.createProject('../tsconfig.json')
gulp.task('apply:tsc', function () {
	let result = gulp.src([
		'./**/*.ts',
		'!./node_modules/**/*'
	]).pipe(tsProject())

	return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done.
		result.js.pipe(gulp.dest('../app'))
	])
})



/*=====  XML  ======*/
gulp.task('apply:xml', () => {
	return merge(gulp.src([
		'./**/*.xml',
		'!./node_modules/**/*'
	]).pipe(gulp.dest('../app')))
})

gulp.task('watch:xml', () => {
	return gulp.watch([
		'./**/*.xml',
		'!./node_modules/**/*'
	], ['apply:xml'])
})



/*=====  CSS  ======*/
gulp.task('apply:css', () => {
	return merge(gulp.src([
		'./**/*.css',
		'!./node_modules/**/*'
	]).pipe(gulp.dest('../app')))
})

gulp.task('watch:css', () => {
	return gulp.watch([
		'./**/*.css',
		'!./node_modules/**/*'
	], ['apply:css'])
})



/*=====  JS  ======*/
gulp.task('apply:js', () => {
	del([
		'./**/*.js',
		'!./node_modules/**/*',
		'!./gulpfile.js'
	])
})



gulp.task('default', ['apply:tsc', 'apply:js', 'apply:css', 'apply:xml', 'watch:css', 'watch:xml'], function () {
	gulp.watch([
		'./**/*.ts',
		'!./node_modules/**/*'
	], ['apply:tsc'])
})

