import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import Dashboard from "./Dashboard";

const store = createStore(reducers);

const Index = () => {
  return (
    <div className="indxe">
      <Provider store={store}>
        <Dashboard />
      </Provider>
      ,
    </div>
  );
};

export default Index;
