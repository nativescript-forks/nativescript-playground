// 
'use strict'

var gulp = require('gulp')
var ts = require('gulp-typescript')
var merge = require('merge2')



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



/*=====  HTML  ======*/
gulp.task('apply:html', () => {
	return merge(gulp.src([
		'./**/*.html',
		'!./node_modules/**/*'
	]).pipe(gulp.dest('../app')))
})

gulp.task('watch:html', () => {
	return gulp.watch([
		'./**/*.html',
		'!./node_modules/**/*'
	], ['apply:html'])
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



gulp.task('default', ['apply:tsc', 'apply:css', 'apply:xml', 'apply:html', 'watch:css', 'watch:xml', 'watch:html'], function () {
	gulp.watch([
		'./**/*.ts',
		'!./node_modules/**/*'
	], ['apply:tsc'])
})

