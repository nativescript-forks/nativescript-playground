
declare class ASUndefined extends NSObject {

	static alloc(): ASUndefined; // inherited from NSObject

	static new(): ASUndefined; // inherited from NSObject
}

declare class ASXML extends NSObject {

	static alloc(): ASXML; // inherited from NSObject

	static new(): ASXML; // inherited from NSObject

	constructor(o: { data: string; });

	initWithData(data: string): this;
}

declare class ASXMLDocument extends NSObject {

	static alloc(): ASXMLDocument; // inherited from NSObject

	static new(): ASXMLDocument; // inherited from NSObject

	constructor(o: { data: string; });

	initWithData(data: string): this;
}

declare class AVMixerRecorder extends NSObject {

	static alloc(): AVMixerRecorder; // inherited from NSObject

	static new(): AVMixerRecorder; // inherited from NSObject

	fileName: string;

	outputSettings: NSDictionary<string, NSDictionary<string, any>>;

	writer: AVAssetWriter;

	writerInputs: NSDictionary<string, AVAssetWriterInput>;

	static readonly defaultOutputSettings: NSDictionary<string, NSDictionary<string, any>>;
}

declare class DefaultAVMixerRecorderDelegate extends NSObject {

	static alloc(): DefaultAVMixerRecorderDelegate; // inherited from NSObject

	static new(): DefaultAVMixerRecorderDelegate; // inherited from NSObject

	dateFormat: string;

	duration: number;

	moviesDirectory: NSURL;

	didFinishWriting(recorder: AVMixerRecorder): void;

	didStartRunning(recorder: AVMixerRecorder): void;

	didStopRunning(recorder: AVMixerRecorder): void;

	getWriterInputMediaTypeSourceFormatHint(recorder: AVMixerRecorder, mediaType: string, sourceFormatHint: any): AVAssetWriterInput;

	rotateFileSampleBufferMediaType(recorder: AVMixerRecorder, sampleBuffer: any, mediaType: string): void;
}

declare class Event extends NSObject {

	static alloc(): Event; // inherited from NSObject

	static from(notification: NSNotification): Event;

	static new(): Event; // inherited from NSObject

	readonly bubbles: boolean;

	readonly data: any;

	readonly target: any;

	readonly type: string;

	static readonly EVENT: string;

	static readonly IO_ERROR: string;

	static readonly RTMP_STATUS: string;

	static readonly SYNC: string;

	constructor(o: { type: string; bubbles: boolean; data: any; });

	initWithTypeBubblesData(type: string, bubbles: boolean, data: any): this;
}

declare class EventDispatcher extends NSObject {

	static alloc(): EventDispatcher; // inherited from NSObject

	static new(): EventDispatcher; // inherited from NSObject

	constructor(o: { target: any; });

	addEventListenerSelectorObserverUseCapture(type: string, selector: string, observer: any, useCapture: boolean): void;

	dispatchBubblesData(type: string, bubbles: boolean, data: any): void;

	dispatchWithEvent(event: Event): void;

	initWithTarget(target: any): this;

	removeEventListenerSelectorObserverUseCapture(type: string, selector: string, observer: any, useCapture: boolean): void;
}

declare class GLLFView {

	static setDefaultBackgroundColor(value: UIColor): void;

	videoGravity: string;

	static defaultBackgroundColor: UIColor;

	constructor(o: { coder: NSCoder; });

	constructor(o: { frame: CGRect; });

	attachStream(stream: NetStream): void;

	awakeFromNib(): void;

	drawRect(rect: CGRect): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithFrame(frame: CGRect): this;
}

declare class HTTPService extends NetService {

	static alloc(): HTTPService; // inherited from NSObject

	static new(): HTTPService; // inherited from NSObject

	static readonly defaultDocument: string;

	static readonly defaultPort: number;

	static readonly type: string;

	addHTTPStream(stream: HTTPStream): void;

	removeHTTPStream(stream: HTTPStream): void;
}

declare class HTTPStream extends NetStream {

	static alloc(): HTTPStream; // inherited from NSObject

	static new(): HTTPStream; // inherited from NSObject

	publish(name: string): void;
}

declare class LFView extends UIView {

	static alloc(): LFView; // inherited from NSObject

	static appearance(): LFView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): LFView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): LFView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): LFView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): LFView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): LFView; // inherited from UIAppearance

	static layerClass(): typeof NSObject;

	static new(): LFView; // inherited from NSObject

	static setDefaultBackgroundColor(value: UIColor): void;

	videoGravity: string;

	static defaultBackgroundColor: UIColor;

	attachStream(stream: NetStream): void;
}

declare class NetService extends NSObject implements NSNetServiceDelegate {

	static alloc(): NetService; // inherited from NSObject

