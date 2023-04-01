import { cache } from "./cache";
import { request, cut, convert } from "./utils";

export const getUser = cache.memo("user", async (uid: number) => {
    // TODO 1: BASE INFO (info.http)
    let {
        data: {
            name: name,       sex: sex,
            level: level,     sign: sign,
            face: avatar,     top_photo: background,
            vip: { label: { "img_label_uri_hans_static": vip } },
            official: { title: official },
        },
    } = ( await request.get(`x/space/wbi/acc/info?mid=${uid}`) ).data;

    // TODO 2: POST DATA (navnum.http)
    let {
        data: {
            video: video,       audio: audio,
            article: article,   album: album,
        }
    } = ( await request.get(`x/space/navnum?mid=${uid}`) ).data;

    // TODO 3: STATS DATA (stats.http)
    let {
        data : { follower: follower, following: following }
    } = ( await request.get(`x/relation/stat?vmid=${uid}`) ).data;

    sign = cut(sign, 28);
    vip = request.rewrite(vip);
    avatar = request.rewrite(avatar);
    background = request.rewrite(background);
    follower = convert(follower);
    following = convert(following);

    return {
        uid,
        name,    sex,        level,   vip,
        sign,    official,   avatar,  background,
        video,   article,    audio,   album,
        follower,            following,
    };
});
