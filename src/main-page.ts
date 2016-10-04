// 

import * as application from "application"
import { Observable, EventData } from "data/observable"
import { Page, NavigatedData } from "ui/page"
import { topmost } from "ui/frame"



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

		// let contacts: Array<any> = []
		// global.tnsconsole.dump('bolt', bolt)
		// bolt.getContactsAsync(function completion(results: NSArray<CNContact>, error: NSError) {
		// 	if (error) {
		// 		global.tnsconsole.error('error', error)
		// 		global.tnsconsole.error('error.description', error.description)
		// 	} else {
		// 		results.enumerateObjectsUsingBlock(function(contact: CNContact, index: number, idk: interop.Pointer) {
		// 			contacts.push(parseCNContact(contact))
		// 		})
		// 	}
		// 	global.tnsconsole.dump('contacts', contacts)
		// })

		this.getContactsAsync().then(function(items: Array<any>) {
			global.tnsconsole.dump('items', items)
		}).catch(function(error) {
			global.tnsconsole.error('error', error)
		})

	}

	getContactsAsync(): Promise<Array<any>> {
		return new Promise(function(resolve, reject) {
			let bolt: BoltThreads = BoltThreads.alloc()

			bolt.getContactsBolts().continueWithBlock(function completion(task: BFTask<any>) {
				try {
					if (task.cancelled) {
						return reject('task.isCancelled()')
					} else if (task.faulted) {
						return reject(task.error.description)
					} else {
						let sendi: Array<any> = []
						let results: NSArray<CNContact> = task.result
						results.enumerateObjectsUsingBlock(function(contact: CNContact) {
							sendi.push(parseCNContact(contact))
						})
						return resolve(sendi)
					}
				} catch (error) {
					return reject(error)
				}

			})
		})
	}

}

function parseCNContact(contact: CNContact) {
	let sendi: any = {
		firstName: contact.givenName,
		lastName: contact.familyName,
		contact_id: contact.identifier,
	}

	if (contact.thumbnailImageData) {
		sendi.photo = contact.thumbnailImageData
		sendi.image = UIImage.alloc().initWithData(sendi.photo)
	}

	// let phones: NSArray<CNLabeledValue<CNPhoneNumber>> = contact.phoneNumbers
	contact.phoneNumbers.enumerateObjectsUsingBlock(function(phone: CNLabeledValue<CNPhoneNumber>, index: number) {
		if (index == 0) {
			sendi.phone = phone.value.stringValue
		}
	})

	return sendi
}

