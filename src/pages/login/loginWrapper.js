import styled from "styled-components";

const loginWrapper = styled.div`
  background: #ffffff;
  .s-container {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
  .links {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
    h1 {
      text-align: center;
    }
    span {
      width: 130px;
      border: 0.5px solid #2f3640;
      height: 1px;
      margin: 0 auto;
      margin-bottom: 10px;
    }
  }
  .s-titre {
    border-bottom-width: 10%;
  }
  .facebook {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
    color: white;
    background-color: #3b5998;
    padding: 0.3%;
  }
  .title-container {
    padding-top: 40px;
    margin-bottom: 50px;
    text-align: center;
  }
  .title {
    color: #2f3640;
    font-size: 35px;
    font-weight: 400;
    padding-bottom: 20px;
  }
  .sub-title {
    font-size: 20px;
    font-weight: 200;
  }
  span {
    font-weight: 500;
  }
  a {
    font-weight: 500;
    color: #716fb1;
  }
  .paragraphe {
    padding-bottom: 5px;
    padding-top: 12px;
    font-size: 16px;
  }
  .ss-titre {
    border: 1px solid #dcdde1;
    height: 35px;
    padding-left: 15px;
  }
  .btn-register {
    margin-top: 15px;
    height: 40px;
    background: #716fb1;
    color: white;
    border: none;
    margin-bottom: 40px;
  }
  .enregistrer {
    justify-content: space-around;
    width: 190px;
    height: 30px;
    margin: 0 auto;
    background-color: #716fb1;
  }
  .btn-google {
    margin-bottom: 20px;
    button {
      width: 300px;
      background-color: #4285f4 !important;
      color: white !important;
    }
    span {
      border: none;
      padding: 0 !important;
    }
  }
`;

export default loginWrapper;
