// 

global.process = { env: { 'NODE_ENV': '' } }
global._ = require('./lodash.min')
import * as application from 'application'
import './console'
// global.Vue = require('./vue.min')
application.start({ moduleName: 'main-page' })
