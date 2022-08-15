// actions for changing the mode

import { MODE } from "./types";

export const changeMode = (mode) => ({
    type: MODE,
    payload: mode,
});
