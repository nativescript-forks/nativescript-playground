
declare module bolts {
	export class AggregateException extends java.lang.Exception {
		public constructor();
		public constructor(param0: string);
		public constructor(param0: string, param1: java.lang.Throwable);
		public constructor(param0: java.lang.Throwable);
		public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
		public constructor(param0: string, param1: native.Array<java.lang.Throwable>);
		public constructor();
		public constructor(param0: string);
		public constructor(param0: string, param1: java.lang.Throwable);
		public constructor(param0: java.lang.Throwable);
		public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
		public constructor(param0: string, param1: java.util.List<any>);
		public constructor();
		public constructor(param0: string);
		public constructor(param0: string, param1: java.lang.Throwable);
		public constructor(param0: java.lang.Throwable);
		public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
		public constructor(param0: java.util.List<any>);
		public getInnerThrowables(): java.util.List<any>;
		public printStackTrace(): void;
		public printStackTrace(param0: java.io.PrintWriter): void;
		public printStackTrace(param0: java.io.PrintStream): void;
		public printStackTrace(): void;
		public printStackTrace(param0: java.io.PrintStream): void;
		public printStackTrace(param0: java.io.PrintWriter): void;
		public getErrors(): java.util.List<any>;
		public getCauses(): native.Array<java.lang.Throwable>;
	}
}

declare module bolts {
	export class AndroidExecutors extends java.lang.Object {
		public static newCachedThreadPool(): java.util.concurrent.ExecutorService;
		public static newCachedThreadPool(param0: java.util.concurrent.ThreadFactory): java.util.concurrent.ExecutorService;
		public static allowCoreThreadTimeout(param0: java.util.concurrent.ThreadPoolExecutor, param1: boolean): void;
		public static uiThread(): java.util.concurrent.Executor;
	}
	export module AndroidExecutors {
		export class UIThreadExecutor extends java.lang.Object {
			public execute(param0: java.lang.Runnable): void;
		}
	}
}

declare module bolts {
	export class BoltsExecutors extends java.lang.Object {
		public static background(): java.util.concurrent.ExecutorService;
	}
	export module BoltsExecutors {
		export class ImmediateExecutor extends java.lang.Object {
			public execute(param0: java.lang.Runnable): void;
		}
	}
}

declare module bolts {
	export class CancellationToken extends java.lang.Object {
		public isCancellationRequested(): boolean;
		public register(param0: java.lang.Runnable): bolts.CancellationTokenRegistration;
		public throwIfCancellationRequested(): void;
		public toString(): string;
	}
}

declare module bolts {
	export class CancellationTokenRegistration extends java.lang.Object {
		public close(): void;
	}
}

declare module bolts {
	export class CancellationTokenSource extends java.lang.Object {
		public constructor();
		public isCancellationRequested(): boolean;
		public getToken(): bolts.CancellationToken;
		public cancel(): void;
		public cancelAfter(param0: number): void;
		public close(): void;
		public toString(): string;
	}
}

declare module bolts {
	export class Capture extends java.lang.Object {
		public constructor();
		public constructor();
		public constructor(param0: java.lang.Object);
		public get(): java.lang.Object;
		public set(param0: java.lang.Object): void;
	}
}

declare module bolts {
	export class Continuation extends java.lang.Object {
		public constructor(any: any);
		public then(param0: bolts.Task): java.lang.Object;
	}
}

declare module bolts {
	export class ExecutorException extends java.lang.RuntimeException {
		public constructor();
		public constructor(param0: string);
		public constructor(param0: string, param1: java.lang.Throwable);
		public constructor(param0: java.lang.Throwable);
		public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
		public constructor(param0: java.lang.Exception);
	}
}

