import React, { Component } from "react";
import "./Loading.css";
const asyncComponent = importComponent => {
  return class extends Component {
    state = {
      component: null
    };

    componentDidMount() {
      importComponent().then(cmp => {
        setTimeout(() => this.setState({ component: cmp.default }), 2002);
      });
    }

    render() {
      const C = this.state.component;

      return C ? (
        <C {...this.props} />
      ) : (
        <div className="bodyLoading">
          <div className="demo">
            <div className="circle">
              <div className="inner"></div>
            </div>
            <div className="circle">
              <div className="inner"></div>
            </div>
            <div className="circle">
              <div className="inner"></div>
            </div>
            <div className="circle">
              <div className="inner"></div>
            </div>
            <div className="circle">
              <div className="inner"></div>
            </div>
          </div>
          <a className="siteLoading" href="http://google.com">RightJob.com</a>
        </div>
      );
    }
  };
};

export default asyncComponent;
