// 

export const BOOT: number = new Date().valueOf()

global._ = require('./lodash')
import './dev/tns.console'

global.tnsconsole.warn('MAIN BOOT > ' + ((new Date().valueOf() - BOOT) / 1000).toFixed(2) + 's')

import * as application from 'application'
application.start({ moduleName: 'main-page' })

