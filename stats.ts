import { cache } from "./cache";
import axios from "axios";

axios.defaults.baseURL = "https://api.bilibili.com";
axios.defaults.headers.common = {
    'Accept': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0',
}

export const getUser = cache.memo("user", async (uid: number) => {
    const response = await axios.get(`x/space/wbi/acc/info?mid=${uid}`);
    const result = {};
    const {
        data: {
            name: name,
            sex: sex,
            face: face,
            sign: sign,
            level: level,
        },
        label: {
            "img_label_uri_hans_static": vip,
        },
        official: {
            title: official,
        },
        "face": avatar,
        "top_photo": background,
    } = response.data;
    return {
        name,
        sex,
        face,
        sign,
        level,
        vip,
        official,
        avatar,
        background,
    };
});

export const getVideo = cache.memo("video", async (username: string, repo: string) => {

});