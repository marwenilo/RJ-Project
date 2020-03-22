import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./Js/store";
import asyncComponent from "./components/hoc/Loading";

const AsyncComp = asyncComponent(() => {
  return import("./route");
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: true }), 5000);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AsyncComp />
        </div>
      </Provider>
    );
  }
}
export default App;
