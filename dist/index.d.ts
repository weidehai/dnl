export declare function dnl(options: {
    url: string;
    method: 'GET' | 'POST';
    header: {
        [key: string]: string;
    };
    name?: string;
}): Promise<void>;
export declare function upl(fileEle: HTMLInputElement, address: string, data?: Record<any, any>, config?: Record<any, any>): void;
