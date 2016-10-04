// 

import * as application from "application"
import { Observable, EventData, PropertyChangeData } from "data/observable"
import { ObservableArray, ChangedData } from "data/observable-array"
import { Page, NavigatedData } from "ui/page"
import { ItemEventData } from "ui/list-view"
import { ScrollView } from "ui/scroll-view"
import { StackLayout } from "ui/layouts/stack-layout"
import { MyObservable, MyObservableArray } from "./shared/myobservables"



export function onLoaded(args: EventData) {
	let page: Page = <Page>args.object
	page.bindingContext = new MainPage(

	)
}

class MainPage extends MyObservable {

	private _picked: MyObservableArray<any>
	get picked(): MyObservableArray<any> {
		return this._picked
	}

	private _items: MyObservableArray<any>
	get items(): MyObservableArray<any> {
		return this._items
	}

	private _ready: boolean
	get ready(): boolean {
		global.tnsconsole.error('get ready')
		return (this._picked.length == 0) ? false : true
	}
	set ready(value: boolean) {
		this._ready = value
		this.notifyPropertyChange("ready", value)
	}

	constructor(

	) {
		super()
		this._items = new MyObservableArray(contacts)
		this._picked = new MyObservableArray([])
		this.init()
	}

	onNavigatedTo(args: NavigatedData) {
		// this.items.addEventListener(MyObservableArray.changeEvent, (args: ChangedData<any>) => {
		// 	if (args.action != "update") {
		// 		return
		// 	}

		// 	let items: MyObservableArray<any> = (<any>args).object
		// 	let item: any = items.getItem(args.index)

		// 	if (item.picked == true) {
		// 		this._picked.push(item)
		// 	} else {
		// 		let index: number = -1
		// 		let contact_id: number = item.contact_id
		// 		let i: number, len: number = this._picked.length
		// 		for (i = 0; i < len; i++) {
		// 			let pickedItem: any = this._picked.getItem(i)
		// 			if (pickedItem.contact_id == contact_id) {
		// 				index = i
		// 				break
		// 			}
		// 		}
		// 		if (index != -1) {
		// 			this._picked.splice(index, 1)
		// 		}
		// 	}
		// })
	}

	onItemTap(args: ItemEventData) {
		let item: any = this.items.getItem(args.index)
		let picked: boolean = !item.picked
		item.picked = picked
		this.items.setItem(args.index, item)

		if (picked == true) {
			this.picked.push(item)
		}
		// global.tnsconsole.dump('this.picked.valueOf()', this.picked.valueOf())

		let page: Page = (<any>args.object).page
		let scroll: ScrollView = page.getViewById<ScrollView>("picked_scroll")
		let bottom: number = scroll.scrollableHeight
		scroll.scrollToVerticalOffset(bottom, true)
	}

	onPickedTap(args: EventData) {
		let chip: StackLayout = (<any>args.object)
		let dis: MainPage = chip.page.bindingContext
		let xid: string = chip.id

		dis.picked.spliceWhere('xid', xid)
		let index: number = dis.items.findIndex('xid', xid)
		if (index != -1) {
			let item: any = dis.items.getItem(index)
			item.picked = false
			dis.items.setItem(index, item)
		}


		// let index: number = -1
		// let xid: string = chip.id
		// let i: number, len: number = dis._picked.length
		// for (i = 0; i < len; i++) {
		// 	let item: any = dis._picked.getItem(i)
		// 	if (item.xid == xid) {
		// 		index = i
		// 		break
		// 	}
		// }
		// if (index != -1) {
		// 	dis._picked.splice(index, 1)
		// 	// dis.ready = (dis._picked.length == 0) ? false : true
		// }
	}

	onDone(args: EventData) {
		global.tnsconsole.log('onDone')

	}

}












