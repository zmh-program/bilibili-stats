import { cache } from "./cache";
import axios from "axios";

axios.defaults.baseURL = "https://api.bilibili.com";
axios.defaults.headers.common = {
    'Accept': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0',
}

export const getUser = cache.memo("user", async (uid: number) => {
    const response = await axios.get(`x/space/wbi/acc/info?mid=${uid}`);
    const {
        data: {
            name: name,
            sex: sex,
            face: avatar,
            sign: sign,
            level: level,
            vip: {
                label: {
                    "img_label_uri_hans_static": vip,
                },
            },
            official: {
                title: official,
            },
            top_photo: background,
        },
    } = response.data;
    return {
        name,    sex,
        level,   vip,
        sign,    official,
        avatar,  background,
    };
});

export const getVideo = cache.memo("video", async (username: string, repo: string) => {

});


getUser(1984532193).then(console.log);