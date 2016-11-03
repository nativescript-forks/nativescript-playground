// 

import * as application from 'application'
var colors = require('ansicolors')
var styles = require('ansistyles')



global.tnsconsole = {
	'logit': function logit(type: string, args: any[]) {
		let errs = []
		let str = '\n' // + this.getStack() + '\n'
		{
			let i, len = args.length
			for (i = 0; i < len; i++) {
				let arg // cause args[i] = JSON.stringify(args[i]) would overwrite the original object
				if (typeof args[i] == 'object') {
					if (args[i] instanceof Error) {
						errs.push(args[i])
					}
					arg = JSON.stringify(args[i])
				} else if (i == 1 && typeof args[i] == 'string') {
					arg = styles.underline(args[i])
				} else {
					arg = args[i]
				}
				if (i == 0) {
					str = str + arg + this.getStack(2) + '\n'
				} else if (i == len - 1) {
					str = str + arg
				} else {
					str = str + arg + ' > '
				}
			}
		}
		str = str + '\n \n'
		console[type](str)
		{
			let i, len = errs.length
			for (i = 0; i < len; i++) {
				console.error(errs[i])
				console.dump(errs[i])
				this.dumpit('ERROR', errs[i])
				let stack: string = (<any>(new Error())).stack.toString()
				console.error(stack)
				console.trace()
				if (errs[i].description) {
					console.error(errs[i].description)
				}
			}
		}
	},

	'getStack': function getStack(num: number): string {
		if (application.ios) {
			num--
		}

		let now: Date = new Date()
		let t: string = (now.getHours() % 12 || 12) + ':' + now.getMinutes() + ':' + now.getSeconds() + ':' + now.getMilliseconds() + ' '
		// let t: string = moment().format('hh:mm:ss:SSS') + ' '
		let stack: string = (<any>(new Error())).stack.toString()
		if (stack) {
			stack = stack.replace(/^([^\n]*?\n){2}((.|\n)*)$/gmi, '$2')
			stack = stack.split('\n')[num]
			stack = '@' + stack.substring(6, stack.length)
		} else {
			stack = 'IDK...'
		}
		let ia: number = stack.indexOf('/data/')
		let ib: number = stack.indexOf('/app/')
		let a: string = stack.substring(0, ia)
		let b: string = stack.substring(ib + 4, stack.length)
		return t + a + b
	},

	'log': function log(...args: any[]) {
		args.unshift(colors.blue('[LOG] '))
		this.logit('log', args)
	},

	'info': function info(...args: any[]) {
		args.unshift(colors.green('[INFO] '))
		this.logit('info', args)
	},

	'warn': function warn(...args: any[]) {
		args.unshift(colors.yellow('[WARN] '))
		this.logit('warn', args)
	},

	'error': function error(...args: any[]) {
		args.unshift(colors.red('[ERROR] '))
		if (typeof args[1] == 'string') {
			args[1] = colors.red(args[1])
		}
		this.logit('error', args)
	},

	'dumpit': function dumpit(desc: string, obj: any) {
		console.log('\n' + colors.blue('▼ ▼ ▼ ▼  ' + styles.underline(desc) + '  ▼ ▼ ▼ ▼') + ' ' + this.getStack(1))
		if (_.isUndefined(obj) || _.isNull(obj)) {
			console.log('\n' + colors.red('IS NULL'))
		} else {
			// this.chrome(desc, obj)
			console.dump(obj)
		}
		console.log('\n' + colors.blue('▲ ▲ ▲ ▲  ' + styles.underline(desc) + '  ▲ ▲ ▲ ▲') + '\n')
	},

	'keys': function keys(desc: string, obj: any) {
		console.log('\n' + colors.blue('▼ ▼ ▼ ▼  ' + styles.underline(desc) + '  ▼ ▼ ▼ ▼') + ' ' + this.getStack(1))
		if (_.isUndefined(obj)) {
			console.log('\n' + colors.red('IS UNDEFINED'))
		} else if (_.isNull(obj)) {
			console.log('\n' + colors.red('IS NULL'))
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
					sendi = sendi + '\n' + colors.blue('KEYS') + '\n'
				}
				for (i = 0; i < len; i++) {
					sendi = sendi + keys[i] + '\n'
				}
			}

			{
				let i: number, len: number = _keys.length
				if (len > 0) {
					sendi = sendi + '\n' + colors.blue('_PRIVATE KEYS') + '\n'
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
					sendi = sendi + '\n' + colors.blue('FUNCTIONS') + '\n'
				}
				for (i = 0; i < len; i++) {
					sendi = sendi + fns[i] + '()\n'
				}
			}

			{
				let i: number, len: number = _fns.length
				if (len > 0) {
					sendi = sendi + '\n' + colors.blue('_PRIVATE FUNCTIONS') + '\n'
				}
				for (i = 0; i < len; i++) {
					sendi = sendi + _fns[i] + '()\n'
				}
			}

			console.log(sendi + '\n')
		}
		console.log('\n' + colors.blue('▲ ▲ ▲ ▲  ' + styles.underline(desc) + '  ▲ ▲ ▲ ▲') + '\n')
	},

}

// global.tnsconsole = {}
// global.tnsconsole.log = global.console.log
// global.tnsconsole.info = global.console.info
// global.tnsconsole.warn = global.console.warn
// global.tnsconsole.error = global.console.error
// global.tnsconsole.dump = global.console.dumpit
// global.tnsconsole.dir = global.console.dumpit

global.tnsconsole.dump = global.tnsconsole.dumpit
global.tnsconsole.dir = global.tnsconsole.dumpit

// global.tnsconsole = new TnsConsole()

