"use strict";
var lodash_1 = require("lodash");
var moment = require("moment");
var colors = require("ansicolors");
var styles = require("ansistyles");
global.tnsconsole = {
    'chrome': function chrome(str, obj) {
        var sendi = {
            str: str,
            members: '',
            properties: [],
            array: {},
        };
        var cachei = [];
        var cachev = [];
        sendi.members = JSON.stringify(obj, function (k, v) {
            cachei.push(k);
            if (typeof v === 'object' && v !== null) {
                if (cachev.indexOf(v) !== -1) {
                    return (v.toString ? v.toString() : v);
                }
                cachev.push(v);
            }
            if (typeof v === 'function') {
                return k + "()" + v;
            }
            return v;
        }, 4);
        for (var id in obj) {
            try {
                if (typeof (obj[id]) === 'function') {
                    sendi.properties.push(id + '()');
                }
                else {
                    if (typeof (obj[id]) !== 'object' && cachei.indexOf(id) === -1) {
                        sendi.properties.push(id + ": " + (obj[id]));
                    }
                }
            }
            catch (err) {
                sendi.properties.push(id + ': inaccessible');
            }
        }
        var forcearray = false;
        if (lodash_1.isArray(obj)) {
            forcearray = true;
            var i = void 0, len = obj.length;
            for (i = 0; i < len; i++) {
                sendi.array[i] = obj[i];
            }
        }
        console.dump(obj);
        cachei = null;
        cachev = null;
        sendi = null;
    },
    'logit': function logit(type, args) {
        var errs = [];
        var str = '\n';
        {
            var i = void 0, len = args.length;
            for (i = 0; i < len; i++) {
                var arg = void 0;
                if (typeof args[i] == 'object') {
                    if (args[i] instanceof Error) {
                        errs.push(args[i]);
                    }
                    arg = JSON.stringify(args[i]);
                }
                else if (i == 1 && typeof args[i] == 'string') {
                    arg = styles.underline(args[i]);
                }
                else {
                    arg = args[i];
                }
                if (i == 0) {
                    str = str + arg + this.getStack(2) + '\n';
                }
                else if (i == len - 1) {
                    str = str + arg;
                }
                else {
                    str = str + arg + ' > ';
                }
            }
        }
        str = str + '\n \n';
        console[type](str);
        {
            var i = void 0, len = errs.length;
            for (i = 0; i < len; i++) {
                console.error(errs[i]);
                console.dump(errs[i]);
                this.dumpit('ERROR', errs[i]);
                var stack = (new Error()).stack.toString();
                console.error(stack);
                if (errs[i].description) {
                    console.error(errs[i].description);
                }
            }
        }
    },
    'getStack': function getStack(num) {
        if (application.ios) {
            num--;
        }
        var t = moment().format('hh:mm:ss:SSS') + ' ';
        var stack = (new Error()).stack.toString();
        if (stack) {
            stack = stack.replace(/^([^\n]*?\n){2}((.|\n)*)$/gmi, "$2");
            stack = stack.split('\n')[num];
            stack = '@' + stack.substring(6, stack.length);
        }
        else {
            stack = 'IDK...';
        }
        var ia = stack.indexOf('/data/');
        var ib = stack.indexOf('/app/');
        var a = stack.substring(0, ia);
        var b = stack.substring(ib + 4, stack.length);
        return t + a + b;
    },
    'log': function log() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        args.unshift(colors.blue('[LOG] '));
        this.logit('log', args);
    },
    'info': function info() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        args.unshift(colors.green('[INFO] '));
        this.logit('info', args);
    },
    'warn': function warn() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        args.unshift(colors.yellow('[WARN] '));
        this.logit('warn', args);
    },
    'error': function error() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        args.unshift(colors.red('[ERROR] '));
        if (typeof args[1] == 'string') {
            args[1] = colors.red(args[1]);
        }
        this.logit('error', args);
    },
    'dumpit': function dumpit(def, obj) {
        if (lodash_1.isUndefined(obj) || lodash_1.isNull(obj)) {
            console.log('\n' + colors.red('▼ ▼ ▼ ▼  ' + styles.underline(def) + '  ▼ ▼ ▼ ▼') + ' ' + this.getStack(1));
            console.log('\n' + colors.red('IS NULL'));
            console.log('\n' + colors.red('▲ ▲ ▲ ▲  ' + styles.underline(def) + '  ▲ ▲ ▲ ▲') + '\n');
        }
        else {
            console.log('\n' + colors.blue('▼ ▼ ▼ ▼  ' + styles.underline(def) + '  ▼ ▼ ▼ ▼') + ' ' + this.getStack(1));
            this.chrome(def, obj);
            console.log('\n' + colors.blue('▲ ▲ ▲ ▲  ' + styles.underline(def) + '  ▲ ▲ ▲ ▲') + '\n');
        }
    },
};
global.tnsconsole.dump = global.tnsconsole.dumpit;
global.tnsconsole.dir = global.tnsconsole.dumpit;
