// 

import * as application from 'application'
import { Observable, EventData } from 'data/observable'
import { Page, NavigatedData } from 'ui/page'



export function onLoaded(args: EventData) {
	let page: Page = <Page>args.object
	page.bindingContext = new MainPage(

	)
}

class MainPage extends Observable {

	constructor(

	) {
		super()
	}

	doit(args: EventData) {
		// let conn = RTMPConnection.alloc().init()
		// let stream = RTMPStream.alloc().initWithConnection(conn)
		// stream.publishType('hoge', 'live')
		// console.log('stream.description', stream.description)
		let conn = RTMPConnection.alloc().init()
		conn.connect('rtmp://test:test@192.168.179.3/live')
		console.log('conn.description', conn.description)
		console.log('conn.connected', conn.connected)
	}

}

