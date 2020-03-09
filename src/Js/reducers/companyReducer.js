import {image} from "../assets/index.js"
// import { SET_COMPANY_NAME_FILTER} from "../Constants/actions-types"
const nameInitialState = {
    companyList:[
        {
            img: `${image.adidas  }`,
            type:"Design company",
            address:"USA Inc 5055 N Greeley Ave Portland",
            name:"Adidas",
            descr:"Adidas AG is a multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories."
        },
        {
            img:`${image.facebook}`,
            type:"Social media company",
            address:"Menlo Park, CA 94025",
            name:"Facebook",
            descr:"Facebook, Inc. is an American social media and technology company based in Menlo Park, California."
        },
        {
            img:`${image.ooredoo}`,            
            type:"Telecommunications company",
            address:"West Bay Area, Doha, Qatar",
            name:"Ooredoo",
            descr:"Ooredoo provides mobile, wireless, wireline, and content services with market share in domestic and international telecommunication markets, and in business and residential markets."
        },
        {
            img:`${image.samsung}`,            
            type:"Multinational conglomerate company",
            address:"105 Challenger Rd.Ridgefield Park",
            name:"samsung",
            descr:"Samsung comprises numerous affiliated businesses, most of them united under the Samsung brand, and is the largest South Korean chaebol. Samsung was founded by Lee Byung-chul in 1938 as a trading company."
        },{
            img:`${image.orange}`,            
            type:"Telecommunications company",
            address:"Franz-Rennefeld-Weg 5. 40472Duesseldorf.",
            name:"orange",
            descr:"Orange S.A., formerly France Télécom S.A., is a French multinational telecommunications corporation. It has 266 million customers worldwide and employs 89,000 people in France, and 59,000 elsewhere."
        },
        {
 img:`${image.biat}`,            
 type:"Bank",
            address:"70-72 Av Habib Bourghiba, TUNIS.",
            name:"biat",
            descr:"Banque Internationale Arabe de Tunisie is the largest private sector bank in Tunisia. It is listed on the Tunisian Stock Exchange."
        },
        {
 img:`${image.oyez}`,            
        type:"Software company",
            address:"Rue de l'artisanat, Tunisia",
            name:"oyez",
            descr:"Oyez est une agence experte en commerce connecté. Nous mettons en œuvre les solutions technologiques et créatives dont les marques et distributeurs ont besoin pour accélérer la transformation digitale de leurs modèles de business sur le mobil"
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
        // case  SET_COMPANY_NAME_FILTER:
        //     const result = {
        //         ...state,
        //         companyList: action.payload.length > 0 
        //         ? state.companyList.filter( el => el.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())) 
        //         : nameInitialState.companyList
        //     }
            // console.log(result);s
        default:
            return state
    }
}
export default companyReducer