let contacts: Array<any> = [{
	"thread_id": 25,
	"address": "(781) 775-5633",
	"date": 1475553220991,
	"body": "baeee wut r you doing this weekend?",
	"contact_id": 831,
	"date_sent": 1474558261000,
	"name": "Erika Aspiring Head Management Bitchhhhh",
	"photo": "content://com.android.contacts/display_photo/3",
	"xid": "17817755633",
	"contact_last_updated": 1475553221017,
	"moment": "Yesterday, 11:53 PM",
	"image": {
		"android": {
			"constructor": "constructor()function () { [native code] }"
		}
	},
	"picked": false
},
{
	"thread_id": 8,
	"address": "401-793-0747",
	"date": 1475553203466,
	"body": "I'm blind as fuck and thought the date on my computer said Oct 5 but it was a 3. happy birthday!!!",
	"contact_id": 850,
	"date_sent": 1474691433000,
	"name": "John",
	"photo": null,
	"xid": "14017930747",
	"contact_last_updated": 1475553203513,
	"moment": "Yesterday, 11:53 PM",
	"image": {
		"android": {
			"constructor": "constructor()function () { [native code] }"
		}
	},
	"picked": false
},
{
	"thread_id": 138,
	"address": "(617) 538-8456",
	"date": 1475552062787,
	"body": "yo yo",
	"contact_id": 604,
	"date_sent": 1475346238000,
	"name": "Mike Boustris Henry Bro",
	"photo": null,
	"xid": "16175388456",
	"contact_last_updated": 1475552062865,
	"moment": "Yesterday, 11:34 PM",
	"image": {
		"android": "#CR:android.graphics.Bitmap@bdc1172"
	},
	"picked": false
},
{
	"thread_id": 3,
	"address": "401-864-5161",
	"date": 1475498803299,
	"body": "haha they're so good",
	"contact_id": 869,
	"date_sent": 1475498754000,
	"name": "Mom",
	"photo": "content://com.android.contacts/display_photo/2",
	"xid": "14018645161",
	"contact_last_updated": 1475498803297,
	"moment": "Yesterday, 8:46 AM",
	"image": {
		"android": {
			"constructor": "constructor()function () { [native code] }"
		}
	},
	"picked": false
},
{
	"thread_id": 53,
	"address": "7818546165",
	"date": 1475465748053,
	"body": "word",
	"contact_id": 837,
	"date_sent": 1475465740000,
	"name": "James - Johns Homie",
	"photo": null,
	"xid": "17818546165",
	"contact_last_updated": 1475465722773,
	"moment": "Sun, 11:35 PM",
	"image": {
		"android": "#CR:android.graphics.Bitmap@bdc1172"
	},
	"picked": false
},
{
	"thread_id": 40,
	"address": "401-864-5428",
	"date": 1475357740985,
	"body": "lol much muffin",
	"contact_id": 453,
	"date_sent": 1475275648000,
	"name": "Cel",
	"photo": "content://com.android.contacts/contacts/458/photo",
	"xid": "14018645428",
	"contact_last_updated": 1475357741003,
	"moment": "Sat, 5:35 PM",
	"image": {
		"android": {
			"constructor": "constructor()function () { [native code] }"
		}
	},
	"picked": false
},
{
	"thread_id": 18,
	"address": "4017877810",
	"date": 1475191485034,
	"body": "Yeahh",
	"contact_id": 521,
	"date_sent": 1475191476000,
	"name": "Paul Andreson",
	"photo": null,
	"xid": "14017877810",
	"contact_last_updated": 1475190439311,
	"moment": "Thu, 7:24 PM",
	"image": {
		"android": "#CR:android.graphics.Bitmap@bdc1172"
	},
	"picked": false
},
{
	"thread_id": 157,
	"address": "401-241-4410",
	"date": 1475166708392,
	"body": "be there in 15. mom asked me to do a few errands",
	"contact_id": 383,
	"date_sent": 1475161846000,
	"name": "Scott",
	"photo": null,
	"xid": "14012414410",
	"contact_last_updated": 1475176937455,
	"moment": "Thu, 12:31 PM",
	"image": {
		"android": "#CR:android.graphics.Bitmap@bdc1172"
	},
	"picked": false
},
{
	"thread_id": 141,
	"address": "287898",
	"date": 1475068816074,
	"body": "CVS/pharmacy: ROBERT, your Rx order is ready at 763 TIOGUE AVENUE, COVENTRY (401-821-2060). View Rx info: i.cvs.com/NmdxZ6V. Reply HELP for help",
	"contact_id": null,
	"date_sent": 1475068804000,
	"name": "287898",
	"xid": "1287898",
	"contact_last_updated": null,
	"moment": "Wed, 9:20 AM",
	"image": {
		"android": "#CR:android.graphics.Bitmap@bdc1172"
	},
	"picked": false
},
{
	"thread_id": 153,
	"address": "6179820569",
	"date": 1474980684775,
	"body": "Whispers: Click URL to Verify http://192.168.0.3:7337/api/register/eac765a7446a64a8\nYour login pin is 9999",
	"contact_id": null,
	"date_sent": 1474980668000,
	"name": "6179820569",
	"xid": "16179820569",
	"contact_last_updated": null,
	"moment": "Sep 27",
	"image": {
		"android": "#CR:android.graphics.Bitmap@bdc1172"
	},
	"picked": false
},
{
	"thread_id": 39,
	"address": "201-663-1770",
	"date": 1474918636212,
	"body": "I'm driving home to RI shortly. I'll give you a call then",
	"contact_id": 982,
	"date_sent": 1474693873000,
	"name": "Bill Brunt",
	"photo": null,
	"xid": "12016631770",
	"contact_last_updated": 1474935278921,
	"moment": "Sep 26",
	"image": {
		"android": "#CR:android.graphics.Bitmap@bdc1172"
	},
	"picked": false
},
{
	"thread_id": 64,
	"address": "+18282736232",
	"date": 1474669702978,
	"body": "will do my friend. i just met Mike Gordon",
	"contact_id": 865,
	"date_sent": 1474669121000,
	"name": "Yoda Provi",
	"photo": null,
	"xid": "18282736232",
	"contact_last_updated": 1474669703012,
	"moment": "Sep 23",
	"image": {
		"android": "#CR:android.graphics.Bitmap@bdc1172"
	},
	"picked": false
},
{
	"thread_id": 112,
	"address": "+15165224306",
	"date": 1474599386834,
	"body": "lol wut??? lmao",
	"contact_id": 1107,
	"date_sent": 1474598552000,
	"name": "Justin Jersey",
	"photo": null,
	"xid": "15165224306",
	"contact_last_updated": 1474599386872,
	"moment": "Sep 22",
	"image": {
		"android": "#CR:android.graphics.Bitmap@bdc1172"
	},
	"picked": false
},
{
	"thread_id": 59,
	"address": "978-846-3935",
	"date": 1474558394082,
	"body": "dang girl northern ave with the seaport view? living it up",
	"contact_id": 507,
	"date_sent": 1474558152000,
	"name": "Justine Uri",
	"photo": null,
	"xid": "19788463935",
	"contact_last_updated": 1474558394053,
	"moment": "Sep 22",
	"image": {
		"android": "#CR:android.graphics.Bitmap@bdc1172"
	},
	"picked": false
},
{
	"thread_id": 50,
	"address": "(917) 617-2873",
	"date": 1474554990283,
	"body": "ye I'll peep it",
	"contact_id": 667,
	"date_sent": 1474554719000,
	"name": "Ek Shad",
	"photo": null,
	"xid": "19176172873",
	"contact_last_updated": 1474554990313,
	"moment": "Sep 22",
	"image": {
		"android": "#CR:android.graphics.Bitmap@bdc1172"
	},
	"picked": false
},
{
	"thread_id": 151,
	"address": "(857) 222-0288",
	"date": 1474416974650,
	"body": "hey Jeff, I'm not at my laptop, but quick brainstorm. we can use https://www.npmjs.com/package/sinopia to host ng2 services for tns and web in separate npm modules so we have more control over versions and dependencies",
	"contact_id": null,
	"date_sent": 1473707135000,
	"name": "(857) 222-0288",
	"xid": "18572220288",
	"contact_last_updated": null,
	"moment": "Sep 20",
	"image": {
		"android": "#CR:android.graphics.Bitmap@bdc1172"
	},
	"picked": false
},
{
	"thread_id": 5,
	"address": "617-593-9868",
	"date": 1474374155560,
	"body": "i took that job in Boston. you stuck with me for another year",
	"contact_id": 660,
	"date_sent": 1473712199000,
	"name": "Bob Boustris",
	"photo": null,
	"xid": "16175939868",
	"contact_last_updated": 1474405865575,
	"moment": "Sep 20",
	"image": {
		"android": "#CR:android.graphics.Bitmap@bdc1172"
	},
	"picked": false
}]
