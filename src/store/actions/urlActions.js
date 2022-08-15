// actions to set url

import { SET_URL } from "./types";

export const urlSet = (url) => ({
    type: SET_URL,
    payload: url,
});
