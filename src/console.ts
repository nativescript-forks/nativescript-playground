// 

import * as application from 'application'
import eyes = require('eyes')
import style = require('ansi-styles')



(function() {

	let dumping = false
	const colorsMap = {
		log: 'blue',
		info: 'green',
		error: 'red',
	}

	function getStamp(): string {
		let now: Date = new Date()
		return (now.getHours() % 12 || 12) + ':' + now.getMinutes() + ':' + now.getSeconds() + ':' + now.getMilliseconds()
	}

	function getStack(): string {
		let index = (application.ios) ? 0 : 1
		let stack = new Error().stack.toString()
		stack = stack.replace(/^([^\n]*?\n){2}((.|\n)*)$/gmi, '$2')
		stack = stack.split('\n')[index]
		stack = stack.replace('file:///', '')
		let split = stack.split('@')
		let sendi = split[0]
		if (application.ios) {
			sendi = sendi + '@' + split[1]
		}
		return sendi.trim()
	}

	const log = console.log
	console.log = function(...args: Array<any>) {
		if (dumping == true) {
			log.call(this, ...args)
			return
		}

		let start = 0
		if (typeof args[0] == 'string') {
			args[0] = style.underline.open + args[0] + style.underline.close
			start++
		}

		let i: number, len: number = args.length
		for (i = start; i < len; i++) {
			args[i] = style.cyan.open + eyes.inspect(args[i])
		}

		args.unshift('\n' + style.blue.open + '[LOG]' + style.blue.close + ' ' + getStamp() + ' ' + getStack() + '\n.')
		args.push('\n.')

		log.call(this, ...args)
	}

	const dump = console.dump
	console.dump = <any>function(desc: string, obj: any) {
		dumping = true
		console.log('\n' + style.blue.open + '▼ ▼ ▼ ▼  ' + style.underline.open + desc + style.underline.close + '  ▼ ▼ ▼ ▼' + style.blue.close + ' ' + getStack())
		dump.call(this, obj)
		console.log('\n' + style.blue.open + '▲ ▲ ▲ ▲  ' + style.underline.open + desc + style.underline.close + '  ▲ ▲ ▲ ▲' + style.blue.close)
		dumping = false
	}



	console.keys = function(desc: string, obj: any) {
		dumping = true
		console.log('\n' + style.blue.open + '▼ ▼ ▼ ▼  ' + style.underline.open + desc + style.underline.close + '  ▼ ▼ ▼ ▼' + style.blue.close + ' ' + getStack())
		if (_.isUndefined(obj)) {
			console.log('\n' + style.red.open + 'IS UNDEFINED' + style.red.close)
		} else if (_.isNull(obj)) {
			console.log('\n' + style.red.open + 'IS NULL' + style.red.close)
		} else {
			let sendi: string = '\n'
			let fns: Array<string> = _.functionsIn(obj)
			let _fns: Array<string> = []
			let keys: Array<string> = _.difference(_.keysIn(obj), fns)
			let _keys: Array<string> = []

			{
				let i: number, len: number = keys.length
				for (i = 0; i < len; i++) {
					if (keys[i].charAt(0) == '_') {
						_keys.push(keys[i])
					}
				}
			}
			keys = _.difference(keys, _keys)

			{
				let i: number, len: number = keys.length
				if (len > 0) {
					sendi = sendi + '\n' + style.blue.open + 'KEYS' + style.blue.close + '\n'
				}
				for (i = 0; i < len; i++) {
					sendi = sendi + keys[i] + '\n'
				}
			}

			{
				let i: number, len: number = _keys.length
				if (len > 0) {
					sendi = sendi + '\n' + style.blue.open + '_PRIVATE KEYS' + style.blue.close + '\n'
				}
				for (i = 0; i < len; i++) {
					sendi = sendi + _keys[i] + '\n'
				}
			}

			{
				let i: number, len: number = fns.length
				for (i = 0; i < len; i++) {
					if (fns[i].charAt(0) == '_') {
						_fns.push(fns[i])
					}
				}
			}
			fns = _.difference(fns, _fns)

			{
				let i: number, len: number = fns.length
				if (len > 0) {
					sendi = sendi + '\n' + style.blue.open + 'FUNCTIONS' + style.blue.close + '\n'
				}
				for (i = 0; i < len; i++) {
					sendi = sendi + fns[i] + '()\n'
				}
			}

			{
				let i: number, len: number = _fns.length
				if (len > 0) {
					sendi = sendi + '\n' + style.blue.open + '_PRIVATE FUNCTIONS' + style.blue.close + '\n'
				}
				for (i = 0; i < len; i++) {
					sendi = sendi + _fns[i] + '()\n'
				}
			}

			console.log(sendi + '\n.')
		}
		console.log('\n' + style.blue.open + '▲ ▲ ▲ ▲  ' + style.underline.open + desc + style.underline.close + '  ▲ ▲ ▲ ▲' + style.blue.close + '\n')
		dumping = false
	}






} ())