declare module bolts {
	export class Task extends java.lang.Object {
		public static getUnobservedExceptionHandler(): bolts.Task.UnobservedExceptionHandler;
		public static setUnobservedExceptionHandler(param0: bolts.Task.UnobservedExceptionHandler): void;
		public static create(): bolts.Task.TaskCompletionSource;
		public isCompleted(): boolean;
		public isCancelled(): boolean;
		public isFaulted(): boolean;
		public getResult(): java.lang.Object;
		public getError(): java.lang.Exception;
		public waitForCompletion(): void;
		public waitForCompletion(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
		public static forResult(param0: java.lang.Object): bolts.Task;
		public static forError(param0: java.lang.Exception): bolts.Task;
		public static cancelled(): bolts.Task;
		public static delay(param0: number): bolts.Task;
		public static delay(param0: number, param1: bolts.CancellationToken): bolts.Task;
		public cast(): bolts.Task;
		public makeVoid(): bolts.Task;
		public static callInBackground(param0: java.util.concurrent.Callable<any>): bolts.Task;
		public static callInBackground(param0: java.util.concurrent.Callable<any>, param1: bolts.CancellationToken): bolts.Task;
		public static call(param0: java.util.concurrent.Callable<any>, param1: java.util.concurrent.Executor): bolts.Task;
		public static call(param0: java.util.concurrent.Callable<any>, param1: java.util.concurrent.Executor, param2: bolts.CancellationToken): bolts.Task;
		public static call(param0: java.util.concurrent.Callable<any>): bolts.Task;
		public static call(param0: java.util.concurrent.Callable<any>, param1: bolts.CancellationToken): bolts.Task;
		public static whenAnyResult(param0: java.util.Collection<any>): bolts.Task;
		public static whenAny(param0: java.util.Collection<any>): bolts.Task;
		public static whenAllResult(param0: java.util.Collection<any>): bolts.Task;
		public static whenAll(param0: java.util.Collection<any>): bolts.Task;
		public continueWhile(param0: java.util.concurrent.Callable<any>, param1: bolts.Continuation): bolts.Task;
		public continueWhile(param0: java.util.concurrent.Callable<any>, param1: bolts.Continuation, param2: bolts.CancellationToken): bolts.Task;
		public continueWhile(param0: java.util.concurrent.Callable<any>, param1: bolts.Continuation, param2: java.util.concurrent.Executor): bolts.Task;
		public continueWhile(param0: java.util.concurrent.Callable<any>, param1: bolts.Continuation, param2: java.util.concurrent.Executor, param3: bolts.CancellationToken): bolts.Task;
		public continueWith(param0: bolts.Continuation, param1: java.util.concurrent.Executor): bolts.Task;
		public continueWith(param0: bolts.Continuation, param1: java.util.concurrent.Executor, param2: bolts.CancellationToken): bolts.Task;
		public continueWith(param0: bolts.Continuation): bolts.Task;
		public continueWith(param0: bolts.Continuation, param1: bolts.CancellationToken): bolts.Task;
		public continueWithTask(param0: bolts.Continuation, param1: java.util.concurrent.Executor): bolts.Task;
		public continueWithTask(param0: bolts.Continuation, param1: java.util.concurrent.Executor, param2: bolts.CancellationToken): bolts.Task;
		public continueWithTask(param0: bolts.Continuation): bolts.Task;
		public continueWithTask(param0: bolts.Continuation, param1: bolts.CancellationToken): bolts.Task;
		public onSuccess(param0: bolts.Continuation, param1: java.util.concurrent.Executor): bolts.Task;
		public onSuccess(param0: bolts.Continuation, param1: java.util.concurrent.Executor, param2: bolts.CancellationToken): bolts.Task;
		public onSuccess(param0: bolts.Continuation): bolts.Task;
		public onSuccess(param0: bolts.Continuation, param1: bolts.CancellationToken): bolts.Task;
		public onSuccessTask(param0: bolts.Continuation, param1: java.util.concurrent.Executor): bolts.Task;
		public onSuccessTask(param0: bolts.Continuation, param1: java.util.concurrent.Executor, param2: bolts.CancellationToken): bolts.Task;
		public onSuccessTask(param0: bolts.Continuation): bolts.Task;
		public onSuccessTask(param0: bolts.Continuation, param1: bolts.CancellationToken): bolts.Task;
		public static BACKGROUND_EXECUTOR: java.util.concurrent.ExecutorService;
		public static UI_THREAD_EXECUTOR: java.util.concurrent.Executor;
	}
	export module Task {
		export class TaskCompletionSource extends bolts.TaskCompletionSource {
		}
		export class UnobservedExceptionHandler extends java.lang.Object {
			public unobservedException(param0: bolts.Task, param1: bolts.UnobservedTaskException): void;
		}
	}
}

declare module bolts {
	export class TaskCompletionSource extends java.lang.Object {
		public constructor();
		public getTask(): bolts.Task;
		public trySetCancelled(): boolean;
		public trySetResult(param0: java.lang.Object): boolean;
		public trySetError(param0: java.lang.Exception): boolean;
		public setCancelled(): void;
		public setResult(param0: java.lang.Object): void;
		public setError(param0: java.lang.Exception): void;
	}
}

declare module bolts {
	export class UnobservedErrorNotifier extends java.lang.Object {
		public constructor();
		public constructor(param0: bolts.Task);
		public finalize(): void;
		public setObserved(): void;
	}
}

declare module bolts {
	export class UnobservedTaskException extends java.lang.RuntimeException {
		public constructor();
		public constructor(param0: string);
		public constructor(param0: string, param1: java.lang.Throwable);
		public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
		public constructor(param0: java.lang.Throwable);
	}
}
