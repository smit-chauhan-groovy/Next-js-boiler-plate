import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { thunk } from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const isServer = typeof window === "undefined";
const storageFallback = isServer
  ? createNoopStorage()
  : createWebStorage("local");

const persistConfig = {
  key: "root",
  storage: storageFallback,
  timeout: 100000,
  stateReconciler: autoMergeLevel2,
};

const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);

function makeStore() {
  const store = createStore(persistedReducer, applyMiddleware(...middleware));
  const persistor = persistStore(store);
  return { store, persistor };
}

let storeInstance;

export function getStore() {
  if (isServer) {
    return makeStore();
  }
  if (!storeInstance) {
    storeInstance = makeStore();
  }
  return storeInstance;
}
