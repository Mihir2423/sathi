import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import NavigationProvider from "./navigation/Provider";

const Root = () => {
  return (
    <Provider store={store}>
      <NavigationProvider />
    </Provider>
  );
};

export default Root;
