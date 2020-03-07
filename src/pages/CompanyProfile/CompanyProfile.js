import React from 'react';
import { connect } from 'react-redux';
// import "./Style.css"
// import CompanyProflesWrapper from './CompanyProflesWrapper'
import CompanyCard from "./components/CompanyCard"


const CompanyProfile=({companyList})=> {

return (
<div className="companyContainer">
{
    companyList.map((el,key)=>
        <CompanyCard key={key} img={el.img} descr={el.descr} name={el.name} type={el.type} address={el.address} />
    )
}

</div>
)
}

const mapStateToProps = state => ({
    companyList: state.companyReducer.companyList,

  });
  export default connect(mapStateToProps)(CompanyProfile);









  