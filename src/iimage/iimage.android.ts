// 

import common = require('./iimage.common')
import * as application from 'application'
import { View } from 'ui/core/view'
import { Property, PropertyMetadataSettings, PropertyChangeData } from 'ui/core/dependency-observable'
import { PropertyMetadata } from 'ui/core/proxy'
import { Stretch } from 'ui/enums'
import { knownFolders, path } from 'file-system'
import { fromNativeSource, fromFile, fromResource } from 'image-source'
import { ad } from 'utils/utils'



function onImageSourcePropertyChanged(args: PropertyChangeData) {
	let image = <IImage>args.object
	if (!image.android) {
		return
	}
	image._setNativeImage(args.newValue)
}
(<PropertyMetadata>common.IImage.imageUriProperty.metadata).onSetNativeValue = onImageSourcePropertyChanged

function onStretchPropertyChanged(args: PropertyChangeData) {
	let image = <IImage>args.object
	if (!image.android) {
		return
	}
	switch (args.newValue) {
		case Stretch.aspectFit:
			image.android.setScaleType(android.widget.ImageView.ScaleType.FIT_CENTER)
			break
		case Stretch.aspectFill:
			image.android.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP)
			break
		case Stretch.fill:
			image.android.setScaleType(android.widget.ImageView.ScaleType.FIT_XY)
			break
		case Stretch.none:
		default:
			image.android.setScaleType(android.widget.ImageView.ScaleType.MATRIX)
			break
	}
}
(<PropertyMetadata>common.IImage.stretchProperty.metadata).onSetNativeValue = onStretchPropertyChanged

export class IImage extends common.IImage {

	public glide: com.bumptech.glide.DrawableTypeRequest
	private _android: android.widget.ImageView

	constructor() {
		super()
		global.tnsconsole.info('IImage > constructor')
	}

	get android(): android.widget.ImageView {
		return this._android
	}
	public _createUI() {
		global.tnsconsole.info('_createUI')
		this._android = new android.widget.ImageView(this._context)
		this._android.setScaleType(android.widget.ImageView.ScaleType.FIT_XY)
		// this._android.setMinimumWidth(1024)
		// this._android.setMinimumHeight(1024)
		// this._android.setLayoutParams()
	}

	public _setNativeImage(nativeImage: string) {
		global.tnsconsole.log('_setNativeImage', nativeImage)

		// global.tnsconsole.log('this.width', this.width)
		// global.tnsconsole.log('this.height', this.height)
		// global.tnsconsole.log('this.parent.getMeasuredWidth()', this.parent.getMeasuredWidth())
		// global.tnsconsole.log('this.parent.getMeasuredHeight()', this.parent.getMeasuredHeight())
		// global.tnsconsole.log('this.parent.parent.getMeasuredWidth()', this.parent.parent.getMeasuredWidth())
		// global.tnsconsole.log('this.parent.parent.getMeasuredHeight()', this.parent.parent.getMeasuredHeight())
		// global.tnsconsole.log('this.parent.parent.parent.getMeasuredWidth()', this.parent.parent.parent.getMeasuredWidth())
		// global.tnsconsole.log('this.parent.parent.parent.getMeasuredHeight()', this.parent.parent.parent.getMeasuredHeight())

		this.glide = com.bumptech.glide.Glide.with(this._context).load(nativeImage) //.asBitmap()

		this.glide.override(1024, 1024)

		this.glide.into(this._android)

	}

}

