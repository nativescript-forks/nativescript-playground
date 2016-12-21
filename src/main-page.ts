// 

import * as application from 'application'
import { Observable, EventData } from 'data/observable'
import { Page, NavigatedData } from 'ui/page'
import Vue = require('vue')
import Component from 'vue-class-component'
var Compiler = require('vue-template-compiler')
// var Renderer = require('vue-server-renderer').createRenderer()
// var Renderer = require('weex-template-compiler')
// var Weex = require('weex-vue-framework')



export function onLoaded(args: EventData) {
	let page: Page = <Page>args.object
	page.bindingContext = new MainPage(

	)
}

class MainPage extends Observable {

	constructor(

	) {
		super()
		// console.keys('Renderer', Renderer)
		// console.keys('Weex', Weex)
	}

	doit(args: EventData) {
		// console.keys('Vue', Vue.util)
		// console.log('Vue.util', Vue.util)
		// console.keys('VueCompiler', VueCompiler)

		// let template = `
		// 	<StackLayout dock="top">
		// 		<Button class="button-large" text="Do It" tap="{{ doit }}" />
		// 	</StackLayout>
		// `
		// console.log('template', template)
		// let compiled = VueCompiler.compileToFunctions(template)
		// console.log('compiled', compiled)

		let template = `
			<StackLayout dock="top">
				<Button class="button-large" v-bind:text="message" v-bind:tap="doitz" />
			</StackLayout>
		`
		let compiled = Compiler.compile(template)
		console.log('compiled', compiled)
		// console.log('compiled.render.toString()', compiled.render.toString())

		let vm = new Vue({
			el: '#dwadfrg',
			template,
			data: {
				message: 'Hello'
			},
			methods: {
				doitz: function() {
					console.log('doitz')
				},
			},
			computed: {
				reversedMessage: function() {
					return this.message.split('').reverse().join('')
				}
			},
			beforeCreate: function() {
				console.log('beforeCreate')
			},
			created: function() {
				console.log('created')
			},
			beforeMount: function() {
				console.log('beforeMount')
			},
			mounted: function() {
				console.log('mounted')
				// console.log('this', this)
			},
			beforeUpdate: function() {
				console.log('beforeUpdate')
			},
			updated: function() {
				console.log('updated')
			},
			activated: function() {
				console.log('activated')
			},
			deactivated: function() {
				console.log('deactivated')
			},
			beforeDestroy: function() {
				console.log('beforeDestroy')
			},
			destroyed: function() {
				console.log('destroyed')
			},
			render: compiled.render,
			staticRenderFns: compiled.staticRenderFns,
			// render: function(createElement: Vue.CreateElement): Vue.VNode {
			// 	console.log('render')
			// 	// console.log('this.items', this.items)
			// 	// console.log('this.value', this.value)
			// 	// console.log('this', this)
			// 	return createElement('Button')
			// },
		})
		// vm.$createElement('#main')
		// console.log('vm', vm)
		// console.log('vm._render', vm._render)
		// console.dir(vm)
		// console.keys('vm', vm)
		
		// let compiled = Renderer.compile(template)
		// console.log('compiled', compiled)



		// console.keys('VueCompiler', VueCompiler)
		// let compiled = VueCompiler.parseComponent(vm)
		// console.log('compiled', compiled)



	}

}

