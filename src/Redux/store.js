import { legacy_createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk";

import { reducer as furniture } from "./furniture/reducer";
import { reducerCart as dataCart } from "./cart/reducer.cart";
import { reducerAuth as userAuth } from "./userauth/reducer.userauth";
import {reducer as electronics} from "./electronics/reducer";
import {reducer as appliances} from "./appliances/reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    appliances,
    electronics,
    furniture,
    dataCart,
    userAuth
})

const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)


export default store;