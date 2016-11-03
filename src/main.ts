// 

export const BOOT: number = new Date().valueOf()
global._ = require('./lodash')
import './dev/tns.console'
global.tnsconsole.warn('MAIN BOOT > ' + ((new Date().valueOf() - BOOT) / 1000).toFixed(2) + 's')
import * as app from 'application';
app.start({ moduleName: 'main-page' });
