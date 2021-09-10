export default function dnl(options: {
    url: string;
    method: string;
    data?: string;
    header: {
        [key: string]: string;
    };
    name?: string;
}): void;
