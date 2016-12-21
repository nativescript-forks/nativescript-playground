//

import * as application from 'application'
import { Color } from 'color'
import { fromResource } from 'image-source'
import { topmost } from 'ui/frame'
import { OnboardingItem, OnboardingOpts, getItemProperty } from './nativescript-slides.common'



type EAIntroDelegateImplCallback = (skipped: boolean) => void
class EAIntroDelegateImpl extends NSObject implements EAIntroDelegate {

	public static ObjCProtocols = [EAIntroDelegate]
	static new(): EAIntroDelegateImpl {
		return <EAIntroDelegateImpl>super.new()
	}

	private _callback: EAIntroDelegateImplCallback
	public initWithCallback(callback: EAIntroDelegateImplCallback): EAIntroDelegateImpl {
		this._callback = callback
		return this
	}

	introDidFinishWasSkipped(introView: EAIntroView, wasSkipped: boolean) {
		this._callback(wasSkipped)
		this._callback = null
	}

}

export function showOnboarding(boards: Array<OnboardingItem>, opts: OnboardingOpts = {}): Promise<boolean> {

	return new Promise(function(resolve, reject) {
		let delegate = EAIntroDelegateImpl.new().initWithCallback(function(skipped) {
			delegate = null
			resolve(skipped)
		})

		let skipButtonY = (opts.canSkip == true) ? 40 : 0
		let bgColor = new Color('#556270').ios
		let titleFont = UIFont.boldSystemFontOfSize(24)
		let descFont = UIFont.systemFontOfSize(16)

		let slides = NSMutableArray.new<EAIntroPage>()
		let i: number, len: number = boards.length
		for (i = 0; i < len; i++) {
			let board = boards[i]
			let title = getItemProperty(board, 'title')
			let desc = getItemProperty(board, 'desc')
			let image = getItemProperty(board, 'image')
			let keys = Object.keys(board).forEach(function(v, i) {

			})

			// if (board.iosDesc) {
			// 	board.desc = board.iosDesc
			// }
			// let index = (isFinite(board.slide)) ? board.slide : i + 1
			// let img: string = 'slide' + (index)
			// if (board.platformImg) {
			// 	img = img + 'ios'
			// }
			let slide = EAIntroPage.page()
			slide.title = board.title
			slide.desc = board.desc
			slide.titleFont = titleFont
			slide.descFont = descFont
			slide.titleIconView = UIImageView.alloc().initWithImage(fromResource(img).ios)
			slide.bgColor = bgColor
			slides.addObject(slide)
		}

		let root: UINavigationController = topmost().ios.controller
		let introView = EAIntroView.alloc().initWithFrameAndPages(root.view.bounds, slides)
		introView.delegate = delegate
		introView.skipButtonAlignment = EAViewAlignment.Right
		introView.skipButtonY = skipButtonY
		introView.showInViewAnimateDuration(root.view, 0.5)

	}).then(function(skipped) {
		let page = topmost().currentPage
		if (page.actionBarHidden == true) {
			page.actionBarHidden = false
		}
		return Promise.resolve(skipped)
	})

}








