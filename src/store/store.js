import { createStore } from "redux";
import loadReducer from "reducers/loadReducer";

function configureStore(state = {}) {
    return createStore(loadReducer, state);
}

export default configureStore;
