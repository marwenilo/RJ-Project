import styled from 'styled-components';
//linear-gradient(rgba(77, 74, 74, 0.1), rgba(029, 31, 0, 0.39)),
const HomeWrapper = styled.div`
font-family:'Compact Display',sans-serif;
margin-top:30px;
 line-height: 26px;
width:100%;
color: #192A56;
border-box: box-sizing;
.homeContainer{
    background-size: 100%;
   background-image: linear-gradient(rgba(77, 74, 74, 0.1), rgba(029, 31, 0, 0.39)),url(/assets/images/depositphotos.jpg);
   background-repeat: no-repeat;
}
.intro{
    padding-top:50px;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
        h1{
        padding-bottom:30px;
        font-size:51px;


    }


.introDescri{
    background: rgba(255, 255, 255, 0.5);
    padding: 20px;
    line-height: 26px;
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
        max-width: 50%;
        font-size:20px;
        &:hover{
        color: #60ae32;
        
      }
    
}
.logoRight{
    color:#60AE32;
    margin-left:3px;
    font-size:21px;

     }
 .logoJob{
     color:#716FB1
     margin-right:3px;
     font-size:21px;
     font-weight:bold;
  
              }
}
.aaa{
    margin-top: 100px;
}
.cardContainer{
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap: wrap;
    max-width: 700px;
    .card{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
        background: #f4f4f4;
        border-radius: 0 15px;
        padding: 20px;
        height: 100%;
        font-size: 15px;
        width: 256.656px;
        margin: 20px 20px 10px 20px;
        height:151px;
        color: #333;
    }
    .title {
        font-weight: bold;
    }
    .number {
        color: #70bf2c;
        font-size: 40px;
        margin: 20px 0;
    }
}
.hiringContainer{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    background-color: white;
    margin-top:20px;
}
.hiring{
    display:flex;
    justify-content:space-between;
        align-items:center;
        flex-direction: column;
        max-width: 700px;
        margin-top: 30px
        .hiringImg {
            display:flex;
            justify-content:center;
            align-items:center;
        flex-wrap: wrap;
        
        }
       
}
.hiringImg img{
    
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    margin: 0 40px;
    max-width: 140px;
height: auto;
&:hover  {
    filter: grayscale(0);
    -webkit-filter: grayscale(0);
    -moz-filter: grayscale(0);
    -ms-filter: grayscale(0);
    -o-filter: grayscale(0);
}
}
 .hiring h1{
            padding-bottom:30px;
            font-size:51px;
    
    
        }
.storyContainer{
     display:flex;
    justify-content:space-between;
        align-items:center;
        flex-direction: column;
background-color:white;
}
.storyContainer h1 {
    padding:50px 0 0;
        font-size:51px;

}
.stories{
    display:flex;
    justify-content:space-between;
        align-items:center;
        
        margin: 50px;
        
        flex-wrap: wrap;
}
.story{
    display:flex;
    justify-content:center;
        align-items:center;
        flex-direction: column;
        max-width: 300px;
        color: #192A56;
        margin: 0 30px;
}
.story img{
      border-radius: 50%;
      width:250px;
      height:250px;
}
.story h3{
    display: flex;
    align-text:center;
   color: #45516e;
    padding: 10px 20px;
}
.story h4{
    #7a7e86;
    padding: 10px 0;
    font-size:14px
}
.story h2{
   color: #7a7e86;
   margin-top: 30px;
    font-size:30px
}

`;

export default HomeWrapper;
