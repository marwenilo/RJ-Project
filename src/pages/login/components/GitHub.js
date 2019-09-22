/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import cookie from "react-cookies";
import { func } from "prop-types";
import styled from "styled-components";

const LinkGithub = styled.button`
  background-color: #0000008a;
  display: inline-flex;
  align-items: center;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.24) 0px 0px 1px 0px;
  width: 300px;
  height: 42px;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  background-image: url("/assets/images/GitHub.png");
  background-size: 30px 30px;
  background-position: left;
  background-repeat: no-repeat;
  cursor: pointer;
  margin-bottom: 20px;
  padding-left: 90px;
`;

class GitHub extends Component {
  componentDidMount() {
    const oauthScript = document.createElement("script");
    oauthScript.src = process.env.REACT_APP_OAUTHSCRIPT_SRC;
    document.body.appendChild(oauthScript);
  }
  handleClick = (e, updateNetworkStatus) => {
    e.preventDefault();
    window.OAuth.initialize(process.env.REACT_APP_OAUTH_GITHUB);
    window.OAuth.popup("github").then(provider => {
      provider.me().then(data => {
        cookie.save("Email", data.email);
        cookie.save("Name", data.alias);
        cookie.save("Picture", data.avatar);
      });
    });
  };
  render() {
    return (
      <div>
        <a href="">
          <LinkGithub onClick={e => this.handleClick(e)}>
            Continue with GitHub
          </LinkGithub>
        </a>
      </div>
    );
  }
}
GitHub.propTypes = {
  setStep: func
};

export default GitHub;
