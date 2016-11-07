// 

global._ = require('./lodash')
import './dev/tns.console'
import * as application from 'application'
application.start({ moduleName: 'main-page' })
