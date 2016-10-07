// 
"use strict"

var gulp = require("gulp")
var ts = require("gulp-typescript")
var merge = require("merge2")
var del = require("del")
var browserify = require("browserify")
var tsify = require("tsify")



let ENV = "native"

function getEnvPath() {
	return (ENV == "native") ? "../app" : "../web"
}



gulp.task("browserify:app", () => {
	return browserify()
		.add("main.ts")
		.plugin("tsify", {
			noImplicitAny: true
		})
		.bundle()
		.pipe(process.stdout)
})

gulp.task("b", ["browserify:app"])





/*=====  TSC  ======*/
let tsProject = ts.createProject("../tsconfig.json")
gulp.task("apply:tsc", () => {
	let result = gulp.src([
		"./**/*.ts",
		"!./node_modules/**/*"
	]).pipe(tsProject())

	return merge([
		result.js.pipe(gulp.dest(getEnvPath()))
	])
})



/*=====  TEMPLATES  ======*/
gulp.task("apply:templates", () => {
	return merge(gulp.src([
		"./**/*.xml",
		"./**/*.html",
		"!./node_modules/**/*"
	]).pipe(gulp.dest(getEnvPath())))
})

gulp.task("watch:templates", () => {
	return gulp.watch([
		"./**/*.xml",
		"./**/*.html",
		"!./node_modules/**/*"
	], ["apply:templates"])
})



/*=====  STYLES  ======*/
gulp.task("apply:styles", () => {
	return merge(gulp.src([
		"./**/*.css",
		"!./node_modules/**/*"
	]).pipe(gulp.dest(getEnvPath())))
})

gulp.task("watch:styles", () => {
	return gulp.watch([
		"./**/*.css",
		"!./node_modules/**/*"
	], ["apply:styles"])
})



/*=====  FONTS  ======*/
gulp.task("apply:fonts", () => {
	return merge(gulp.src([
		"./**/*.ttf",
		"!./node_modules/**/*"
	]).pipe(gulp.dest(getEnvPath())))
})



/*=====  CLEAN JS  ======*/
gulp.task("clean:js", () => {
	return del([
		"./**/*.js",
		"!./node_modules/**/*",
		"!./gulpfile.js",
	])
})



/*=====  CLEAN APP  ======*/
gulp.task("clean:app", () => {
	return del([
		"../app/**/*",
		"!../app/App_Resources",
		"!../app/App_Resources/**/*",
		"!../app/package.json",
	], {
		force: true,
	})
})



gulp.task("default", ["clean:js", "apply:fonts", "apply:styles", "apply:templates", "apply:tsc", "watch:styles", "watch:templates"], () => {
	return gulp.watch([
		"./**/*.ts",
		"!./node_modules/**/*",
	], ["apply:tsc"])
})

gulp.task("clean", ["clean:app", "clean:js"])

