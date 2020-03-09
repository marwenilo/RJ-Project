import {image} from "../assets/index.js"
import { SET_COMPANY_NAME_FILTER} from "../Constants/actions-types"
const nameInitialState = {
    cardelements : [
        {post:" React Js Developer",
         adress:"Charguiya 2 Ariana, Tunisie",
         date:"4 days ago",
         img:"/assets/images/cardimg.png",
         save:"/assets/images/save.svg",
         logo:"/assets/images/oyez.jpg",
         name:"Oyez  ",
          button:"Test",
          responsibilities: "Write code in HTML, JavaScript, and CSS that meets the functional specifications Expert with React.js / React Native. Experience with Redux Collaborate with UI Designer to prototype the user experience during the design phase Develop unit tests using JavaScript testing frameworks Assist with build and deployment automation scripts Design REST APIs Troubleshoot and resolve performance issues in the web application. WF-RIA 3.x experience preferred.",
          highlights:"text here",
          company:"text here",
          reviews:"text here",
           },
        {post:" Angular Js Developer",
         adress:"La Marsa , Tunisie",
         date:"2 days ago",
         img:"/assets/images/cardimg.png",
         save:"/assets/images/save.svg",
         logo:"/assets/images/oyez.jpg",
         name:"Oyez  ",
          button:"Test",
          responsibilities: "Write code in HTML, JavaScript, and CSS that meets the functional specifications Expert with React.js / React Native. Experience with Redux Collaborate with UI Designer to prototype the user experience during the design phase Develop unit tests using JavaScript testing frameworks Assist with build and deployment automation scripts Design REST APIs Troubleshoot and resolve performance issues in the web application. WF-RIA 3.x experience preferred.",
          highlights:"text here",
          company:"text here",
          reviews:"text here",
           },
        {post:" Backend Developer",
         adress:"Manouba , Tunisie",
         date:"2 weeks ago",
         img:"/assets/images/cardimg.png",
         save:"/assets/images/save.svg",
         logo:"/assets/images/oyez.jpg",
         name:"Oyez  ",
          button:"Test",
          responsibilities: "Write code in HTML, JavaScript, and CSS that meets the functional specifications Expert with React.js / React Native. Experience with Redux Collaborate with UI Designer to prototype the user experience during the design phase Develop unit tests using JavaScript testing frameworks Assist with build and deployment automation scripts Design REST APIs Troubleshoot and resolve performance issues in the web application. WF-RIA 3.x experience preferred.",
          highlights:"text here",
          company:"text here",
          reviews:"text here",
           },
           
      ]

      
}
 const companyProfileReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        // case  SET_COMPANY_NAME_FILTER:
        //     return  state.companyList.filter(el=>el.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))
        // case ACTION_TYPE_2:
        //     return state
        default:
            return state
    }
}
export default companyProfileReducer