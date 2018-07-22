import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import router from "./router";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./ducks/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Header />
            {router}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
