
declare module com {
	export module nguyenhoanglam {
		export module imagepicker {
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
}

declare module com {
	export module nguyenhoanglam {
		export module imagepicker {
			export module activity {
				export abstract class ImagePicker extends java.lang.Object {
					public imageDirectory(param0: string): com.nguyenhoanglam.imagepicker.activity.ImagePicker;
					public folderMode(param0: boolean): com.nguyenhoanglam.imagepicker.activity.ImagePicker;
					public start(param0: number): void;
					public imageTitle(param0: string): com.nguyenhoanglam.imagepicker.activity.ImagePicker;
					public init(param0: android.app.Activity): void;
					public multi(): com.nguyenhoanglam.imagepicker.activity.ImagePicker;
					public folderTitle(param0: string): com.nguyenhoanglam.imagepicker.activity.ImagePicker;
					public origin(param0: java.util.ArrayList): com.nguyenhoanglam.imagepicker.activity.ImagePicker;
					public getIntent(param0: android.app.Activity): android.content.Intent;
					public static create(param0: android.support.v4.app.Fragment): com.nguyenhoanglam.imagepicker.activity.ImagePicker.ImagePickerWithFragment;
					public single(): com.nguyenhoanglam.imagepicker.activity.ImagePicker;
					public constructor();
					public static create(param0: android.app.Activity): com.nguyenhoanglam.imagepicker.activity.ImagePicker.ImagePickerWithActivity;
					public limit(param0: number): com.nguyenhoanglam.imagepicker.activity.ImagePicker;
					public showCamera(param0: boolean): com.nguyenhoanglam.imagepicker.activity.ImagePicker;
				}
				export module ImagePicker {
					export class ImagePickerWithActivity extends com.nguyenhoanglam.imagepicker.activity.ImagePicker {
						public start(param0: number): void;
						public constructor();
						public constructor(param0: android.app.Activity);
					}
					export class ImagePickerWithFragment extends com.nguyenhoanglam.imagepicker.activity.ImagePicker {
						public start(param0: number): void;
						public constructor();
						public constructor(param0: android.support.v4.app.Fragment);
					}
				}
			}
		}
	}
}

declare module com {
	export module nguyenhoanglam {
		export module imagepicker {
			export module activity {
				export class ImagePickerActivity extends android.support.v7.app.AppCompatActivity implements com.nguyenhoanglam.imagepicker.listeners.OnImageClickListener {
					public static MODE_SINGLE: number;
					public static MODE_MULTIPLE: number;
					public static INTENT_EXTRA_SELECTED_IMAGES: string;
					public static INTENT_EXTRA_LIMIT: string;
					public static INTENT_EXTRA_SHOW_CAMERA: string;
					public static INTENT_EXTRA_MODE: string;
					public static INTENT_EXTRA_FOLDER_MODE: string;
					public static INTENT_EXTRA_FOLDER_TITLE: string;
					public static INTENT_EXTRA_IMAGE_TITLE: string;
					public static INTENT_EXTRA_IMAGE_DIRECTORY: string;
					public constructor(param0: android.content.Context, param1: number);
					public onBackPressed(): void;
					public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
					public onDestroy(): void;
					public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
					public onResume(): void;
					public onStart(): void;
					public getFolder(param0: string): com.nguyenhoanglam.imagepicker.model.Folder;
					public constructor(param0: android.content.Context);
					public constructor();
					public onCreate(param0: android.os.Bundle): void;
					public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
					public onCreateOptionsMenu(param0: android.view.Menu): boolean;
					public onOptionsItemSelected(param0: android.view.MenuItem): boolean;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public onClick(param0: android.view.View, param1: number): void;
					public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
				}
				export module ImagePickerActivity {
					export class ImageLoaderRunnable extends java.lang.Object implements java.lang.Runnable {
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module nguyenhoanglam {
		export module imagepicker {
			export module adapter {
				export class FolderPickerAdapter extends android.support.v7.widget.RecyclerView.Adapter {
					public constructor(param0: android.content.Context, param1: com.nguyenhoanglam.imagepicker.listeners.OnFolderClickListener);
					public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): android.support.v7.widget.RecyclerView.ViewHolder;
					public setData(param0: java.util.List): void;
					public constructor();
					public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): com.nguyenhoanglam.imagepicker.adapter.FolderPickerAdapter.FolderViewHolder;
					public onBindViewHolder(param0: com.nguyenhoanglam.imagepicker.adapter.FolderPickerAdapter.FolderViewHolder, param1: number): void;
					public getItemCount(): number;
					public onBindViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
					public onBindViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number, param2: java.util.List): void;
				}
				export module FolderPickerAdapter {
					export class FolderViewHolder extends android.support.v7.widget.RecyclerView.ViewHolder {
						public constructor();
						public constructor(param0: android.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module nguyenhoanglam {
		export module imagepicker {
			export module adapter {
				export class ImagePickerAdapter extends android.support.v7.widget.RecyclerView.Adapter {
					public onBindViewHolder(param0: com.nguyenhoanglam.imagepicker.adapter.ImagePickerAdapter.ImageViewHolder, param1: number): void;
					public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): com.nguyenhoanglam.imagepicker.adapter.ImagePickerAdapter.ImageViewHolder;
					public setData(param0: java.util.List): void;
					public addAll(param0: java.util.List): void;
					public addSelected(param0: com.nguyenhoanglam.imagepicker.model.Image): void;
					public removeSelectedPosition(param0: number, param1: number): void;
					public onBindViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number, param2: java.util.List): void;
					public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): android.support.v7.widget.RecyclerView.ViewHolder;
					public removeAllSelectedSingleClick(): void;
					public constructor(param0: android.content.Context, param1: java.util.List, param2: java.util.List, param3: com.nguyenhoanglam.imagepicker.listeners.OnImageClickListener);
					public constructor();
					public getItemCount(): number;
					public onBindViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
					public removeSelectedImage(param0: com.nguyenhoanglam.imagepicker.model.Image): void;
				}
				export module ImagePickerAdapter {
					export class ImageViewHolder extends android.support.v7.widget.RecyclerView.ViewHolder implements android.view.View.OnClickListener {
						public constructor(param0: android.view.View, param1: com.nguyenhoanglam.imagepicker.listeners.OnImageClickListener);
						public constructor(param0: android.view.View);
						public constructor();
						public onClick(param0: android.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module nguyenhoanglam {
		export module imagepicker {
			export module helper {
				export class Constants extends java.lang.Object {
					public static REQUEST_CODE_CAPTURE: number;
					public static FETCH_STARTED: number;
					public static FETCH_COMPLETED: number;
					public static ERROR: number;
					public static MAX_LIMIT: number;
					public static PERMISSION_REQUEST_WRITE_EXTERNAL_STORAGE: number;
					public static PERMISSION_REQUEST_CAMERA: number;
					public static PREF_WRITE_EXTERNAL_STORAGE_REQUESTED: string;
					public static PREF_CAMERA_REQUESTED: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module nguyenhoanglam {
		export module imagepicker {
			export module helper {
				export class ImageUtils extends java.lang.Object {
					public constructor();
					public static createImageFile(param0: string): java.io.File;
				}
			}
		}
	}
}

declare module com {
	export module nguyenhoanglam {
		export module imagepicker {
			export module listeners {
				export class OnFolderClickListener extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.nguyenhoanglam.imagepicker.listeners.OnFolderClickListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onFolderClick(param0: com.nguyenhoanglam.imagepicker.model.Folder): void;
					});
					public onFolderClick(param0: com.nguyenhoanglam.imagepicker.model.Folder): void;
				}
			}
		}
	}
}

declare module com {
	export module nguyenhoanglam {
		export module imagepicker {
			export module listeners {
				export class OnImageClickListener extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.nguyenhoanglam.imagepicker.listeners.OnImageClickListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onClick(param0: android.view.View, param1: number): void;
					});
					public onClick(param0: android.view.View, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module nguyenhoanglam {
		export module imagepicker {
			export module model {
				export class Folder extends java.lang.Object {
					public setFolderName(param0: string): void;
					public constructor(param0: string);
					public constructor();
					public setImages(param0: java.util.ArrayList): void;
					public getFolderName(): string;
					public getImages(): java.util.ArrayList;
				}
			}
		}
	}
}

declare module com {
	export module nguyenhoanglam {
		export module imagepicker {
			export module model {
				export class Image extends java.lang.Object implements android.os.Parcelable {
					public static CREATOR: android.os.Parcelable.Creator;
					public setId(param0: number): void;
					public getId(): number;
					public describeContents(): number;
					public setPath(param0: string): void;
					public setName(param0: string): void;
					public getPath(): string;
					public constructor(param0: number, param1: string, param2: string, param3: boolean);
					public constructor(param0: android.os.Parcel);
					public setSelected(param0: boolean): void;
					public constructor();
					public getName(): string;
					public isSelected(): boolean;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module nguyenhoanglam {
		export module imagepicker {
			export module view {
				export class GridSpacingItemDecoration extends android.support.v7.widget.RecyclerView.ItemDecoration {
					public constructor(param0: number, param1: number, param2: boolean);
					public getItemOffsets(param0: android.graphics.Rect, param1: android.view.View, param2: android.support.v7.widget.RecyclerView, param3: android.support.v7.widget.RecyclerView.State): void;
					public constructor();
					public getItemOffsets(param0: android.graphics.Rect, param1: number, param2: android.support.v7.widget.RecyclerView): void;
				}
			}
		}
	}
}

declare module com {
	export module nguyenhoanglam {
		export module imagepicker {
			export module view {
				export class ProgressWheel extends android.view.View {
					public getBarWidth(): number;
					public onDraw(param0: android.graphics.Canvas): void;
					public resetCount(): void;
					public getCircleRadius(): number;
					public setCircleRadius(param0: number): void;
					public onVisibilityChanged(param0: android.view.View, param1: number): void;
					public stopSpinning(): void;
					public setBarWidth(param0: number): void;
					public getRimColor(): number;
					public constructor();
					public setInstantProgress(param0: number): void;
					public isSpinning(): boolean;
					public setBarColor(param0: number): void;
					public setLinearProgress(param0: boolean): void;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public spin(): void;
					public setRimColor(param0: number): void;
					public getRimWidth(): number;
					public setCallback(param0: com.nguyenhoanglam.imagepicker.view.ProgressWheel.ProgressCallback): void;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public getSpinSpeed(): number;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public setProgress(param0: number): void;
					public getProgress(): number;
					public getBarColor(): number;
					public constructor(param0: android.content.Context);
					public setRimWidth(param0: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setSpinSpeed(param0: number): void;
					public onSaveInstanceState(): android.os.Parcelable;
				}
				export module ProgressWheel {
					export class ProgressCallback extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.nguyenhoanglam.imagepicker.view.ProgressWheel$ProgressCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onProgressUpdate(param0: number): void;
						});
						public onProgressUpdate(param0: number): void;
					}
					export class WheelSavedState extends android.view.View.BaseSavedState {
						public static CREATOR: android.os.Parcelable.Creator;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module nguyenhoanglam {
		export module imagepicker {
			export module view {
				export class SquareFrameLayout extends android.widget.FrameLayout {
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor();
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
				}
			}
		}
	}
}
