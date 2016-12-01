// 
'use strict'

var _ = require('lodash')
var spawn = require('child_process').spawn
var gulp = require('gulp')
var ts = require('gulp-typescript')
var debug = require('gulp-debug')
var util = require('gulp-util')
var cache = require('gulp-cached')
var watch = require('gulp-watch')
var uglify = require('gulp-uglify')
var del = require('del')





function NUKE_EVERYTHING() {
	return del([
		'../app/**/*',
		'!../app/package.json',
		'!../app/fonts',
		'!../app/fonts/**/*',
		'!../app/App_Resources',
		'!../app/App_Resources/**/*',
	], {
		force: true,
	})
}
NUKE_EVERYTHING.displayName = 'Nuking Everything'





let ENV = 'DEVELOPMENT'
const project = ts.createProject('../tsconfig.json')
const reporter = ts.reporter.nullReporter()

function APPLY_TS() {
	let dest = '../app'
	let src = gulp.src([
			'./**/*.ts',
			'!./node_modules',
			'!./node_modules/**/*',
		])
		.pipe(project(reporter))
		.js
		.pipe(cache('ts'))
		.pipe(debug({
			title: 'TS',
		}))
	if (ENV == 'PRODUCTION') {
		return src
			.pipe(uglify())
			.pipe(gulp.dest(dest))
	}
	return src
		.pipe(gulp.dest(dest))
}
APPLY_TS.displayName = 'Applying Typescript'
const _APPLY_TS = _.debounce(APPLY_TS, 10)

function APPLY_EVERYTHING() {
	return gulp.src([
			'./**/*.css',
			'./**/*.xml',
			'./**/*.js',
			'./**/*.json',
			'!./package.json',
			'!./gulpfile.js',
			'!./node_modules',
			'!./node_modules/**/*',
		])
		.pipe(cache('ev'))
		.pipe(debug({
			title: 'EV',
		}))
		.pipe(gulp.dest('../app'))
}
APPLY_EVERYTHING.displayName = 'Applying Everything'
const _APPLY_EVERYTHING = _.debounce(APPLY_EVERYTHING, 10)





function WATCH_TS() {
	watch([
			'./**/*.ts',
			'!./node_modules',
			'!./node_modules/**/*',
		], {
			readDelay: 0,
			read: false,
		})
		.on('add', _APPLY_TS)
		.on('change', _APPLY_TS)
		.on('unlink', function (path) {
			path = path.substring(0, path.length - 2) + 'js'
			Object.keys(cache.caches['ts']).forEach(function (file) {
				if (file.indexOf(path) != -1) {
					delete cache.caches['ts'][file]
				}
			})
			del('../app/' + path, {
				force: true,
			})
		})
}
WATCH_TS.displayName = 'Watching Typescript'

function WATCH_EVERYTHING() {
	watch([
			'./**/*.css',
			'./**/*.xml',
			'./**/*.js',
			'./**/*.json',
			'!./package.json',
			'!./gulpfile.js',
			'!./node_modules',
			'!./node_modules/**/*',
		], {
			readDelay: 0,
			read: false,
		})
		.on('add', _APPLY_EVERYTHING)
		.on('change', _APPLY_EVERYTHING)
		.on('unlink', function (path) {
			Object.keys(cache.caches['ev']).forEach(function (file) {
				if (file.indexOf(path) != -1) {
					delete cache.caches['ev'][file]
				}
			})
			del('../app/' + path, {
				force: true,
			})
		})
}
WATCH_EVERYTHING.displayName = 'Watching Everything'





gulp.task('default',
	gulp.series([
		APPLY_TS,
		APPLY_EVERYTHING,
		gulp.parallel([
			WATCH_TS,
			WATCH_EVERYTHING,
		]),
	])
)