	static new(): NetService; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { domain: string; type: string; name: string; port: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDomainTypeNamePort(domain: string, type: string, name: string, port: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	netServiceDidAcceptConnectionWithInputStreamOutputStream(sender: NSNetService, inputStream: NSInputStream, outputStream: NSOutputStream): void;

	netServiceDidNotPublish(sender: NSNetService, errorDict: NSDictionary<string, number>): void;

	netServiceDidNotResolve(sender: NSNetService, errorDict: NSDictionary<string, number>): void;

	netServiceDidPublish(sender: NSNetService): void;

	netServiceDidResolveAddress(sender: NSNetService): void;

	netServiceDidStop(sender: NSNetService): void;

	netServiceDidUpdateTXTRecordData(sender: NSNetService, data: NSData): void;

	netServiceWillPublish(sender: NSNetService): void;

	netServiceWillResolve(sender: NSNetService): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	startRunning(): void;

	stopRunning(): void;
}

declare class NetStream extends NSObject {

	static alloc(): NetStream; // inherited from NSObject

	static new(): NetStream; // inherited from NSObject

	audioSettings: NSDictionary<string, any>;

	captureSettings: NSDictionary<string, any>;

	orientation: AVCaptureVideoOrientation;

	recorderSettings: NSDictionary<string, NSDictionary<string, any>>;

	syncOrientation: boolean;

	torch: boolean;

	videoSettings: NSDictionary<string, any>;

	attachAudioAutomaticallyConfiguresApplicationAudioSession(audio: AVCaptureDevice, automaticallyConfiguresApplicationAudioSession: boolean): void;

	attachCamera(camera: AVCaptureDevice): void;

	attachScreenUseScreenSize(screen: ScreenCaptureSession, useScreenSize: boolean): void;

	rampToVideoZoomFactorWithRate(toVideoZoomFactor: number, withRate: number): void;

	registerEffectWithVideo(effect: VisualEffect): boolean;

	setPointOfInterestExposure(focus: CGPoint, exposure: CGPoint): void;

	unregisterEffectWithVideo(effect: VisualEffect): boolean;
}

declare class RTMPBroadcaster extends RTMPConnection {

	static alloc(): RTMPBroadcaster; // inherited from NSObject

	static new(): RTMPBroadcaster; // inherited from NSObject
}

declare class RTMPConnection extends EventDispatcher {

	static alloc(): RTMPConnection; // inherited from NSObject

	static new(): RTMPConnection; // inherited from NSObject

	chunkSize: number;

	readonly connected: boolean;

	readonly currentBytesInPerSecond: number;

	readonly currentBytesOutPerSecond: number;

	flashVer: string;

	objectEncoding: number;

	pageUrl: string;

	swfUrl: string;

	timeout: number;

	readonly totalBytesIn: number;

	readonly totalBytesOut: number;

	readonly uri: NSURL;

	static readonly defaultCapabilities: number;

	static readonly defaultChunkSizeS: number;

	static readonly defaultFlashVer: string;

	static readonly defaultObjectEncoding: number;

	static readonly defaultPort: number;

	static readonly supportedProtocols: NSArray<string>;

	close(): void;

	connect(command: string): void;
}

declare class RTMPMP4ClipHandler extends RPBroadcastMP4ClipHandler {

	static alloc(): RTMPMP4ClipHandler; // inherited from NSObject

	static new(): RTMPMP4ClipHandler; // inherited from NSObject
}

declare class RTMPSharedObject extends EventDispatcher {

	static alloc(): RTMPSharedObject; // inherited from NSObject

	static getRemoteWithNameRemotePathPersistence(withName: string, remotePath: string, persistence: boolean): RTMPSharedObject;

	static new(): RTMPSharedObject; // inherited from NSObject

	readonly objectEncoding: number;

	clear(): void;

	close(): void;

	connect(rtmpConnection: RTMPConnection): void;

	setProperty(name: string, value: any): void;
}

declare class RTMPStream extends NetStream {

	static alloc(): RTMPStream; // inherited from NSObject

	static new(): RTMPStream; // inherited from NSObject

	static setRootPath(value: string): void;

	readonly currentFPS: number;

	readonly objectEncoding: number;

	static readonly defaultAudioBitrate: number;

	static readonly defaultVideoBitrate: number;

	static rootPath: string;

	constructor(o: { connection: RTMPConnection; });

	addEventListenerSelectorObserverUseCapture(type: string, selector: string, observer: any, useCapture: boolean): void;

	close(): void;

	dispatchBubblesData(type: string, bubbles: boolean, data: any): void;

	dispatchWithEvent(event: Event): void;

	initWithConnection(connection: RTMPConnection): this;

	pause(): void;

	publishType(name: string, type: string): void;

	receiveAudioWithFlag(flag: boolean): void;

	receiveVideoWithFlag(flag: boolean): void;

	removeEventListenerSelectorObserverUseCapture(type: string, selector: string, observer: any, useCapture: boolean): void;

	resume(): void;

	seek(offset: number): void;

	togglePause(): void;
}

declare class Responder extends NSObject {

	static alloc(): Responder; // inherited from NSObject

	static new(): Responder; // inherited from NSObject
}

declare class ScreenCaptureSession extends NSObject {

	static alloc(): ScreenCaptureSession; // inherited from NSObject

	static new(): ScreenCaptureSession; // inherited from NSObject

	readonly attributes: NSDictionary<string, NSObject>;

	enabledScale: boolean;

	frameInterval: number;

	onScreen(displayLink: CADisplayLink): void;

	startRunning(): void;

	stopRunning(): void;
}

declare class VisualEffect extends NSObject {

	static alloc(): VisualEffect; // inherited from NSObject

	static new(): VisualEffect; // inherited from NSObject

	execute(image: CIImage): CIImage;
}

declare var lfVersionNumber: number;

declare var lfVersionNumberVar: number;

declare var lfVersionString: interop.Reference<number>;

declare var lfVersionStringVar: interop.Reference<number>;
