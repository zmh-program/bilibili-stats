import { memo } from "./cache";
import axios from "axios";

axios.defaults.baseURL = "https://api.bilibili.com";
axios.defaults.headers.common = {
    'Accept': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0',
}

export const getUser = memo("user", async (uid: number) => {
    const resp = await axios.get(`x/space/wbi/acc/info?mid=${uid}`);
    return resp;
});

export const getVideo = memo("video", async (username: string, repo: string) => {

});