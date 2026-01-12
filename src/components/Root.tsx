import React from "react";
import { Provider } from "react-redux";
import { Store } from "../redux/store";
import { NotificationProvider } from "./NotificationProvider";
import { App } from "./App";

type Props = {
  store: Store;
};

export function Root({ store }: Props) {
  return (
    <Provider store={store}>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </Provider>
  );
}
