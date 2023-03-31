import { cache } from "./cache";
import axios from "axios";
import { request } from "./utils";

export const getUser = cache.memo("user", async (uid: number) => {
    // TODO 1: BASE INFO (info.http)
    console.log(( await axios.get(`x/space/wbi/acc/info?mid=${uid}`) ))
    const {
        data: {
            name: name,       sex: sex,
            level: level,     sign: sign,
            face: avatar,     top_photo: background,
            vip: { label: { "img_label_uri_hans_static": vip } },
            official: { title: official },
        },
    } = ( await request.get(`x/space/wbi/acc/info?mid=${uid}`) ).data;

    // TODO 2: POST DATA (navnum.http)
    const {
        data: {
            video: video,       audio: audio,
            article: article,   album: album,
        }
    } = ( await request.get(`x/space/navnum?mid=${uid}`) ).data;

    // TODO 3: STATS DATA (stats.http)
    const {
        data : { follower: follower, following: following }
    } = ( await request.get(`x/relation/stat?vmid=${uid}`) ).data;

    return {
        name,    sex,        level,   vip,
        sign,    official,   avatar,  background,
        video,   article,    audio,   album,
        follower,            following,
    };
});

export const getVideo = cache.memo("video", async (username: string, repo: string) => {

});

getUser(1984532193).then(console.log);