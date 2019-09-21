import styled from "styled-components";

const TopHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 9px 0;
  box-shadow: 0px 3px 6px #00000029;
  background: #fff;
  .case3 {
    justify-content: space-between;
  }
  input {
    border-color: #dcdde1;
    border-radius: 0;
    margin-right: 20px;
    padding-left: 32px;
    &.case1 {
      background: url("assets/images/search.svg") no-repeat;
      background-position: 3% center;
    }
    &.case2 {
      background: url("assets/images/pen.svg") no-repeat;
      background-position: 3% center;
    }
  }
  .search_btn {
    width: 120px;
    background: #716fb1;
    border: 0;
    border-radius: 0;
    &:active {
      background: #716fb1 !important;
      border: 0 !important;
    }
    &:focus {
      box-shadow: none !important;
    }
  }
  .account {
    background: none;
    border: 0;
    display: flex;
    justify-content: center;
    color: #7f8fa6;
    font-size: 16px;
    img {
      margin-right: 10px;
    }
    &:active {
      border: 0 !important;
      background: none !important;
    }
    &:focus {
      box-shadow: none !important;
      color: #7f8fa6 !important;
    }
  }
`;

export default TopHeaderWrapper;
