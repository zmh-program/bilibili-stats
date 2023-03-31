export function cut(content: string, length: number): string[] {
    let idx: number = 0, char: number = 0; while (idx + 1 < length) {
        idx += /\w/i.test(content.charAt(idx)) ? 0.45 : 1;
        char ++;
    }
    return content.length <= char ? [ content ] : [ content.substring(0, char), ...cut(content.substring(char), length) ];
}

export namespace ua {
    export const list: string[] = [
        "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11",
        "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Chrome/22.0.1216.0 Safari/537.2",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4) AppleWebKit/537.13 (KHTML, like Gecko) Chrome/24.0.1290.1 Safari/537.13",
        "Mozilla/5.0 (X11; CrOS i686 2268.111.0) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.57 Safari/536.11",
        "Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:16.0.1) Gecko/20121011 Firefox/16.0.1"
    ]

    export const get = (): string => list[Math.floor(Math.random() * list.length)];
}

export namespace request {
    const axios = require("axios");
    axios.defaults.baseURL = "https://api.bilibili.com";

    export async function get(url: string): Promise<any> {
        return await axios.get(url, {
            headers : {
                'Accept': 'application/json',
                'User-Agent': ua.get(),
            }
        });
    }

    export function rewrite(url: string): string {
        return url.replace(/http:\/\/i\d\.hdslb\.com\/bfs/i, '/proxy').replace(/https:\/\/i\d\.hdslb\.com\/bfs/i, '/proxy');
    }
}