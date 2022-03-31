import * as Redux from "redux";
import logger from 'redux-logger';

import rootReducer from "./root-reducer";

const middleware = [logger]

const store = Redux.createStore(rootReducer, Redux.applyMiddleware(...middleware))

export default store;