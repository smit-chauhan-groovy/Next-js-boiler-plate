"use client";
import { Provider } from "react-redux";
import { store } from "./index";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistedStore = persistStore(store);

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        {children}
      </PersistGate>
    </Provider>
  );
}
