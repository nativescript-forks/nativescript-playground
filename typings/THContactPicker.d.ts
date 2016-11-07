
interface THContactPickerDelegate extends NSObjectProtocol {

	contactPickerDidRemoveContact?(contactPicker: THContactPickerView, contact: any): void;

	contactPickerDidResize?(contactPicker: THContactPickerView): void;

	contactPickerDidSelectContact?(contactPicker: THContactPickerView, contact: any): void;

	contactPickerTextFieldDidBeginEditing?(contactPicker: THContactPickerView, textField: UITextField): void;

	contactPickerTextFieldDidChange?(contactPicker: THContactPickerView, textField: UITextField): void;

	contactPickerTextFieldDidEndEditing?(contactPicker: THContactPickerView, textField: UITextField): void;

	contactPickerTextFieldShouldReturn?(contactPicker: THContactPickerView, textField: UITextField): boolean;
}
declare var THContactPickerDelegate: {

	prototype: THContactPickerDelegate;
};

declare var THContactPickerVersionNumber: number;

declare var THContactPickerVersionString: interop.Reference<number>;

declare class THContactPickerView extends UIView implements THContactViewDelegate, UIScrollViewDelegate, UITextInputTraits, UITextViewDelegate {

	static alloc(): THContactPickerView; // inherited from NSObject

	static appearance(): THContactPickerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): THContactPickerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): THContactPickerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): THContactPickerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): THContactPickerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): THContactPickerView; // inherited from UIAppearance

	static new(): THContactPickerView; // inherited from NSObject

	delegate: THContactPickerDelegate;

	font: UIFont;

	limitToOne: boolean;

	maxNumberOfLines: number;

	selectedContactView: THContactView;

	verticalPadding: number;

	autocapitalizationType: UITextAutocapitalizationType; // inherited from UITextInputTraits

	autocorrectionType: UITextAutocorrectionType; // inherited from UITextInputTraits

	/* readonly */ debugDescription: string; // inherited from NSObjectProtocol

	/* readonly */ description: string; // inherited from NSObjectProtocol

	enablesReturnKeyAutomatically: boolean; // inherited from UITextInputTraits

	/* readonly */ hash: number; // inherited from NSObjectProtocol

	/* readonly */ isProxy: boolean; // inherited from NSObjectProtocol

	keyboardAppearance: UIKeyboardAppearance; // inherited from UITextInputTraits

	keyboardType: UIKeyboardType; // inherited from UITextInputTraits

	returnKeyType: UIReturnKeyType; // inherited from UITextInputTraits

	secureTextEntry: boolean; // inherited from UITextInputTraits

	spellCheckingType: UITextSpellCheckingType; // inherited from UITextInputTraits

	/* readonly */ superclass: typeof NSObject; // inherited from NSObjectProtocol

	textContentType: string; // inherited from UITextInputTraits

	/* readonly */  // inherited from NSObjectProtocol

	addContactWithName(contact: any, name: string): void;

	addContactWithNameWithStyleAndSelectedStyle(contact: any, name: string, bubbleStyle: THContactViewStyle, selectedStyle: THContactViewStyle): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	contactViewShouldBeRemoved(contactView: THContactView): void;

	contactViewWasSelected(contactView: THContactView): void;

	contactViewWasUnSelected(contactView: THContactView): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAllContacts(): void;

	removeContact(contact: any): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	setContactViewStyleSelectedStyle(color: THContactViewStyle, selectedColor: THContactViewStyle): void;

	setFont(font: UIFont): void;

	setPlaceholderLabelText(text: string): void;

	setPlaceholderLabelTextColor(color: UIColor): void;

	setPromptLabelAttributedText(attributedText: NSAttributedString): void;

	setPromptLabelText(text: string): void;

	setPromptLabelTextColor(color: UIColor): void;

	setPromptTintColor(color: UIColor): void;

	textViewDidBeginEditing(textView: UITextView): void;

	textViewDidChange(textView: UITextView): void;

	textViewDidChangeSelection(textView: UITextView): void;

	textViewDidEndEditing(textView: UITextView): void;

	textViewShouldBeginEditing(textView: UITextView): boolean;

	textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, text: string): boolean;

	textViewShouldEndEditing(textView: UITextView): boolean;

	textViewShouldInteractWithTextAttachmentInRange(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

	textViewShouldInteractWithTextAttachmentInRangeInteraction(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	textViewShouldInteractWithURLInRange(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;

	textViewShouldInteractWithURLInRangeInteraction(textView: UITextView, URL: NSURL, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class THContactTextField extends UITextField {

	static alloc(): THContactTextField; // inherited from NSObject

	static appearance(): THContactTextField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): THContactTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): THContactTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): THContactTextField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): THContactTextField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): THContactTextField; // inherited from UIAppearance

	static new(): THContactTextField; // inherited from NSObject

	delegate: THContactTextFieldDelegate;
}

