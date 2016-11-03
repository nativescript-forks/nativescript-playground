// 

declare module com {
	export module onegravity {
		export module contactpicker {
			export class BaseFragment extends android.support.v4.app.Fragment {
				public constructor();
				public onCreate(param0: android.os.Bundle): void;
				public onSaveInstanceState(param0: android.os.Bundle): void;
				public onActivityCreated(param0: android.os.Bundle): void;
				public createView(param0: android.view.LayoutInflater, param1: number, param2: android.support.v7.widget.RecyclerView.Adapter, param3: java.util.List<any>): android.view.View;
				public updateEmptyViewVisibility(param0: java.util.List<any>): void;
				public onResume(): void;
				public onPause(): void;
				public onCreateOptionsMenu(param0: android.view.Menu, param1: android.view.MenuInflater): void;
				public onOptionsItemSelected(param0: android.view.MenuItem): boolean;
				public checkAll(): void;
				public onQueryTextSubmit(param0: string): boolean;
				public onQueryTextChange(param0: string): boolean;
				public performFiltering(param0: native.Array<string>): void;
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export class BuildConfig extends java.lang.Object {
				public constructor();
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export class ContactElement extends java.lang.Object {
				public getId(): number;
				public getDisplayName(): string;
				public isChecked(): boolean;
				public setChecked(param0: boolean, param1: boolean): void;
				public addOnContactCheckedListener(param0: com.onegravity.contactpicker.OnContactCheckedListener): void;
				public matchesQuery(param0: native.Array<string>): boolean;
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export class Helper extends java.lang.Object {
				public constructor();
				public static isNullOrEmpty(param0: string): boolean;
				public static getDisplayMetrics(param0: android.content.Context): android.util.DisplayMetrics;
				public static closeQuietly(param0: android.database.Cursor): void;
				public static closeQuietly(param0: java.io.Closeable): void;
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export class OnContactCheckedListener extends java.lang.Object {
				public onContactChecked(param0: com.onegravity.contactpicker.ContactElement, param1: boolean, param2: boolean): void;
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module contact {
				export class Contact extends java.lang.Object {
					public getFirstName(): string;
					public getLastName(): string;
					public getEmail(param0: number): string;
					public getPhone(param0: number): string;
					public getAddress(param0: number): string;
					public getContactLetter(): string;
					public getContactLetter(param0: com.onegravity.contactpicker.contact.ContactSortOrder): string;
					public getContactColor(): number;
					public getLookupKey(): string;
					public getPhotoUri(): android.net.Uri;
					public getGroupIds(): java.util.Set<any>;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module contact {
				export class ContactAdapter extends android.support.v7.widget.RecyclerView$Adapter {
					public constructor();
					public constructor(param0: android.content.Context, param1: java.util.List<any>, param2: com.onegravity.contactpicker.contact.ContactSortOrder, param3: com.onegravity.contactpicker.picture.ContactPictureType, param4: com.onegravity.contactpicker.contact.ContactDescription, param5: number);
					public setData(param0: java.util.List<any>): void;
					public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): android.support.v7.widget.RecyclerView.ViewHolder;
					public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): com.onegravity.contactpicker.contact.ContactViewHolder;
					public onBindViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
					public onBindViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number, param2: java.util.List<any>): void;
					public onBindViewHolder(param0: com.onegravity.contactpicker.contact.ContactViewHolder, param1: number): void;
					public onViewRecycled(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public onViewRecycled(param0: com.onegravity.contactpicker.contact.ContactViewHolder): void;
					public getItemCount(): number;
					public getItemId(param0: number): number;
					public getSections(): native.Array<java.lang.Object>;
					public getPositionForSection(param0: number): number;
					public getSectionForPosition(param0: number): number;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module contact {
				export class ContactDescription extends java.lang.Enum<any> {
					public static values(): native.Array<com.onegravity.contactpicker.contact.ContactDescription>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
					public static valueOf(param0: string): com.onegravity.contactpicker.contact.ContactDescription;
					public static lookup(param0: string): com.onegravity.contactpicker.contact.ContactDescription;
					public static PHONE: com.onegravity.contactpicker.contact.ContactDescription;
					public static EMAIL: com.onegravity.contactpicker.contact.ContactDescription;
					public static ADDRESS: com.onegravity.contactpicker.contact.ContactDescription;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module contact {
				export class ContactFragment extends com.onegravity.contactpicker.BaseFragment {
					public static newInstance(param0: com.onegravity.contactpicker.contact.ContactSortOrder, param1: com.onegravity.contactpicker.picture.ContactPictureType, param2: com.onegravity.contactpicker.contact.ContactDescription, param3: number): com.onegravity.contactpicker.contact.ContactFragment;
					public constructor();
					public onCreate(param0: android.os.Bundle): void;
					public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
					public onEventMainThread(param0: com.onegravity.contactpicker.contact.ContactsLoaded): void;
					public checkAll(): void;
					public performFiltering(param0: native.Array<string>): void;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module contact {
				export class ContactSection extends java.lang.Object {
					public getLetter(): string;
					public getSectionPos(): number;
					public getContactPos(): number;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module contact {
				export class ContactSectionIndexer extends xyz.danoz.recyclerviewfastscroller.sectionindicator.title.SectionTitleIndicator {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setSection(param0: java.lang.Object): void;
					public setSection(param0: com.onegravity.contactpicker.contact.ContactSection): void;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module contact {
				export class ContactSelectionChanged extends java.lang.Object {
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module contact {
				export class ContactSortOrder extends java.lang.Enum<any> {
					public static values(): native.Array<com.onegravity.contactpicker.contact.ContactSortOrder>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
					public static valueOf(param0: string): com.onegravity.contactpicker.contact.ContactSortOrder;
					public static lookup(param0: string): com.onegravity.contactpicker.contact.ContactSortOrder;
					public static FIRST_NAME: com.onegravity.contactpicker.contact.ContactSortOrder;
					public static LAST_NAME: com.onegravity.contactpicker.contact.ContactSortOrder;
					public static AUTOMATIC: com.onegravity.contactpicker.contact.ContactSortOrder;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module contact {
				export class ContactViewHolder extends android.support.v7.widget.RecyclerView$ViewHolder {
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module contact {
				export class ContactsLoaded extends java.lang.Object {
					public static post(param0: java.util.List<any>): void;
					public getContacts(): java.util.List<any>;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module core {
				export class ContactElementImpl extends java.lang.Object {
					public getId(): number;
					public getDisplayName(): string;
					public setDisplayName(param0: string): void;
					public isChecked(): boolean;
					public setChecked(param0: boolean, param1: boolean): void;
					public addOnContactCheckedListener(param0: com.onegravity.contactpicker.OnContactCheckedListener): void;
					public matchesQuery(param0: native.Array<string>): boolean;
					public toString(): string;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module core {
				export class ContactImpl extends com.onegravity.contactpicker.core.ContactElementImpl {
					public constructor();
					public constructor(param0: number, param1: string, param2: string, param3: string, param4: string, param5: android.net.Uri);
					public getFirstName(): string;
					public getLastName(): string;
					public getEmail(param0: number): string;
					public getPhone(param0: number): string;
					public getAddress(param0: number): string;
					public getContactLetter(): string;
					public getContactLetter(param0: com.onegravity.contactpicker.contact.ContactSortOrder): string;
					public getContactColor(): number;
					public getLookupKey(): string;
					public getPhotoUri(): android.net.Uri;
					public getGroupIds(): java.util.Set<any>;
					public setFirstName(param0: string): void;
					public setLastName(param0: string): void;
					public setEmail(param0: number, param1: string): void;
					public setPhone(param0: number, param1: string): void;
					public setAddress(param0: number, param1: string): void;
					public setPhotoUri(param0: android.net.Uri): void;
					public toString(): string;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module core {
				export class ContactPickerActivity extends android.support.v7.app.AppCompatActivity {
					public constructor(param0: android.content.Context, param1: number);
					public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
					public constructor(param0: android.content.Context);
					public constructor();
					public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
					public onCreate(param0: android.os.Bundle): void;
					public onResume(): void;
					public onPause(): void;
					public onSaveInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
					public onSaveInstanceState(param0: android.os.Bundle): void;
					public onCreateOptionsMenu(param0: android.view.Menu): boolean;
					public onOptionsItemSelected(param0: android.view.MenuItem): boolean;
					public onCreateLoader(param0: number, param1: android.os.Bundle): android.support.v4.content.Loader<any>;
					public onLoaderReset(param0: android.support.v4.content.Loader<any>): void;
					public onLoadFinished(param0: android.support.v4.content.Loader<any>, param1: android.database.Cursor): void;
					public onEventMainThread(param0: com.onegravity.contactpicker.contact.ContactSelectionChanged): void;
					public static EXTRA_THEME: string;
					public static EXTRA_CONTACT_BADGE_TYPE: string;
					public static EXTRA_CONTACT_DESCRIPTION: string;
					public static EXTRA_CONTACT_DESCRIPTION_TYPE: string;
					public static EXTRA_CONTACT_SORT_ORDER: string;
					public static RESULT_CONTACT_DATA: string;
					public static RESULT_GROUP_DATA: string;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module core {
				export class GroupImpl extends com.onegravity.contactpicker.core.ContactElementImpl {
					public getContacts(): java.util.Collection<any>;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module core {
				export class PagerAdapter extends android.support.v4.app.FragmentStatePagerAdapter {
					public constructor(param0: android.support.v4.app.FragmentManager);
					public constructor();
					public constructor(param0: android.support.v4.app.FragmentManager, param1: number, param2: com.onegravity.contactpicker.contact.ContactSortOrder, param3: com.onegravity.contactpicker.picture.ContactPictureType, param4: com.onegravity.contactpicker.contact.ContactDescription, param5: number);
					public getItem(param0: number): android.support.v4.app.Fragment;
					public getCount(): number;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module group {
				export class Group extends java.lang.Object {
					public getContacts(): java.util.Collection<any>;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module group {
				export class GroupAdapter extends android.support.v7.widget.RecyclerView$Adapter {
					public constructor();
					public constructor(param0: java.util.List<any>);
					public setData(param0: java.util.List<any>): void;
					public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): android.support.v7.widget.RecyclerView.ViewHolder;
					public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): com.onegravity.contactpicker.group.GroupViewHolder;
					public onBindViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
					public onBindViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number, param2: java.util.List<any>): void;
					public onBindViewHolder(param0: com.onegravity.contactpicker.group.GroupViewHolder, param1: number): void;
					public getItemCount(): number;
					public getItemId(param0: number): number;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module group {
				export class GroupFragment extends com.onegravity.contactpicker.BaseFragment {
					public static newInstance(): com.onegravity.contactpicker.group.GroupFragment;
					public constructor();
					public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
					public onEventMainThread(param0: com.onegravity.contactpicker.group.GroupsLoaded): void;
					public checkAll(): void;
					public performFiltering(param0: native.Array<string>): void;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module group {
				export class GroupViewHolder extends android.support.v7.widget.RecyclerView$ViewHolder {
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module group {
				export class GroupsLoaded extends java.lang.Object {
					public static post(param0: java.util.List<any>): void;
					public getGroups(): java.util.List<any>;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module picture {
				export class Constants extends java.lang.Object {
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module picture {
				export class ContactBadge extends android.view.View {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public onDestroy(): void;
					public setBadgeType(param0: com.onegravity.contactpicker.picture.ContactPictureType): void;
					public setCharacter(param0: java.lang.Character, param1: number): void;
					public setBitmap(param0: android.graphics.Bitmap): void;
					public drawableStateChanged(): void;
					public onDraw(param0: android.graphics.Canvas): void;
					public onInitializeAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
					public onInitializeAccessibilityNodeInfo(param0: android.view.accessibility.AccessibilityNodeInfo): void;
					public assignContactUri(param0: android.net.Uri): void;
					public assignContactFromEmail(param0: string, param1: boolean): void;
					public assignContactFromEmail(param0: string, param1: boolean, param2: android.os.Bundle): void;
					public assignContactFromPhone(param0: string, param1: boolean): void;
					public assignContactFromPhone(param0: string, param1: boolean, param2: android.os.Bundle): void;
					public onClick(param0: android.view.View): void;
					public setExcludeMimes(param0: native.Array<string>): void;
					public static STANDARD_PICTURE_SIZE: number;
					public mExcludeMimes: native.Array<string>;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module picture {
				export class ContactPictureLoaded extends java.lang.Object {
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module picture {
				export class ContactPictureLoader extends java.lang.Object {
					public run(): void;
					public static retrievePicture(param0: android.content.Context, param1: android.net.Uri, param2: boolean): android.graphics.Bitmap;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module picture {
				export class ContactPictureManager extends java.lang.Object {
					public constructor();
					public constructor(param0: android.content.Context, param1: boolean);
					public loadContactPicture(param0: com.onegravity.contactpicker.contact.Contact, param1: com.onegravity.contactpicker.picture.ContactBadge): void;
					public onEventMainThread(param0: com.onegravity.contactpicker.picture.ContactPictureLoaded): void;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module picture {
				export class ContactPictureType extends java.lang.Enum<any> {
					public static values(): native.Array<com.onegravity.contactpicker.picture.ContactPictureType>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
					public static valueOf(param0: string): com.onegravity.contactpicker.picture.ContactPictureType;
					public static lookup(param0: string): com.onegravity.contactpicker.picture.ContactPictureType;
					public static NONE: com.onegravity.contactpicker.picture.ContactPictureType;
					public static ROUND: com.onegravity.contactpicker.picture.ContactPictureType;
					public static SQUARE: com.onegravity.contactpicker.picture.ContactPictureType;
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module picture {
				export class ContactQueryHandler extends android.content.AsyncQueryHandler {
					public constructor(param0: android.content.ContentResolver);
					public constructor();
					public constructor(param0: android.os.Handler.Callback);
					public constructor(param0: android.os.Looper);
					public constructor(param0: android.os.Looper, param1: android.os.Handler.Callback);
					public constructor(param0: android.content.Context, param1: native.Array<string>);
					public startQuery(param0: number, param1: java.lang.Object, param2: android.net.Uri, param3: native.Array<string>, param4: string, param5: native.Array<string>, param6: string): void;
					public startQuery(param0: number, param1: java.lang.Object, param2: android.net.Uri, param3: native.Array<string>, param4: string, param5: native.Array<string>, param6: string, param7: com.onegravity.contactpicker.picture.ContactQueryHandler.ContactQueryHandlerCallback): void;
					public cancelOperation(param0: number): void;
					public cancelOperation(): void;
					public onQueryComplete(param0: number, param1: java.lang.Object, param2: android.database.Cursor): void;
				}
				export module ContactQueryHandler {
					export class ContactQueryHandlerCallback extends java.lang.Object {
						public onQueryComplete(param0: number, param1: android.net.Uri, param2: android.os.Bundle, param3: boolean, param4: android.net.Uri): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module picture {
				export module cache {
					export class Cache extends java.lang.Object {
						public put(param0: java.lang.Object, param1: java.lang.Object): void;
						public get(param0: java.lang.Object): java.lang.Object;
						public evictAll(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module picture {
				export module cache {
					export class ContactPictureCache extends com.onegravity.contactpicker.picture.cache.InMemoryCache {
						public static getInstance(param0: android.content.Context): com.onegravity.contactpicker.picture.cache.ContactPictureCache;
						public createHardLruCache(param0: number): com.onegravity.contactpicker.picture.cache.InMemoryCache.HardLruCache;
					}
					export module ContactPictureCache {
						export class PhotoHardLruCache extends com.onegravity.contactpicker.picture.cache.InMemoryCache$HardLruCache {
							public constructor(param0: com.onegravity.contactpicker.picture.cache.InMemoryCache, param1: number);
							public constructor(param0: number);
							public constructor();
							public constructor(param0: com.onegravity.contactpicker.picture.cache.ContactPictureCache, param1: number);
							public sizeOf(param0: java.lang.Object, param1: java.lang.Object): number;
							public sizeOf(param0: android.net.Uri, param1: android.graphics.Bitmap): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module picture {
				export module cache {
					export class ContactUriCache extends com.onegravity.contactpicker.picture.cache.InMemoryCache {
						public static getInstance(): com.onegravity.contactpicker.picture.cache.ContactUriCache;
						public static getUriFromCache(param0: string): android.net.Uri;
					}
				}
			}
		}
	}
}

declare module com {
	export module onegravity {
		export module contactpicker {
			export module picture {
				export module cache {
					export class InMemoryCache extends java.lang.Object {
						public constructor();
						public constructor(param0: number, param1: number);
						public createHardLruCache(param0: number): com.onegravity.contactpicker.picture.cache.InMemoryCache.HardLruCache;
						public evictAll(): void;
						public put(param0: java.lang.Object, param1: java.lang.Object): void;
						public get(param0: java.lang.Object): java.lang.Object;
						public get(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
						public mDebug: boolean;
					}
					export module InMemoryCache {
						export class HardLruCache extends android.util.LruCache<any, any> {
							public constructor(param0: number);
							public constructor();
							public constructor(param0: com.onegravity.contactpicker.picture.cache.InMemoryCache, param1: number);
							public entryRemoved(param0: boolean, param1: java.lang.Object, param2: java.lang.Object, param3: java.lang.Object): void;
						}
						export class Purger extends java.lang.Object {
							public run(): void;
						}
					}
				}
			}
		}
	}
}
