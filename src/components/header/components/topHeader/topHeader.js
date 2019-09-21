import React from "react";
import TopHeaderWrapper from "./topheaderWrapper";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const TopHeader = () => {
  return (
    <TopHeaderWrapper>
      <img src="/assets/images/logo.svg" alt="" />
      <navbar className="justify-content-between">
        <Form inline className="case3">
          <FormControl
            type="text"
            placeholder="Search for job"
            className=" case1"
          />
          <FormControl
            type="text"
            placeholder="localisation"
            className=" case2"
          />
          <Button type="submit" className="search_btn">
            Search
          </Button>
          <Button type="submit" className="account">
            <img src="assets/images/user.svg" alt="" />
            Account
          </Button>
        </Form>
      </navbar>
    </TopHeaderWrapper>
  );
};

export default TopHeader;
