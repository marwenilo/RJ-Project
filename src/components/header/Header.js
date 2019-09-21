import React from "react";
import HeaderWrapper from "./headerWrapper";
import SubHeader from "./components/subHeader";
import TopHeader from "./components/topHeader";

const Header = () => {
  return (
    <HeaderWrapper>
      <TopHeader />
      <SubHeader />
    </HeaderWrapper>
  );
};

export default Header;
