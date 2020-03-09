  
import { combineReducers } from 'redux';
import companyReducer from "./companyReducer"
import companyProfileReducer from './companyProfileReducer'
// import your reducers here

export default combineReducers({
//   put your reducers here1
companyReducer,companyProfileReducer
});