import { memo } from "./cache";
import axios from "axios";

axios.defaults.baseURL = "https://api.bilibili.com";

export const getUser = memo(async (uid: number) => {

});

export const getVideo = memo(async (username: string, repo: string) => {

});