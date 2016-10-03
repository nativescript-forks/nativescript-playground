// 

declare interface ArrayConstructor {
    create(arg1: any, arg2: any): any
}

// declare module com { }
// declare var com: any
// declare var process: any
declare var Interfaces: any



declare module "url" {
    export interface Url {
        href?: string;
        protocol?: string;
        auth?: string;
        hostname?: string;
        port?: string;
        host?: string;
        pathname?: string;
        search?: string;
        query?: string | any;
        slashes?: boolean;
        hash?: string;
        path?: string;
    }

    export function parse(urlStr: string, parseQueryString?: boolean, slashesDenoteHost?: boolean): Url;
    export function format(url: Url): string;
    export function resolve(from: string, to: string): string;
}

declare module "events" {
    export class EventEmitter {
        static EventEmitter: EventEmitter;
        static listenerCount(emitter: EventEmitter, event: string): number; // deprecated
        static defaultMaxListeners: number;

        addListener(event: string, listener: Function): this;
        on(event: string, listener: Function): this;
        once(event: string, listener: Function): this;
        removeListener(event: string, listener: Function): this;
        removeAllListeners(event?: string): this;
        setMaxListeners(n: number): this;
        getMaxListeners(): number;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
        listenerCount(type: string): number;
    }
}





