
declare class GBAnalyticsEventRouter extends NSObject implements GBAnalyticsEventRouterInterface {

	static alloc(): GBAnalyticsEventRouter; // inherited from NSObject

	static new(): GBAnalyticsEventRouter; // inherited from NSObject

	readonly route: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	networksToRouteTo: NSSet<any>; // inherited from GBAnalyticsEventRouterInterface

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	routeToNetworks(network: GBAnalyticsNetwork): void;

	self(): this;

	trackEvent(event: string): void;

	trackEventWithParameters(event: string, parameters: NSDictionary<any, any>): void;
}

interface GBAnalyticsEventRouterInterface extends NSObjectProtocol {

	networksToRouteTo: NSSet<any>;

	routeToNetworks(network: GBAnalyticsNetwork): void;

	trackEvent(event: string): void;

	trackEventWithParameters(event: string, parameters: NSDictionary<any, any>): void;
}
declare var GBAnalyticsEventRouterInterface: {

	prototype: GBAnalyticsEventRouterInterface;
};

declare class GBAnalyticsManager extends NSObject implements GBAnalyticsEventRouterInterface {

	static alloc(): GBAnalyticsManager; // inherited from NSObject

	static new(): GBAnalyticsManager; // inherited from NSObject

	static sharedManager(): GBAnalyticsManager;

	static signalInvalidCredentialsForNetwork(network: GBAnalyticsNetwork): void;

	static signalInvalidCredentialsForNetworkAdditionalInfo(network: GBAnalyticsNetwork, infoString: string): void;

	readonly connectedAnalyticsNetworks: NSMutableDictionary<any, any>;

	force: boolean;

	isDebugEnabled: boolean;

	readonly settings: GBAnalyticsSettings;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	networksToRouteTo: NSSet<any>; // inherited from GBAnalyticsEventRouterInterface

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addHandlerForApplicationNotification(block: (p1: string, p2: NSDictionary<any, any>) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	objectForKeyedSubscript(route: string): GBAnalyticsEventRouter;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	routeToNetworks(network: GBAnalyticsNetwork): void;

	self(): this;

	trackEvent(event: string): void;

	trackEventWithParameters(event: string, parameters: NSDictionary<any, any>): void;
}

interface GBAnalyticsModule extends NSObjectProtocol {
}
declare var GBAnalyticsModule: {

	prototype: GBAnalyticsModule;

	trackEvent(event: string): void;

	trackEventWithParameters(event: string, parameters: NSDictionary<any, any>): void;
};

declare class GBAnalyticsModule_Facebook extends NSObject implements GBAnalyticsModule {

	static alloc(): GBAnalyticsModule_Facebook; // inherited from NSObject

	static new(): GBAnalyticsModule_Facebook; // inherited from NSObject

	static trackEvent(event: string): void;

	static trackEventWithParameters(event: string, parameters: NSDictionary<any, any>): void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum GBAnalyticsNetwork {

	GoogleAnalytics = 1,

	Flurry = 2,

	Crashlytics = 3,

	Answers = 4,

	Tapstream = 5,

	Facebook = 6,

	Mixpanel = 7,

	Parse = 8,

	Localytics = 9,

	Amplitude = 10,

	Firebase = 11,

	Intercom = 12
}

declare class GBAnalyticsSettings extends NSObject {

	static alloc(): GBAnalyticsSettings; // inherited from NSObject

	static new(): GBAnalyticsSettings; // inherited from NSObject

	readonly Facebook: GBAnalyticsModule_Facebook;
}

declare var GBAnalyticsVersionNumber: number;

declare var GBAnalyticsVersionString: interop.Reference<number>;

declare function _GBAnalyticsEnabled(): boolean;

declare var kGBAnalyticsDefaultEventRoute: string;
