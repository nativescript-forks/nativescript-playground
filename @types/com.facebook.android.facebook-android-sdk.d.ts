
declare module com {
	export module facebook {
		export class AccessToken extends java.lang.Object implements android.os.Parcelable {
			public static ACCESS_TOKEN_KEY: string;
			public static EXPIRES_IN_KEY: string;
			public static USER_ID_KEY: string;
			public static CREATOR: android.os.Parcelable.Creator;
			public getToken(): string;
			public getDeclinedPermissions(): java.util.Set;
			public static refreshCurrentAccessTokenAsync(param0: com.facebook.AccessToken.AccessTokenRefreshCallback): void;
			public getApplicationId(): string;
			public constructor();
			public equals(param0: java.lang.Object): boolean;
			public static refreshCurrentAccessTokenAsync(): void;
			public toString(): string;
			public getExpires(): java.util.Date;
			public static createFromNativeLinkingIntent(param0: android.content.Intent, param1: string, param2: com.facebook.AccessToken.AccessTokenCreationCallback): void;
			public getSource(): com.facebook.AccessTokenSource;
			public getLastRefresh(): java.util.Date;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static getCurrentAccessToken(): com.facebook.AccessToken;
			public getPermissions(): java.util.Set;
			public getUserId(): string;
			public isExpired(): boolean;
			public constructor(param0: string, param1: string, param2: string, param3: java.util.Collection, param4: java.util.Collection, param5: com.facebook.AccessTokenSource, param6: java.util.Date, param7: java.util.Date);
			public static setCurrentAccessToken(param0: com.facebook.AccessToken): void;
			public hashCode(): number;
		}
		export module AccessToken {
			export class AccessTokenCreationCallback extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.facebook.AccessToken$AccessTokenCreationCallback interface with the provided implementation.
				 */
				public constructor(implementation: {
					onSuccess(param0: com.facebook.AccessToken): void;
					onError(param0: com.facebook.FacebookException): void;
				});
				public onSuccess(param0: com.facebook.AccessToken): void;
				public onError(param0: com.facebook.FacebookException): void;
			}
			export class AccessTokenRefreshCallback extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.facebook.AccessToken$AccessTokenRefreshCallback interface with the provided implementation.
				 */
				public constructor(implementation: {
					OnTokenRefreshed(param0: com.facebook.AccessToken): void;
					OnTokenRefreshFailed(param0: com.facebook.FacebookException): void;
				});
				public OnTokenRefreshFailed(param0: com.facebook.FacebookException): void;
				public OnTokenRefreshed(param0: com.facebook.AccessToken): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class AccessTokenCache extends java.lang.Object {
			public clear(): void;
			public constructor();
			public load(): com.facebook.AccessToken;
			public save(param0: com.facebook.AccessToken): void;
		}
		export module AccessTokenCache {
			export class SharedPreferencesTokenCachingStrategyFactory extends java.lang.Object {
				public create(): com.facebook.LegacyTokenHelper;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class AccessTokenManager extends java.lang.Object {
		}
		export module AccessTokenManager {
			export class RefreshResult extends java.lang.Object {
				public accessToken: string;
				public expiresAt: number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class AccessTokenSource extends java.lang.Enum {
			public static NONE: com.facebook.AccessTokenSource;
			public static FACEBOOK_APPLICATION_WEB: com.facebook.AccessTokenSource;
			public static FACEBOOK_APPLICATION_NATIVE: com.facebook.AccessTokenSource;
			public static FACEBOOK_APPLICATION_SERVICE: com.facebook.AccessTokenSource;
			public static WEB_VIEW: com.facebook.AccessTokenSource;
			public static TEST_USER: com.facebook.AccessTokenSource;
			public static CLIENT_TOKEN: com.facebook.AccessTokenSource;
			public static DEVICE_AUTH: com.facebook.AccessTokenSource;
			public static values(): native.Array<com.facebook.AccessTokenSource>;
			public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			public static valueOf(param0: string): com.facebook.AccessTokenSource;
		}
	}
}

declare module com {
	export module facebook {
		export abstract class AccessTokenTracker extends java.lang.Object {
			public onCurrentAccessTokenChanged(param0: com.facebook.AccessToken, param1: com.facebook.AccessToken): void;
			public startTracking(): void;
			public stopTracking(): void;
			public constructor();
			public isTracking(): boolean;
		}
		export module AccessTokenTracker {
			export class CurrentAccessTokenBroadcastReceiver extends android.content.BroadcastReceiver {
				public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class BuildConfig extends java.lang.Object {
			public static DEBUG: boolean;
			public static APPLICATION_ID: string;
			public static BUILD_TYPE: string;
			public static FLAVOR: string;
			public static VERSION_CODE: number;
			public static VERSION_NAME: string;
			public constructor();
		}
	}
}

declare module com {
	export module facebook {
		export class CallbackManager extends java.lang.Object {
			/**
			 * Constructs a new instance of the com.facebook.CallbackManager interface with the provided implementation.
			 */
			public constructor(implementation: {
				onActivityResult(param0: number, param1: number, param2: android.content.Intent): boolean;
			});
			public onActivityResult(param0: number, param1: number, param2: android.content.Intent): boolean;
		}
		export module CallbackManager {
			export class Factory extends java.lang.Object {
				public static create(): com.facebook.CallbackManager;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookActivity extends android.support.v4.app.FragmentActivity {
			public static PASS_THROUGH_CANCEL_ACTION: string;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
			public constructor();
			public onCreate(param0: android.os.Bundle): void;
			public getCurrentFragment(): android.support.v4.app.Fragment;
			public constructor(param0: android.content.Context, param1: number);
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookAuthorizationException extends com.facebook.FacebookException {
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: native.Array<java.lang.Object>);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookBroadcastReceiver extends android.content.BroadcastReceiver {
			public onSuccessfulAppCall(param0: string, param1: string, param2: android.os.Bundle): void;
			public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
			public constructor();
			public onFailedAppCall(param0: string, param1: string, param2: android.os.Bundle): void;
		}
	}
}

declare module com {
	export module facebook {
		export abstract class FacebookButtonBase extends android.widget.Button {
			public callExternalOnClickListener(param0: android.view.View): void;
			public setFragment(param0: android.app.Fragment): void;
			public getNativeFragment(): android.app.Fragment;
			public setInternalOnClickListener(param0: android.view.View.OnClickListener): void;
			public getCompoundPaddingLeft(): number;
			public constructor();
			public getRequestCode(): number;
			public configureButton(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number): void;
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public getFragment(): android.support.v4.app.Fragment;
			public getCompoundPaddingRight(): number;
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number, param4: string, param5: string);
			public setOnClickListener(param0: android.view.View.OnClickListener): void;
			public measureTextWidth(param0: string): number;
			public getDefaultRequestCode(): number;
			public constructor(param0: android.content.Context);
			public getActivity(): android.app.Activity;
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public onDraw(param0: android.graphics.Canvas): void;
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public onAttachedToWindow(): void;
			public setFragment(param0: android.support.v4.app.Fragment): void;
			public getDefaultStyleResource(): number;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookCallback extends java.lang.Object {
			/**
			 * Constructs a new instance of the com.facebook.FacebookCallback interface with the provided implementation.
			 */
			public constructor(implementation: {
				onSuccess(param0: java.lang.Object): void;
				onCancel(): void;
				onError(param0: com.facebook.FacebookException): void;
			});
			public onCancel(): void;
			public onError(param0: com.facebook.FacebookException): void;
			public onSuccess(param0: java.lang.Object): void;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookContentProvider extends android.content.ContentProvider {
			public onCreate(): boolean;
			public openFile(param0: android.net.Uri, param1: string): android.os.ParcelFileDescriptor;
			public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: android.os.CancellationSignal): android.database.Cursor;
			public openFile(param0: android.net.Uri, param1: string, param2: android.os.CancellationSignal): android.os.ParcelFileDescriptor;
			public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;
			public delete(param0: android.net.Uri, param1: string, param2: native.Array<string>): number;
			public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): android.database.Cursor;
			public constructor();
			public static getAttachmentUrl(param0: string, param1: java.util.UUID, param2: string): string;
			public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;
			public getType(param0: android.net.Uri): string;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookDialog extends java.lang.Object {
			/**
			 * Constructs a new instance of the com.facebook.FacebookDialog interface with the provided implementation.
			 */
			public constructor(implementation: {
				canShow(param0: java.lang.Object): boolean;
				show(param0: java.lang.Object): void;
				registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback): void;
				registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback, param2: number): void;
			});
			public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback): void;
			public canShow(param0: java.lang.Object): boolean;
			public show(param0: java.lang.Object): void;
			public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback, param2: number): void;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookDialogException extends com.facebook.FacebookException {
			public constructor(param0: string, param1: number, param2: string);
			public getErrorCode(): number;
			public toString(): string;
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: native.Array<java.lang.Object>);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public getFailingUrl(): string;
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookException extends java.lang.RuntimeException {
			public toString(): string;
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor(param0: string, param1: native.Array<java.lang.Object>);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookGraphResponseException extends com.facebook.FacebookException {
			public constructor(param0: com.facebook.GraphResponse, param1: string);
			public toString(): string;
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: native.Array<java.lang.Object>);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor();
			public constructor(param0: string);
			public getGraphResponse(): com.facebook.GraphResponse;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookOperationCanceledException extends com.facebook.FacebookException {
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: native.Array<java.lang.Object>);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookRequestError extends java.lang.Object {
			public static INVALID_ERROR_CODE: number;
			public static INVALID_HTTP_STATUS_CODE: number;
			public constructor(param0: number, param1: string, param2: string);
			public getErrorCode(): number;
			public getCategory(): com.facebook.FacebookRequestError.Category;
			public getConnection(): java.net.HttpURLConnection;
			public getErrorUserMessage(): string;
			public constructor();
			public getRequestResult(): org.json.JSONObject;
			public getSubErrorCode(): number;
			public getErrorMessage(): string;
			public toString(): string;
			public getErrorType(): string;
			public getErrorRecoveryMessage(): string;
			public getErrorUserTitle(): string;
			public getBatchRequestResult(): java.lang.Object;
			public getRequestStatusCode(): number;
			public getRequestResultBody(): org.json.JSONObject;
			public getException(): com.facebook.FacebookException;
		}
		export module FacebookRequestError {
			export class Category extends java.lang.Enum {
				public static LOGIN_RECOVERABLE: com.facebook.FacebookRequestError.Category;
				public static OTHER: com.facebook.FacebookRequestError.Category;
				public static TRANSIENT: com.facebook.FacebookRequestError.Category;
				public static values(): native.Array<com.facebook.FacebookRequestError.Category>;
				public static valueOf(param0: string): com.facebook.FacebookRequestError.Category;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			}
			export class Range extends java.lang.Object {
			}
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookSdk extends java.lang.Object {
			public static APPLICATION_ID_PROPERTY: string;
			public static APPLICATION_NAME_PROPERTY: string;
			public static CLIENT_TOKEN_PROPERTY: string;
			public static WEB_DIALOG_THEME: string;
			public static setFacebookDomain(param0: string): void;
			public static getExecutor(): java.util.concurrent.Executor;
			public static clearLoggingBehaviors(): void;
			public static isDebugEnabled(): boolean;
			public static setIsDebugEnabled(param0: boolean): void;
			public static setLimitEventAndDataUsage(param0: android.content.Context, param1: boolean): void;
			public static getApplicationSignature(param0: android.content.Context): string;
			public static setExecutor(param0: java.util.concurrent.Executor): void;
			public static getLoggingBehaviors(): java.util.Set;
			public static setApplicationName(param0: string): void;
			public static sdkInitialize(param0: android.content.Context, param1: number, param2: com.facebook.FacebookSdk.InitializeCallback): void;
			public static setWebDialogTheme(param0: number): void;
			public static getCallbackRequestCodeOffset(): number;
			public static isFacebookRequestCode(param0: number): boolean;
			public static setOnProgressThreshold(param0: number): void;
			public static getApplicationContext(): android.content.Context;
			public static getOnProgressThreshold(): number;
			public static isInitialized(): boolean;
			public static setLegacyTokenUpgradeSupported(param0: boolean): void;
			public static sdkInitialize(param0: android.content.Context): void;
			public static getLimitEventAndDataUsage(param0: android.content.Context): boolean;
			public static getApplicationId(): string;
			public static sdkInitialize(param0: android.content.Context, param1: number): void;
			public static getApplicationName(): string;
			public constructor();
			public static getFacebookDomain(): string;
			public static addLoggingBehavior(param0: com.facebook.LoggingBehavior): void;
			public static publishInstallAsync(param0: android.content.Context, param1: string): void;
			public static setApplicationId(param0: string): void;
			public static getClientToken(): string;
			public static setClientToken(param0: string): void;
			public static getCacheDir(): java.io.File;
			public static isLoggingBehaviorEnabled(param0: com.facebook.LoggingBehavior): boolean;
			public static setCacheDir(param0: java.io.File): void;
			public static getSdkVersion(): string;
			public static sdkInitialize(param0: android.content.Context, param1: com.facebook.FacebookSdk.InitializeCallback): void;
			public static removeLoggingBehavior(param0: com.facebook.LoggingBehavior): void;
			public static isLegacyTokenUpgradeSupported(): boolean;
			public static getWebDialogTheme(): number;
		}
		export module FacebookSdk {
			export class InitializeCallback extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.facebook.FacebookSdk$InitializeCallback interface with the provided implementation.
				 */
				public constructor(implementation: {
					onInitialized(): void;
				});
				public onInitialized(): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookSdkNotInitializedException extends com.facebook.FacebookException {
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: native.Array<java.lang.Object>);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookSdkVersion extends java.lang.Object {
			public static BUILD: string;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookServiceException extends com.facebook.FacebookException {
			public toString(): string;
			public constructor(param0: com.facebook.FacebookRequestError, param1: string);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: native.Array<java.lang.Object>);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor();
			public constructor(param0: string);
			public getRequestError(): com.facebook.FacebookRequestError;
		}
	}
}

declare module com {
	export module facebook {
		export class GraphRequest extends java.lang.Object {
			public static MAXIMUM_BATCH_SIZE: number;
			public static TAG: string;
			public static FIELDS_PARAM: string;
			public getTag(): java.lang.Object;
			public setVersion(param0: string): void;
			public constructor(param0: com.facebook.AccessToken, param1: string, param2: android.os.Bundle, param3: com.facebook.HttpMethod);
			public static executeBatchAndWait(param0: native.Array<com.facebook.GraphRequest>): java.util.List;
			public getCallback(): com.facebook.GraphRequest.Callback;
			public static newMyFriendsRequest(param0: com.facebook.AccessToken, param1: com.facebook.GraphRequest.GraphJSONArrayCallback): com.facebook.GraphRequest;
			public static toHttpConnection(param0: native.Array<com.facebook.GraphRequest>): java.net.HttpURLConnection;
			public getParameters(): android.os.Bundle;
			public setCallback(param0: com.facebook.GraphRequest.Callback): void;
			public setTag(param0: java.lang.Object): void;
			public static newCustomAudienceThirdPartyIdRequest(param0: com.facebook.AccessToken, param1: android.content.Context, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public setParameters(param0: android.os.Bundle): void;
			public static executeConnectionAndWait(param0: java.net.HttpURLConnection, param1: java.util.Collection): java.util.List;
			public static executeConnectionAndWait(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch): java.util.List;
			public constructor(param0: com.facebook.AccessToken, param1: string, param2: android.os.Bundle, param3: com.facebook.HttpMethod, param4: com.facebook.GraphRequest.Callback);
			public constructor(param0: com.facebook.AccessToken, param1: string);
			public getBatchEntryDependsOn(): string;
			public constructor();
			public static executeBatchAsync(param0: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
			public getGraphObject(): org.json.JSONObject;
			public static setDefaultBatchApplicationId(param0: string): void;
			public static toHttpConnection(param0: java.util.Collection): java.net.HttpURLConnection;
			public static executeAndWait(param0: com.facebook.GraphRequest): com.facebook.GraphResponse;
			public static executeConnectionAsync(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
			public static getDefaultBatchApplicationId(): string;
			public static newGraphPathRequest(param0: com.facebook.AccessToken, param1: string, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public static executeBatchAndWait(param0: com.facebook.GraphRequestBatch): java.util.List;
			public static newUploadPhotoRequest(param0: com.facebook.AccessToken, param1: string, param2: android.graphics.Bitmap, param3: string, param4: android.os.Bundle, param5: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public static newPostRequest(param0: com.facebook.AccessToken, param1: string, param2: org.json.JSONObject, param3: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public executeAndWait(): com.facebook.GraphResponse;
			public static createOpenGraphObject(param0: com.facebook.share.model.ShareOpenGraphObject): com.facebook.GraphRequest;
			public static newMeRequest(param0: com.facebook.AccessToken, param1: com.facebook.GraphRequest.GraphJSONObjectCallback): com.facebook.GraphRequest;
			public constructor(param0: com.facebook.AccessToken, param1: string, param2: android.os.Bundle, param3: com.facebook.HttpMethod, param4: com.facebook.GraphRequest.Callback, param5: string);
			public static executeBatchAndWait(param0: java.util.Collection): java.util.List;
			public static newPlacesSearchRequest(param0: com.facebook.AccessToken, param1: android.location.Location, param2: number, param3: number, param4: string, param5: com.facebook.GraphRequest.GraphJSONArrayCallback): com.facebook.GraphRequest;
			public static executeBatchAsync(param0: java.util.Collection): com.facebook.GraphRequestAsyncTask;
			public static newDeleteObjectRequest(param0: com.facebook.AccessToken, param1: string, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public static newUploadPhotoRequest(param0: com.facebook.AccessToken, param1: string, param2: android.net.Uri, param3: string, param4: android.os.Bundle, param5: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public setBatchEntryName(param0: string): void;
			public setGraphPath(param0: string): void;
			public static executeBatchAsync(param0: native.Array<com.facebook.GraphRequest>): com.facebook.GraphRequestAsyncTask;
			public static newUploadPhotoRequest(param0: com.facebook.AccessToken, param1: string, param2: java.io.File, param3: string, param4: android.os.Bundle, param5: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public getBatchEntryOmitResultOnSuccess(): boolean;
			public static toHttpConnection(param0: com.facebook.GraphRequestBatch): java.net.HttpURLConnection;
			public setSkipClientToken(param0: boolean): void;
			public static executeConnectionAsync(param0: android.os.Handler, param1: java.net.HttpURLConnection, param2: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
			public setBatchEntryOmitResultOnSuccess(param0: boolean): void;
			public executeAsync(): com.facebook.GraphRequestAsyncTask;
			public setAccessToken(param0: com.facebook.AccessToken): void;
			public static newCustomAudienceThirdPartyIdRequest(param0: com.facebook.AccessToken, param1: android.content.Context, param2: string, param3: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public setHttpMethod(param0: com.facebook.HttpMethod): void;
			public toString(): string;
			public setGraphObject(param0: org.json.JSONObject): void;
			public getHttpMethod(): com.facebook.HttpMethod;
			public getAccessToken(): com.facebook.AccessToken;
			public getVersion(): string;
			public getBatchEntryName(): string;
			public getGraphPath(): string;
			public setBatchEntryDependsOn(param0: string): void;
		}
		export module GraphRequest {
			export class Attachment extends java.lang.Object {
				public getRequest(): com.facebook.GraphRequest;
				public getValue(): java.lang.Object;
				public constructor();
				public constructor(param0: com.facebook.GraphRequest, param1: java.lang.Object);
			}
			export class Callback extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$Callback interface with the provided implementation.
				 */
				public constructor(implementation: {
					onCompleted(param0: com.facebook.GraphResponse): void;
				});
				public onCompleted(param0: com.facebook.GraphResponse): void;
			}
			export class GraphJSONArrayCallback extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$GraphJSONArrayCallback interface with the provided implementation.
				 */
				public constructor(implementation: {
					onCompleted(param0: org.json.JSONArray, param1: com.facebook.GraphResponse): void;
				});
				public onCompleted(param0: org.json.JSONArray, param1: com.facebook.GraphResponse): void;
			}
			export class GraphJSONObjectCallback extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$GraphJSONObjectCallback interface with the provided implementation.
				 */
				public constructor(implementation: {
					onCompleted(param0: org.json.JSONObject, param1: com.facebook.GraphResponse): void;
				});
				public onCompleted(param0: org.json.JSONObject, param1: com.facebook.GraphResponse): void;
			}
			export class KeyValueSerializer extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$KeyValueSerializer interface with the provided implementation.
				 */
				public constructor(implementation: {
					writeString(param0: string, param1: string): void;
				});
				public writeString(param0: string, param1: string): void;
			}
			export class OnProgressCallback extends java.lang.Object implements com.facebook.GraphRequest.Callback {
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$OnProgressCallback interface with the provided implementation.
				 */
				public constructor(implementation: {
					onProgress(param0: number, param1: number): void;
					onCompleted(param0: com.facebook.GraphResponse): void;
				});
				public onCompleted(param0: com.facebook.GraphResponse): void;
				public onProgress(param0: number, param1: number): void;
			}
			export class ParcelableResourceWithMimeType extends java.lang.Object implements android.os.Parcelable {
				public static CREATOR: android.os.Parcelable.Creator;
				public getMimeType(): string;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public constructor(param0: android.os.Parcelable, param1: string);
				public getResource(): android.os.Parcelable;
				public constructor();
			}
			export class Serializer extends java.lang.Object implements com.facebook.GraphRequest.KeyValueSerializer {
				public writeBytes(param0: string, param1: native.Array<number>): void;
				public writeBitmap(param0: string, param1: android.graphics.Bitmap): void;
				public writeObject(param0: string, param1: java.lang.Object, param2: com.facebook.GraphRequest): void;
				public writeRecordBoundary(): void;
				public write(param0: string, param1: native.Array<java.lang.Object>): void;
				public writeFile(param0: string, param1: android.os.ParcelFileDescriptor, param2: string): void;
				public constructor();
				public writeContentUri(param0: string, param1: android.net.Uri, param2: string): void;
				public writeLine(param0: string, param1: native.Array<java.lang.Object>): void;
				public writeString(param0: string, param1: string): void;
				public writeRequestsAsJson(param0: string, param1: org.json.JSONArray, param2: java.util.Collection): void;
				public writeContentDisposition(param0: string, param1: string, param2: string): void;
				public constructor(param0: java.io.OutputStream, param1: com.facebook.internal.Logger, param2: boolean);
			}
		}
	}
}

declare module com {
	export module facebook {
		export class GraphRequestAsyncTask extends android.os.AsyncTask {
			public constructor(param0: java.net.HttpURLConnection, param1: native.Array<com.facebook.GraphRequest>);
			public doInBackground(param0: native.Array<java.lang.Object>): java.lang.Object;
			public constructor(param0: native.Array<com.facebook.GraphRequest>);
			public getException(): java.lang.Exception;
			public constructor(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch);
			public onPostExecute(param0: java.util.List): void;
			public doInBackground(param0: native.Array<java.lang.Void>): java.util.List;
			public constructor();
			public getRequests(): com.facebook.GraphRequestBatch;
			public constructor(param0: java.net.HttpURLConnection, param1: java.util.Collection);
			public toString(): string;
			public onPostExecute(param0: java.lang.Object): void;
			public constructor(param0: java.util.Collection);
			public onPreExecute(): void;
			public constructor(param0: com.facebook.GraphRequestBatch);
		}
	}
}

declare module com {
	export module facebook {
		export class GraphRequestBatch extends java.util.AbstractList {
			public executeAndWait(): java.util.List;
			public constructor(param0: native.Array<com.facebook.GraphRequest>);
			public remove(param0: java.lang.Object): boolean;
			public get(param0: number): java.lang.Object;
			public add(param0: com.facebook.GraphRequest): boolean;
			public add(param0: java.lang.Object): boolean;
			public addCallback(param0: com.facebook.GraphRequestBatch.Callback): void;
			public set(param0: number, param1: com.facebook.GraphRequest): com.facebook.GraphRequest;
			public set(param0: number, param1: java.lang.Object): java.lang.Object;
			public constructor(param0: java.util.Collection);
			public getTimeout(): number;
			public getBatchApplicationId(): string;
			public clear(): void;
			public setTimeout(param0: number): void;
			public get(param0: number): com.facebook.GraphRequest;
			public size(): number;
			public add(param0: number, param1: com.facebook.GraphRequest): void;
			public removeCallback(param0: com.facebook.GraphRequestBatch.Callback): void;
			public remove(param0: number): java.lang.Object;
			public constructor();
			public executeAsync(): com.facebook.GraphRequestAsyncTask;
			public add(param0: number, param1: java.lang.Object): void;
			public setBatchApplicationId(param0: string): void;
			public remove(param0: number): com.facebook.GraphRequest;
			public constructor(param0: com.facebook.GraphRequestBatch);
		}
		export module GraphRequestBatch {
			export class Callback extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.facebook.GraphRequestBatch$Callback interface with the provided implementation.
				 */
				public constructor(implementation: {
					onBatchCompleted(param0: com.facebook.GraphRequestBatch): void;
				});
				public onBatchCompleted(param0: com.facebook.GraphRequestBatch): void;
			}
			export class OnProgressCallback extends java.lang.Object implements com.facebook.GraphRequestBatch.Callback {
				/**
				 * Constructs a new instance of the com.facebook.GraphRequestBatch$OnProgressCallback interface with the provided implementation.
				 */
				public constructor(implementation: {
					onBatchProgress(param0: com.facebook.GraphRequestBatch, param1: number, param2: number): void;
					onBatchCompleted(param0: com.facebook.GraphRequestBatch): void;
				});
				public onBatchProgress(param0: com.facebook.GraphRequestBatch, param1: number, param2: number): void;
				public onBatchCompleted(param0: com.facebook.GraphRequestBatch): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class GraphResponse extends java.lang.Object {
			public static NON_JSON_RESPONSE_PROPERTY: string;
			public static SUCCESS_KEY: string;
			public getRequestForPagedResults(param0: com.facebook.GraphResponse.PagingDirection): com.facebook.GraphRequest;
			public getJSONArray(): org.json.JSONArray;
			public getRequest(): com.facebook.GraphRequest;
			public toString(): string;
			public getConnection(): java.net.HttpURLConnection;
			public getRawResponse(): string;
			public getJSONObject(): org.json.JSONObject;
			public getError(): com.facebook.FacebookRequestError;
		}
		export module GraphResponse {
			export class PagingDirection extends java.lang.Enum {
				public static NEXT: com.facebook.GraphResponse.PagingDirection;
				public static PREVIOUS: com.facebook.GraphResponse.PagingDirection;
				public static values(): native.Array<com.facebook.GraphResponse.PagingDirection>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): com.facebook.GraphResponse.PagingDirection;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class HttpMethod extends java.lang.Enum {
			public static GET: com.facebook.HttpMethod;
			public static POST: com.facebook.HttpMethod;
			public static DELETE: com.facebook.HttpMethod;
			public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			public static valueOf(param0: string): com.facebook.HttpMethod;
			public static values(): native.Array<com.facebook.HttpMethod>;
		}
	}
}

declare module com {
	export module facebook {
		export class LegacyTokenHelper extends java.lang.Object {
			public static TOKEN_KEY: string;
			public static EXPIRATION_DATE_KEY: string;
			public static LAST_REFRESH_DATE_KEY: string;
			public static TOKEN_SOURCE_KEY: string;
			public static PERMISSIONS_KEY: string;
			public static DECLINED_PERMISSIONS_KEY: string;
			public static APPLICATION_ID_KEY: string;
			public static DEFAULT_CACHE_KEY: string;
			public static putDeclinedPermissions(param0: android.os.Bundle, param1: java.util.Collection): void;
			public clear(): void;
			public static getPermissions(param0: android.os.Bundle): java.util.Set;
			public load(): android.os.Bundle;
			public constructor(param0: android.content.Context, param1: string);
			public static putExpirationDate(param0: android.os.Bundle, param1: java.util.Date): void;
			public static getExpirationMilliseconds(param0: android.os.Bundle): number;
			public constructor();
			public static getLastRefreshMilliseconds(param0: android.os.Bundle): number;
			public static putApplicationId(param0: android.os.Bundle, param1: string): void;
			public static putToken(param0: android.os.Bundle, param1: string): void;
			public static putSource(param0: android.os.Bundle, param1: com.facebook.AccessTokenSource): void;
			public static putExpirationMilliseconds(param0: android.os.Bundle, param1: number): void;
			public static putPermissions(param0: android.os.Bundle, param1: java.util.Collection): void;
			public static getToken(param0: android.os.Bundle): string;
			public static getExpirationDate(param0: android.os.Bundle): java.util.Date;
			public static putLastRefreshDate(param0: android.os.Bundle, param1: java.util.Date): void;
			public save(param0: android.os.Bundle): void;
			public static getLastRefreshDate(param0: android.os.Bundle): java.util.Date;
			public constructor(param0: android.content.Context);
			public static putLastRefreshMilliseconds(param0: android.os.Bundle, param1: number): void;
			public static hasTokenInformation(param0: android.os.Bundle): boolean;
			public static getSource(param0: android.os.Bundle): com.facebook.AccessTokenSource;
			public static getApplicationId(param0: android.os.Bundle): string;
		}
	}
}

declare module com {
	export module facebook {
		export class LoggingBehavior extends java.lang.Enum {
			public static REQUESTS: com.facebook.LoggingBehavior;
			public static INCLUDE_ACCESS_TOKENS: com.facebook.LoggingBehavior;
			public static INCLUDE_RAW_RESPONSES: com.facebook.LoggingBehavior;
			public static CACHE: com.facebook.LoggingBehavior;
			public static APP_EVENTS: com.facebook.LoggingBehavior;
			public static DEVELOPER_ERRORS: com.facebook.LoggingBehavior;
			public static GRAPH_API_DEBUG_WARNING: com.facebook.LoggingBehavior;
			public static GRAPH_API_DEBUG_INFO: com.facebook.LoggingBehavior;
			public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			public static values(): native.Array<com.facebook.LoggingBehavior>;
			public static valueOf(param0: string): com.facebook.LoggingBehavior;
		}
	}
}

declare module com {
	export module facebook {
		export class Profile extends java.lang.Object implements android.os.Parcelable {
			public static CREATOR: android.os.Parcelable.Creator;
			public static fetchProfileForCurrentAccessToken(): void;
			public getProfilePictureUri(param0: number, param1: number): android.net.Uri;
			public constructor();
			public equals(param0: java.lang.Object): boolean;
			public getId(): string;
			public getMiddleName(): string;
			public getName(): string;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: android.net.Uri);
			public getFirstName(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public getLastName(): string;
			public static getCurrentProfile(): com.facebook.Profile;
			public static setCurrentProfile(param0: com.facebook.Profile): void;
			public getLinkUri(): android.net.Uri;
			public hashCode(): number;
		}
	}
}

declare module com {
	export module facebook {
		export class ProfileCache extends java.lang.Object {
		}
	}
}

declare module com {
	export module facebook {
		export class ProfileManager extends java.lang.Object {
		}
	}
}

declare module com {
	export module facebook {
		export abstract class ProfileTracker extends java.lang.Object {
			public startTracking(): void;
			public stopTracking(): void;
			public constructor();
			public isTracking(): boolean;
			public onCurrentProfileChanged(param0: com.facebook.Profile, param1: com.facebook.Profile): void;
		}
		export module ProfileTracker {
			export class ProfileBroadcastReceiver extends android.content.BroadcastReceiver {
				public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class ProgressNoopOutputStream extends java.io.OutputStream implements com.facebook.RequestOutputStream {
			public setCurrentRequest(param0: com.facebook.GraphRequest): void;
			public write(param0: number): void;
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public write(param0: native.Array<number>): void;
		}
	}
}

declare module com {
	export module facebook {
		export class ProgressOutputStream extends java.io.FilterOutputStream implements com.facebook.RequestOutputStream {
			public setCurrentRequest(param0: com.facebook.GraphRequest): void;
			public write(param0: number): void;
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public write(param0: native.Array<number>): void;
			public close(): void;
		}
	}
}

declare module com {
	export module facebook {
		export class RequestOutputStream extends java.lang.Object {
			/**
			 * Constructs a new instance of the com.facebook.RequestOutputStream interface with the provided implementation.
			 */
			public constructor(implementation: {
				setCurrentRequest(param0: com.facebook.GraphRequest): void;
			});
			public setCurrentRequest(param0: com.facebook.GraphRequest): void;
		}
	}
}

declare module com {
	export module facebook {
		export class RequestProgress extends java.lang.Object {
		}
	}
}

declare module com {
	export module facebook {
		export class TestUserManager extends java.lang.Object {
			public constructor(param0: string, param1: string);
			public getAccessTokenForSharedUser(param0: java.util.List, param1: string): com.facebook.AccessToken;
			public getAccessTokenForSharedUser(param0: java.util.List): com.facebook.AccessToken;
			public constructor();
			public getTestApplicationId(): string;
			public getAccessTokenForPrivateUser(param0: java.util.List): com.facebook.AccessToken;
			public getTestApplicationSecret(): string;
		}
		export module TestUserManager {
			export class Mode extends java.lang.Enum {
				public static PRIVATE: com.facebook.TestUserManager.Mode;
				public static SHARED: com.facebook.TestUserManager.Mode;
				public static valueOf(param0: string): com.facebook.TestUserManager.Mode;
				public static values(): native.Array<com.facebook.TestUserManager.Mode>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventsConstants extends java.lang.Object {
				public static EVENT_NAME_ACTIVATED_APP: string;
				public static EVENT_NAME_DEACTIVATED_APP: string;
				public static EVENT_NAME_SESSION_INTERRUPTIONS: string;
				public static EVENT_NAME_TIME_BETWEEN_SESSIONS: string;
				public static EVENT_NAME_COMPLETED_REGISTRATION: string;
				public static EVENT_NAME_VIEWED_CONTENT: string;
				public static EVENT_NAME_SEARCHED: string;
				public static EVENT_NAME_RATED: string;
				public static EVENT_NAME_COMPLETED_TUTORIAL: string;
				public static EVENT_NAME_ADDED_TO_CART: string;
				public static EVENT_NAME_ADDED_TO_WISHLIST: string;
				public static EVENT_NAME_INITIATED_CHECKOUT: string;
				public static EVENT_NAME_ADDED_PAYMENT_INFO: string;
				public static EVENT_NAME_PURCHASED: string;
				public static EVENT_NAME_ACHIEVED_LEVEL: string;
				public static EVENT_NAME_UNLOCKED_ACHIEVEMENT: string;
				public static EVENT_NAME_SPENT_CREDITS: string;
				public static EVENT_PARAM_CURRENCY: string;
				public static EVENT_PARAM_REGISTRATION_METHOD: string;
				public static EVENT_PARAM_CONTENT_TYPE: string;
				public static EVENT_PARAM_CONTENT_ID: string;
				public static EVENT_PARAM_SEARCH_STRING: string;
				public static EVENT_PARAM_SUCCESS: string;
				public static EVENT_PARAM_MAX_RATING_VALUE: string;
				public static EVENT_PARAM_PAYMENT_INFO_AVAILABLE: string;
				public static EVENT_PARAM_NUM_ITEMS: string;
				public static EVENT_PARAM_LEVEL: string;
				public static EVENT_PARAM_DESCRIPTION: string;
				public static EVENT_PARAM_SOURCE_APPLICATION: string;
				public static EVENT_PARAM_VALUE_YES: string;
				public static EVENT_PARAM_VALUE_NO: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventsLogger extends java.lang.Object {
				public static APP_EVENT_PREFERENCES: string;
				public static ACTION_APP_EVENTS_FLUSHED: string;
				public static APP_EVENTS_EXTRA_NUM_EVENTS_FLUSHED: string;
				public static APP_EVENTS_EXTRA_FLUSH_RESULT: string;
				public logPurchase(param0: java.math.BigDecimal, param1: java.util.Currency): void;
				public static getAnonymousAppDeviceGUID(param0: android.content.Context): string;
				public static newLogger(param0: android.content.Context): com.facebook.appevents.AppEventsLogger;
				public logEvent(param0: string, param1: android.os.Bundle): void;
				public logEvent(param0: string, param1: number, param2: android.os.Bundle): void;
				public isValidForAccessToken(param0: com.facebook.AccessToken): boolean;
				public static newLogger(param0: android.content.Context, param1: string): com.facebook.appevents.AppEventsLogger;
				public logPurchase(param0: java.math.BigDecimal, param1: java.util.Currency, param2: android.os.Bundle): void;
				public logEvent(param0: string, param1: number): void;
				public static setFlushBehavior(param0: com.facebook.appevents.AppEventsLogger.FlushBehavior): void;
				public flush(): void;
				public logSdkEvent(param0: string, param1: java.lang.Double, param2: android.os.Bundle): void;
				public static deactivateApp(param0: android.content.Context): void;
				public static activateApp(param0: android.content.Context, param1: string): void;
				public static newLogger(param0: android.content.Context, param1: com.facebook.AccessToken): com.facebook.appevents.AppEventsLogger;
				public static newLogger(param0: android.content.Context, param1: string, param2: com.facebook.AccessToken): com.facebook.appevents.AppEventsLogger;
				public static getFlushBehavior(): com.facebook.appevents.AppEventsLogger.FlushBehavior;
				public getApplicationId(): string;
				public static onContextStop(): void;
				public static activateApp(param0: android.content.Context): void;
				public static deactivateApp(param0: android.content.Context, param1: string): void;
				public logEvent(param0: string): void;
			}
			export module AppEventsLogger {
				export class AccessTokenAppIdPair extends java.lang.Object implements java.io.Serializable {
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
				}
				export module AccessTokenAppIdPair {
					export class SerializationProxyV1 extends java.lang.Object implements java.io.Serializable {
					}
				}
				export class AppEvent extends java.lang.Object implements java.io.Serializable {
					public constructor(param0: string, param1: string, param2: java.lang.Double, param3: android.os.Bundle, param4: boolean);
					public toString(): string;
					public constructor();
					public getName(): string;
					public getJSONObject(): org.json.JSONObject;
					public getIsImplicit(): boolean;
				}
				export module AppEvent {
					export class SerializationProxyV1 extends java.lang.Object implements java.io.Serializable {
					}
				}
				export class FlushBehavior extends java.lang.Enum {
					public static AUTO: com.facebook.appevents.AppEventsLogger.FlushBehavior;
					public static EXPLICIT_ONLY: com.facebook.appevents.AppEventsLogger.FlushBehavior;
					public static values(): native.Array<com.facebook.appevents.AppEventsLogger.FlushBehavior>;
					public static valueOf(param0: string): com.facebook.appevents.AppEventsLogger.FlushBehavior;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
				export class FlushReason extends java.lang.Enum {
					public static EXPLICIT: com.facebook.appevents.AppEventsLogger.FlushReason;
					public static TIMER: com.facebook.appevents.AppEventsLogger.FlushReason;
					public static SESSION_CHANGE: com.facebook.appevents.AppEventsLogger.FlushReason;
					public static PERSISTED_EVENTS: com.facebook.appevents.AppEventsLogger.FlushReason;
					public static EVENT_THRESHOLD: com.facebook.appevents.AppEventsLogger.FlushReason;
					public static EAGER_FLUSHING_EVENT: com.facebook.appevents.AppEventsLogger.FlushReason;
					public static valueOf(param0: string): com.facebook.appevents.AppEventsLogger.FlushReason;
					public static values(): native.Array<com.facebook.appevents.AppEventsLogger.FlushReason>;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
				export class FlushResult extends java.lang.Enum {
					public static SUCCESS: com.facebook.appevents.AppEventsLogger.FlushResult;
					public static SERVER_ERROR: com.facebook.appevents.AppEventsLogger.FlushResult;
					public static NO_CONNECTIVITY: com.facebook.appevents.AppEventsLogger.FlushResult;
					public static UNKNOWN_ERROR: com.facebook.appevents.AppEventsLogger.FlushResult;
					public static valueOf(param0: string): com.facebook.appevents.AppEventsLogger.FlushResult;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
					public static values(): native.Array<com.facebook.appevents.AppEventsLogger.FlushResult>;
				}
				export class FlushStatistics extends java.lang.Object {
					public numEvents: number;
					public result: com.facebook.appevents.AppEventsLogger.FlushResult;
				}
				export class PersistedAppSessionInfo extends java.lang.Object {
				}
				export class PersistedEvents extends java.lang.Object {
					public static persistEvents(param0: android.content.Context, param1: com.facebook.appevents.AppEventsLogger.AccessTokenAppIdPair, param2: com.facebook.appevents.AppEventsLogger.SessionEventsState): void;
					public static persistEvents(param0: android.content.Context, param1: java.util.Map): void;
					public addEvents(param0: com.facebook.appevents.AppEventsLogger.AccessTokenAppIdPair, param1: java.util.List): void;
					public keySet(): java.util.Set;
					public getEvents(param0: com.facebook.appevents.AppEventsLogger.AccessTokenAppIdPair): java.util.List;
					public static readAndClearStore(param0: android.content.Context): com.facebook.appevents.AppEventsLogger.PersistedEvents;
				}
				export class SessionEventsState extends java.lang.Object {
					public static EVENT_COUNT_KEY: string;
					public static ENCODED_EVENTS_KEY: string;
					public static NUM_SKIPPED_KEY: string;
					public constructor();
					public getAccumulatedEventCount(): number;
					public constructor(param0: com.facebook.internal.AttributionIdentifiers, param1: string, param2: string);
					public populateRequest(param0: com.facebook.GraphRequest, param1: boolean, param2: boolean): number;
					public getEventsToPersist(): java.util.List;
					public addEvent(param0: com.facebook.appevents.AppEventsLogger.AppEvent): void;
					public accumulatePersistedEvents(param0: java.util.List): void;
					public clearInFlightAndStats(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class FacebookTimeSpentData extends java.lang.Object implements java.io.Serializable {
			}
			export module FacebookTimeSpentData {
				export class SerializationProxyV1 extends java.lang.Object implements java.io.Serializable {
				}
				export class SerializationProxyV2 extends java.lang.Object implements java.io.Serializable {
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module applinks {
			export class AppLinkData extends java.lang.Object {
				public static ARGUMENTS_TAPTIME_KEY: string;
				public static ARGUMENTS_REFERER_DATA_KEY: string;
				public static ARGUMENTS_NATIVE_CLASS_KEY: string;
				public static ARGUMENTS_NATIVE_URL: string;
				public getRef(): string;
				public static createFromActivity(param0: android.app.Activity): com.facebook.applinks.AppLinkData;
				public getTargetUri(): android.net.Uri;
				public static fetchDeferredAppLinkData(param0: android.content.Context, param1: com.facebook.applinks.AppLinkData.CompletionHandler): void;
				public static createFromAlApplinkData(param0: android.content.Intent): com.facebook.applinks.AppLinkData;
				public static fetchDeferredAppLinkData(param0: android.content.Context, param1: string, param2: com.facebook.applinks.AppLinkData.CompletionHandler): void;
				public getArgumentBundle(): android.os.Bundle;
				public getRefererData(): android.os.Bundle;
			}
			export module AppLinkData {
				export class CompletionHandler extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.facebook.applinks.AppLinkData$CompletionHandler interface with the provided implementation.
					 */
					public constructor(implementation: {
						onDeferredAppLinkDataFetched(param0: com.facebook.applinks.AppLinkData): void;
					});
					public onDeferredAppLinkDataFetched(param0: com.facebook.applinks.AppLinkData): void;
				}
			}
		}
	}
}
