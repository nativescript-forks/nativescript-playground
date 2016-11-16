// 

import common = require('./iimage.common')
import * as application from 'application'
import { View } from 'ui/core/view'
import { Image } from 'ui/image'
import { Property, PropertyMetadataSettings, PropertyChangeData } from 'ui/core/dependency-observable'
import { PropertyMetadata } from 'ui/core/proxy'
import { Stretch } from 'ui/enums'
import { knownFolders, path } from 'file-system'
import { fromNativeSource, fromFile, fromResource } from 'image-source'



function onImageSourcePropertyChanged(args: PropertyChangeData) {
	let image = <IImage>args.object
	if (!image.ios) {
		return
	}
	image._setNativeImage(args.newValue)
}
(<PropertyMetadata>common.IImage.imageUriProperty.metadata).onSetNativeValue = onImageSourcePropertyChanged

function onStretchPropertyChanged(args: PropertyChangeData) {
	let image = <IImage>args.object
	if (!image.ios) {
		return
	}
	switch (args.newValue) {
		case Stretch.aspectFit:
			image.ios.contentMode = UIViewContentMode.ScaleAspectFit
			break
		case Stretch.aspectFill:
			image.ios.contentMode = UIViewContentMode.ScaleAspectFill
			break
		case Stretch.fill:
			image.ios.contentMode = UIViewContentMode.ScaleToFill
			break
		case Stretch.none:
		default:
			image.ios.contentMode = UIViewContentMode.TopLeft
			break
	}
}
(<PropertyMetadata>common.IImage.stretchProperty.metadata).onSetNativeValue = onStretchPropertyChanged

export class IImage extends common.IImage {

	private _ios: UIImageView

	constructor() {
		super()
		this._ios = UIImageView.new()
		this._ios.contentMode = UIViewContentMode.ScaleAspectFit
	}

	get ios(): UIImageView {
		return this._ios
	}

	public _setNativeImage(image: string) {
		let rgx = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
		let url = (rgx.test(image)) ? NSURL.URLWithString(image) : NSURL.fileURLWithPath(image)
		this._ios.yy_setImageWithURLOptions(url, YYWebImageOptions.AllowBackgroundTask)
	}

}

