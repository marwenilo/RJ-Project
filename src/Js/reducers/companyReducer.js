import {image} from "../assets/index.js"
const nameInitialState = {
    companyList:[
        {
            img: `${image.adidas  }`,
            type:"Technology company",
            address:"1600 Amphitheatre Parkway",
            name:"Adidas",
            descr:"Google LLC is an American multinational technology company that specializes in Internet-related services and products"
        },
        {
            img:`${image.facebook}`,
            type:"Technology company",
            address:"1600 Amphitheatre Parkway",
            name:"Facebook",
            descr:"Google LLC is an American multinational technology company that specializes in Internet-related services and products"
        },
        {
            img:`${image.ooredoo}`,            type:"Technology company",
            address:"1600 Amphitheatre Parkway",
            name:"Ooredoo",
            descr:"Google LLC is an American multinational technology company that specializes in Internet-related services and products"
        },
        {
            img:`${image.samsung}`,            type:"Technology company",
            address:"1600 Amphitheatre Parkway",
            name:"samsung",
            descr:"Google LLC is an American multinational technology company that specializes in Internet-related services and products"
        },{
            img:`${image.orange}`,            type:"Technology company",
            address:"1600 Amphitheatre Parkway",
            name:"orange",
            descr:"Google LLC is an American multinational technology company that specializes in Internet-related services and products"
        },
        {
 img:`${image.biat}`,            type:"Technology company",
            address:"1600 Amphitheatre Parkway",
            name:"biat",
            descr:"Google LLC is an American multinational technology company that specializes in Internet-related services and products"
        },
        {
 img:`${image.oyez}`,            type:"Technology company",
            address:"1600 Amphitheatre Parkway",
            name:"oyez",
            descr:"Google LLC is an American multinational technology company that specializes in Internet-related services and products"
        },
        {
            img:"https://i.ya-webdesign.com/images/google-chrome-icon-png-2.png",
            type:"Technology company",
            address:"1600 Amphitheatre Parkway",
            name:"Google",
            descr:"Google LLC is an American multinational technology company that specializes in Internet-related services and products"
        }
    ]
}
 const companyReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        // case ACTION_TYPE_1:
        //     return state
        // case ACTION_TYPE_2:
        //     return state
        default:
            return state
    }
}
export default companyReducer