interface THContactTextFieldDelegate extends UITextFieldDelegate {

	textFieldDidChange?(textField: THContactTextField): void;

	textFieldDidHitBackspaceWithEmptyText?(textField: THContactTextField): void;
}
declare var THContactTextFieldDelegate: {

	prototype: THContactTextFieldDelegate;
};

declare class THContactView extends UIView implements UITextInputTraits {

	static alloc(): THContactView; // inherited from NSObject

	static appearance(): THContactView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): THContactView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): THContactView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): THContactView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): THContactView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): THContactView; // inherited from UIAppearance

	static new(): THContactView; // inherited from NSObject

	delegate: THContactViewDelegate;

	gradientLayer: CAGradientLayer;

	isSelected: boolean;

	label: UILabel;

	maxWidth: number;

	minWidth: number;

	name: string;

	selectedStyle: THContactViewStyle;

	showComma: boolean;

	style: THContactViewStyle;

	textField: THContactTextField;

	autocapitalizationType: UITextAutocapitalizationType; // inherited from UITextInputTraits

	autocorrectionType: UITextAutocorrectionType; // inherited from UITextInputTraits

	/* readonly */ debugDescription: string; // inherited from NSObjectProtocol

	/* readonly */ description: string; // inherited from NSObjectProtocol

	enablesReturnKeyAutomatically: boolean; // inherited from UITextInputTraits

	/* readonly */ hash: number; // inherited from NSObjectProtocol

	/* readonly */ isProxy: boolean; // inherited from NSObjectProtocol

	keyboardAppearance: UIKeyboardAppearance; // inherited from UITextInputTraits

	keyboardType: UIKeyboardType; // inherited from UITextInputTraits

	returnKeyType: UIReturnKeyType; // inherited from UITextInputTraits

	secureTextEntry: boolean; // inherited from UITextInputTraits

	spellCheckingType: UITextSpellCheckingType; // inherited from UITextInputTraits

	/* readonly */ superclass: typeof NSObject; // inherited from NSObjectProtocol

	textContentType: string; // inherited from UITextInputTraits

	/* readonly */  // inherited from NSObjectProtocol

	constructor(o: { name: string; });

	constructor(o: { name: string; style: THContactViewStyle; selectedStyle: THContactViewStyle; });

	constructor(o: { name: string; style: THContactViewStyle; selectedStyle: THContactViewStyle; showComma: boolean; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithName(name: string): this;

	initWithNameStyleSelectedStyle(name: string, style: THContactViewStyle, selectedStyle: THContactViewStyle): this;

	initWithNameStyleSelectedStyleShowComma(name: string, style: THContactViewStyle, selectedStyle: THContactViewStyle, showComma: boolean): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	select(): void;

	self(): this;

	setFont(font: UIFont): void;

	unSelect(): void;
}

interface THContactViewDelegate extends NSObjectProtocol {

	contactViewShouldBeRemoved(contactView: THContactView): void;

	contactViewWasSelected(contactView: THContactView): void;

	contactViewWasUnSelected(contactView: THContactView): void;
}
declare var THContactViewDelegate: {

	prototype: THContactViewDelegate;
};

declare class THContactViewStyle extends NSObject {

	static alloc(): THContactViewStyle; // inherited from NSObject

	static new(): THContactViewStyle; // inherited from NSObject

	borderColor: UIColor;

	borderWidth: number;

	cornerRadiusFactor: number;

	gradientBottom: UIColor;

	gradientTop: UIColor;

	textColor: UIColor;

	constructor(o: { textColor: UIColor; backgroundColor: UIColor; cornerRadiusFactor: number; });

	constructor(o: { textColor: UIColor; gradientTop: UIColor; gradientBottom: UIColor; borderColor: UIColor; borderWidth: number; cornerRadiusFactor: number; });

	hasNonWhiteBackground(): boolean;

	initWithTextColorBackgroundColorCornerRadiusFactor(textColor: UIColor, backgroundColor: UIColor, cornerRadiusFactor: number): this;

	initWithTextColorGradientTopGradientBottomBorderColorBorderWidthCornerRadiusFactor(textColor: UIColor, gradientTop: UIColor, gradientBottom: UIColor, borderColor: UIColor, borderWidth: number, cornerRadiusFactor: number): this;
}
