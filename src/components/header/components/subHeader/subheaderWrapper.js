import styled from "styled-components";

const SubheaderWrapper = styled.div`
  box-shadow: 0 -2px 3px #00000029;
  nav {
    border-bottom: 1px solid #dcdde1;
    background: #fff;
    margin-top: 0px;
    padding: 14px 111px;
    .nav-item {
      &:hover {
        &:after {
          background: #716fb1;
          content: "";
          height: 4px;
          width: 100%;
          position: absolute;
          bottom: -15px;
        }
      }
    }
  }
`;

export default SubheaderWrapper;
