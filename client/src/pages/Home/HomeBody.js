/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components
import "./Home.css"

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <div >
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand homeStyle ">
            <img
              alt="..."
              className="n-logo"
              src={require("../../assets/img/now-logo.png")}
            ></img>
          <h1 className="h1-seo">Try MusicIn For free </h1>
            <h3>Listen to millions of songs on demand without ads and charges.</h3>
          </div>
        
        </Container>
      </div>  
    </div>
  );
}

export default IndexHeader;
