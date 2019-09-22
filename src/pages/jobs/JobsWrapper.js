import styled from "styled-components";
const JobsWrapper = styled.div`
font-family:'Compact Display',sans-serif;
line-height: 26px;
width:100%;
color: #192A56;
.card {
    min-height: 70vh;
    position: relative
}
.bigCard{
    display: none;
    flex-direction column;
    position: relative;
    width: 60%;
    left: 40%;
}
.bigCard:hover {
    display: flex;       
}
.cardcomp{
    display:flex;
  
    &:hover  {
        .smallCardContainer{
            border-color:#716FB1;
            }
    }
}

.smallCardContainer{
    display: flex;
    justify-content:space-between;
    width: 37%;
    margin-left:3%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    height: 80px;
    position: absolute;
    box-sizing: border-box;
    border-left:transparent solid 3px;
    padding: 10px;
    &:hover + {
        .bigCard {
            display: flex;       
        }
    }
}
.smallCardLeft{
    display:flex;
    justify-content:space-between;
    flex-direction column;
    margin-left:15px;
    
}
.smallCardLeft h1{
    color:#716FB1;
    font-size:16px;
    padding: 5px 0;
}
.smallCardLeft h4{
    color: #192A56;
    font-size:14px;
}
.smallCardLeft p   {
    color: #192A56;
    font-size:14px;
}
.bigCardHeader{
    display:flex;
    justify-content:space-between;
    box-shadow: 0px 3px 6px #00000029;
}
.cardHeaderLeft img{
    max-width : 150px;
    max-heigh: 40px;
    
}
.cardHeaderLeft {
    display:flex;
    align-items : center;
    justify-content:center;
    width:500px;
}
.headerP{
    margin-left:30px;
}
.cardHeaderRight{
    display:flex;
    align-items : center;
    justify-content:center;
    flex-direction:column
    width:200px;
}
.colorP{
    color:#7F8FA6:
    font-size:16px;
}
.save {
    display: flex;
    justify-content: center;
    width : 70px;
}
.btn{
    width : 120px;
    background-color:#716FB1
    border:#716FB1
    color:white;
    margin-bottom:10px;
}
.jobHead{
    display: flex;
    justify-content:space-around;
    align-items:center;
    max-width: 60%;
    heigh:30px;
    margin:10px;
}
.filterDiv{
    display:flex;
}

.list{
    display:flex;
    justify-content:space-around;
    width : 500px;
    heigh : 50px;
    margin-left : 20px;
}
}
.list li a{
    color:#7F8FA6;
    font-size: 16px;
    paddin-left: 30px;
    text-decoration: none;
   
}
// .listContainer{
//     display:flex;
//     justify-content:space-around;
//     width : 200px;
//     heigh : 50px;
// }

.detail{
    border-bottom: solid 2px #716FB1;
}
.respo{
    padding: 20px 30px;
    line-height: 26px;
    text-align: left;
    width:70%
}

.respo h1{
    margin-bottom: 20px ;   
}
.repo p{
    color: #2F3640;
    font-size 16px;
}








`;

export default JobsWrapper;
