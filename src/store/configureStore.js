
import {createStore, compose, applyMiddleware} from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native

import thunk from "redux-thunk";
import rootReducer from "../reducers";

// cant persist moment.js dates... Should use strings in reducers or program the persist to accept moment.js
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["categories"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStoreProd(initialState) {
    const middlewares = [
        thunk,
    ];

    const store = createStore(persistedReducer, initialState, compose(
        applyMiddleware(...middlewares)
        )
    );

    return {store, persistor: persistStore(store)};
}


function configureStoreDev(initialState) {
    const middlewares = [
        reduxImmutableStateInvariant(),
        thunk,
    ];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    const store = createStore(persistedReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares)
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("../reducers", () => {
            const nextReducer = require("../reducers").default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    return {store, persistor: persistStore(store)};
}

const configureStore = process.env.NODE_ENV === "production" ? configureStoreProd : configureStoreDev;

export default configureStore;
