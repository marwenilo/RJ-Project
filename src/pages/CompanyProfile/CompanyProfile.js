import React from 'react';
// import "./Style.css"
import CompanyProflesWrapper from './CompanyProflesWrapper'
import CompanyCard from "./components/CompanyCard"
import {companies} from "./components/data"

const CompanyProfile=()=> {

return (
<div className="marwen">
{
    companies.map((el,key)=>
        <CompanyCard key={key} img={el.img} descr={el.descr} name={el.name} />
    )
}

</div>
)
}
export default CompanyProfile









  