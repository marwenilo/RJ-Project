import styled from 'styled-components';

const footerWrapper = styled.div`

font-family: 'sf_compact_displayregular' ;
  width:100%;
  .logo{
    display:flex;
  }
  .logoRight{
color:#60AE32
font-size:39px
  }
  .logoJob{
    color:#716FB1
    font-size:39px
    font-weight:bold;
      }
  .footerHead{
    background: #F5F6FA;
    display: flex;
   
    justify-content:space-between;
    
    padding: 39px 200px 39px 50px;
  }
  .footerList{
    color: #192A56;
    
    font-size:16px;
    font-family:'Compact Display';
    
    height: 152px;
    ul li a {
      color: #192A56;
      text-decoration: none;
      &:hover{
        color: #60ae32;
      }
      
    }
  }
  .footerList h4 {
   
    font-size: 16px;
    margin-bottom:10px;
  }
  .footerFoot{
    font-size:16px;
    display: flex;
    justify-content:center;
  padding:30px;
    align-items:center;
    flex-direction: column;

  }
  .footerFoot h5{
    color: #192A56;
    font-size:16px;
  }
  .images{
    padding-top:10px;
    display:flex;
    justify-content:space-between;
    width:156px;
    img {
    
      display:flex;
      justify-content:space-between;
    }

  }
  

 

`;



export default footerWrapper;
