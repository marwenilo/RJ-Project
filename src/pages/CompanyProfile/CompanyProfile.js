import React from 'react'
import { connect } from 'react-redux';
import './profile.css'





const CompanyProfile = (props) => {
    
    const [companyLists] = props.companyList.filter(
  el => el.id === props.match.params.id
)
console.log(companyLists)
  return (

    <div className="test">
    
    <div className="wrappers">
<div className="wraps">
  
  <div className="arrow animated bounce"></div>
  
  <header className="header">   
    <div className="logo">
    <img src={companyLists.img} alt="" className="logoImg" /></div>
    <nav className="navv">
      <ul className="ull">
        <li className="lii"><p>{companyLists.name}</p></li>
        <li className="lii"><p>sdfsqdqsd</p></li>
        <li className="lii"><p>sdfsqdqsd</p></li>
      </ul>
    </nav>
  </header>
  
  
  <section className="transparent">
    <div className="headline"></div>
    <div className="texts"></div>
    <div className="texts"></div>
    <div className="button"></div>
  </section> 
  <section className="cards">
    <div className="cardss">
      <img src="https://imgplaceholder.com/500x300/transparent/ddd/ion-image" alt=""/>
      <div className="content">
        <div className="headline">ZAERTYUUIUYTR</div>
        <div className="texts">ERTYJUI</div>
        <div className="texts">ERTTYRERZ</div>
        <div className="button">BV</div>
      </div>
    </div>
    <div className="cardss">
      <img src="https://imgplaceholder.com/500x300/transparent/ddd/ion-image" alt="" className="img"/>
      <div className="content">
        <div className="headline">QSDVN??.NB</div>
        <div className="texts">qsdqsdqsdqsd</div>
        <div className="texts">qsdqsdqsdqsd</div>
        <div className="button">bv</div>
      </div>
    </div>
    <div className="cardss">
      <img src="https://imgplaceholder.com/500x300/transparent/ddd/ion-image" alt="" className="img"/>
      <div className="content">
        <div className="headline">sqdfhj;gfd</div>
        <div className="texts">qsdqsdqsdq</div>
        <div className="texts">qsdqsdqsdqsdqs</div>
        <div className="button">bv</div>
      </div>
    </div>
  </section>
  
  <section className="contentbox">
    <div className="headline">qsdsdfghj,hjgfds</div>
    <div className="texts">qsdqsdqsd</div>
    <div className="texts">qsdqsdqsdqs</div>
    <div className="texts">qsdqsdqsdqs</div>
    <div className="button"></div>
  </section>
  
</div>
</div>
  
    </div>

    )
    }

    const mapStateToProps = state => ({
      companyList: state.companyReducer.companyList,
    
      });
    export default connect(mapStateToProps,null)(CompanyProfile)