function PREPARE_PLATFORM(platform) {
	return new Promise(function (resolve) {
		let cmd = spawn('tns', ['prepare', platform])
		cmd.stdout.on('data', function (data) {
			console.log(data.toString().trim())
		})
		cmd.stderr.on('data', function (data) {
			console.log(data.toString().trim())
		})
		cmd.on('exit', resolve)
	})
}
PREPARE_PLATFORM.displayName = 'Preparing Platform'

function PREPARE_IOS() {
	return PREPARE_PLATFORM('ios')
}
PREPARE_IOS.displayName = 'Preparing iOS'

function PREPARE_ANDROID() {
	return PREPARE_PLATFORM('android')
}
PREPARE_ANDROID.displayName = 'Preparing Android'



const DELETE_MODULES = [
	'moment',
	'lodash',
	'source-map',
	'uglify-js',
	'readable-stream',
	'yargs',
]

function DELETE_PLATFORM_MODULES(path) {
	let modules = []
	let i, len = DELETE_MODULES.length
	for (i = 0; i < len; i++) {
		modules.push(path + DELETE_MODULES[i])
	}
	console.log('modules >', modules)
	return modules
}

function DELETE_IOS_MODULES() {
	return del(DELETE_PLATFORM_MODULES('../platforms/ios/client/app/tns_modules/'), {
		force: true,
	})
}
DELETE_IOS_MODULES.displayName = 'Deleting iOS Modules'

function DELETE_ANDROID_MODULES() {
	return del(DELETE_PLATFORM_MODULES('../platforms/android/src/main/assets/app/tns_modules/'), {
		force: true,
	})
}
DELETE_ANDROID_MODULES.displayName = 'Deleting Android Modules'

function COMPRESS_PLATFORM_MODULES(path) {
	return gulp.src([
			path + '/**/*.js',
		])
		.pipe(debug({
			title: 'COMPRESS',
		}))
		.pipe(uglify())
		.pipe(gulp.dest(path))
}

function COMPRESS_IOS_MODULES() {
	return COMPRESS_PLATFORM_MODULES('../platforms/ios/client/app/tns_modules')
}
COMPRESS_IOS_MODULES.displayName = 'Compressing iOS Modules'

function COMPRESS_ANDROID_MODULES() {
	return COMPRESS_PLATFORM_MODULES('../platforms/android/src/main/assets/app/tns_modules')
}
COMPRESS_ANDROID_MODULES.displayName = 'Compressing Android Modules'



function RELEASE(done) {
	ENV = 'PRODUCTION'
	done()
}
RELEASE.displayName = 'Releasing'
gulp.task('release',
	gulp.series([
		RELEASE,
		NUKE_EVERYTHING,
		APPLY_TS,
		APPLY_EVERYTHING,
	])
)

function RELEASE_IOS(done) {
	RELEASE(done)
}
RELEASE_IOS.displayName = 'Releasing iOS'
gulp.task('release.i',
	gulp.series([
		RELEASE_IOS,
		PREPARE_IOS,
		DELETE_IOS_MODULES,
		COMPRESS_IOS_MODULES,
	])
)

function RELEASE_ANDROID(done) {
	RELEASE(done)
}
RELEASE_ANDROID.displayName = 'Releasing Android'
gulp.task('release.a',
	gulp.series([
		RELEASE_ANDROID,
		PREPARE_ANDROID,
		DELETE_ANDROID_MODULES,
		COMPRESS_ANDROID_MODULES,
	])
)





function CLEAN(done) {
	done()
}
CLEAN.displayName = 'Cleaning'
gulp.task('clean',
	gulp.series([
		NUKE_EVERYTHING,
		CLEAN,
	])
)



function APPLY(done) {
	done()
}
APPLY.displayName = 'Applying'
gulp.task('apply',
	gulp.series([
		APPLY_TS,
		APPLY_EVERYTHING,
		APPLY,
	])
)



function REFRESH(done) {
	done()
}
REFRESH.displayName = 'Refreshing'
gulp.task('refresh',
	gulp.series([
		NUKE_EVERYTHING,
		APPLY_TS,
		APPLY_EVERYTHING,
		REFRESH,
	])
)

