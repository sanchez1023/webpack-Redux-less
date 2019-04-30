import React, { Component } from "react";

import { BrowserRouter, Route, Link } from 'react-router-dom'
import AppRouter from "./Approuter";
import { Provider } from 'react-redux'
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>

    )
  }
}
export default App;