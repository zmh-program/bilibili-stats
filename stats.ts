const cache = require('./cache').cache;
const axios = require('axios');
axios.defaults.baseURL = "https://api.bilibili.com";

export const getUser = cache.wrap(async (uid: number) => {

});

export const getVideo = cache.wrap(async (username: string, repo: string) => {

});