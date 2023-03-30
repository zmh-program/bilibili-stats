# bilibili-stats
🍇 动态生成B站用户/视频简介SVG图像


### 使用到的B站API


1. 
> ```commandline
> curl -k -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0" https://api.bilibili.com/x/space/wbi/acc/info?mid=1984532193
> ```
> ```json
> {
>   "code": 0,
>   "message": "0",
>   "ttl": 1,
>   "data": {
>     "mid": 1984532193,
>     "name": "zmh-program",
>     "sex": "男",
>     "face": "https://i0.hdslb.com/bfs/face/67dccf1adf5aa845a8e1e6e08c26f777c2589971.jpg",
>     "face_nft": 0,
>     "face_nft_type": 0,
>     "sign": "热爱深度强化学习，喜爱钻研网络相关的知识，主要研究python/c，对前后端和GUI有一定研究，熟悉pascal,vb,arduino等",
>     "rank": 10000,
>     "level": 3,
>     "jointime": 0,
>     "moral": 0,
>     "silence": 0,
>     "coins": 0,
>     "fans_badge": false,
>     "fans_medal": {
>       "show": false,
>       "wear": false,
>       "medal": null
>     },
>     "official": {
>       "role": 0,
>       "title": "",
>       "desc": "",
>       "type": -1
>     },
>     "vip": {
>       "type": 0,
>       "status": 0,
>       "due_date": 0,
>       "vip_pay_type": 0,
>       "theme_type": 0,
>       "label": {
>         "path": "",
>         "text": "",
>         "label_theme": "",
>         "text_color": "",
>         "bg_style": 0,
>         "bg_color": "",
>         "border_color": "",
>         "use_img_label": true,
>         "img_label_uri_hans": "",
>         "img_label_uri_hant": "",
>         "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
>         "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png"
>       },
>       "avatar_subscript": 0,
>       "nickname_color": "",
>       "role": 0,
>       "avatar_subscript_url": "",
>       "tv_vip_status": 0,
>       "tv_vip_pay_type": 0
>     },
>     "pendant": {
>       "pid": 0,
>       "name": "",
>       "image": "",
>       "expire": 0,
>       "image_enhance": "",
>       "image_enhance_frame": ""
>     },
>     "nameplate": {
>       "nid": 0,
>       "name": "",
>       "image": "",
>       "image_small": "",
>       "level": "",
>       "condition": ""
>     },
>     "user_honour_info": {
>       "mid": 0,
>       "colour": null,
>       "tags": []
>     },
>     "is_followed": false,
>     "top_photo": "http://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png",
>     "theme": {},
>     "sys_notice": {},
>     "live_room": null,
>     "birthday": "04-29",
>     "school": {
>       "name": ""
>     },
>     "profession": {
>       "name": "",
>       "department": "",
>       "title": "",
>       "is_show": 0
>     },
>     "tags": null,
>     "series": {
>       "user_upgrade_status": 3,
>       "show_upgrade_window": false
>     },
>     "is_senior_member": 0,
>     "mcn_info": null,
>     "gaia_res_type": 0,
>     "gaia_data": null,
>     "is_risk": false,
>     "elec": {
>       "show_info": {
>         "show": false,
>         "state": -1,
>         "title": "",
>         "icon": "",
>         "jump_url": ""
>       }
>     },
>     "contract": null
>   }
> }
> ```