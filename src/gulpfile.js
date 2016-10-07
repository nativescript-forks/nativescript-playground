// 
'use strict'

var gulp = require('gulp')
var ts = require('gulp-typescript')
var merge = require('merge2')
var del = require('del')



/*=====  TSC  ======*/
let tsProject = ts.createProject('../tsconfig.json')
gulp.task('apply:tsc', () => {
	let result = gulp.src([
		'./**/*.ts',
		'!./node_modules/**/*'
	]).pipe(tsProject())

	return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done.
		result.js.pipe(gulp.dest('../app'))
	])
})



/*=====  TEMPLATES  ======*/
gulp.task('apply:templates', () => {
	return merge(gulp.src([
		'./**/*.xml',
		'./**/*.html',
		'!./node_modules/**/*'
	]).pipe(gulp.dest('../app')))
})

gulp.task('watch:templates', () => {
	return gulp.watch([
		'./**/*.xml',
		'./**/*.html',
		'!./node_modules/**/*'
	], ['apply:templates'])
})



/*=====  STYLES  ======*/
gulp.task('apply:styles', () => {
	return merge(gulp.src([
		'./**/*.css',
		'!./node_modules/**/*'
	]).pipe(gulp.dest('../app')))
})

gulp.task('watch:styles', () => {
	return gulp.watch([
		'./**/*.css',
		'!./node_modules/**/*'
	], ['apply:styles'])
})



/*=====  FONTS  ======*/
gulp.task('apply:fonts', () => {
	return merge(gulp.src([
		'./**/*.ttf',
		'!./node_modules/**/*'
	]).pipe(gulp.dest('../app')))
})



/*=====  CLEAN JS  ======*/
gulp.task('clean:js', () => {
	return del([
		'./**/*.js',
		'!./node_modules/**/*',
		'!./gulpfile.js',
	])
})



/*=====  CLEAN APP  ======*/
gulp.task('clean:app', () => {
	return del([
		'../app/**/*',
		'!../app/App_Resources',
		'!../app/App_Resources/**/*',
		'!../app/package.json',
	], {
		force: true,
	})
})



gulp.task('default', ['clean:js', 'apply:fonts', 'apply:styles', 'apply:templates', 'apply:tsc', 'watch:styles', 'watch:templates'], function () {
	gulp.watch([
		'./**/*.ts',
		'!./node_modules/**/*',
	], ['apply:tsc'])
})

gulp.task('clean', ['clean:app', 'clean:js'])

