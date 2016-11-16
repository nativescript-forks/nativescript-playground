// 

import * as application from 'application'
import { View } from 'ui/core/view'
import { Property, PropertyMetadataSettings, PropertyChangeData } from 'ui/core/dependency-observable'
import { PropertyMetadata } from 'ui/core/proxy'
import { Stretch } from 'ui/enums'
import { device, platformNames } from 'platform'



const AffectsLayout = device.os === platformNames.android ? PropertyMetadataSettings.None : PropertyMetadataSettings.AffectsLayout
export class IImage extends View {

	public static imageUriProperty = new Property('imageUri', 'IImage', new PropertyMetadata(undefined, PropertyMetadataSettings.None))
	public static stretchProperty = new Property('stretch', 'IImage', new PropertyMetadata(Stretch.aspectFit, AffectsLayout))
	// public static placeHolderProperty = new Property('placeHolder', 'IImage', new PropertyMetadata(undefined, PropertyMetadataSettings.None))
	// public static errorHolderProperty = new Property('errorHolder', 'IImage', new PropertyMetadata(undefined, PropertyMetadataSettings.None))
	// public static resizeProperty = new Property('resize', 'IImage', new PropertyMetadata(undefined, PropertyMetadataSettings.None))
	// public static overrideProperty = new Property('override', 'IImage', new PropertyMetadata(undefined, PropertyMetadataSettings.None))
	// public static centerCropProperty = new Property('centerCrop', 'IImage', new PropertyMetadata(undefined, PropertyMetadataSettings.None))

	constructor() {
		super()
	}
	
	get imageUri(): string {
		return this._getValue(IImage.imageUriProperty)
	}
	set imageUri(value: string) {
		this._setValue(IImage.imageUriProperty, value)
	}

	get stretch(): string {
		return this._getValue(IImage.stretchProperty)
	}
	set stretch(value: string) {
		this._setValue(IImage.stretchProperty, value)
	}

	// get placeHolder(): string {
	// 	return this._getValue(IImage.placeHolderProperty)
	// }
	// set placeHolder(value: string) {
	// 	this._setValue(IImage.placeHolderProperty, value)
	// }
	
	// get errorHolder(): string {
	// 	return this._getValue(IImage.errorHolderProperty)
	// }
	// set errorHolder(value: string) {
	// 	this._setValue(IImage.errorHolderProperty, value)
	// }

	// get resize(): string {
	// 	return this._getValue(IImage.resizeProperty)
	// }
	// set resize(value: string) {
	// 	this._setValue(IImage.resizeProperty, value)
	// }

	// get override(): string {
	// 	return this._getValue(IImage.overrideProperty)
	// }
	// set override(value: string) {
	// 	this._setValue(IImage.overrideProperty, value)
	// }
	
	// get centerCrop(): boolean {
	// 	return this._getValue(IImage.centerCropProperty)
	// }
	// set centerCrop(value: boolean) {
	// 	this._setValue(IImage.centerCropProperty, value)
	// }

}

