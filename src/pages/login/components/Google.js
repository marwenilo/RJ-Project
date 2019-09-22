/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { GoogleLogin } from "react-google-login";
import { func } from "prop-types";
import cookie from "react-cookies";

const Google = () => {
  const responseGoogle = async response => {
    cookie.save("Email", response.profileObj.email);
    cookie.save("Name", response.profileObj.name);
    cookie.save("Token", response.tokenId);
    cookie.save("Picture", response.profileObj.imageUrl);
  };
  return (
    <div className="btn-google">
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Sign up with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

Google.propTypes = {
  setStep: func
};

export default Google;
