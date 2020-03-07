// import {
    //here import the actions types

//   } from '../Constants/actions-types'; 
import { SET_COMPANY_NAME_FILTER} from "../Constants/actions-types"




  // those are exp of actions fucntions
  export const searchCompany = payload => ({
    type: SET_COMPANY_NAME_FILTER,
    payload
  });
//   export const addNewMovie = payload => ({
//     type: ADD_MOVIE,
//     payload: {
//       ...payload,
//       id: Date.now()
//     }
//   });