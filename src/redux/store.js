import { createStore, applyMidddleware } from "redux";
import logger from 'redux-logger';

import rootReducer from "./root-reducer";

const middleware = [logger]

const store = createStore(rootReducer, applyMidddleware(...middleware))

export default store;