// 

declare interface ArrayConstructor {
    create(arg1: any, arg2: any): any
}



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





