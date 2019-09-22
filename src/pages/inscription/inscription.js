import React from 'react';
import InscriptionWrapper from './inscriptionWrapper';

const Inscription = () => (
  <InscriptionWrapper>

      <h1 className="title">Create your Account</h1>
<div className="title-container">
    <div className="s-container">
    <p className="paragraphe">First Name</p>
      <input
        type="text"
        className="ss-titre"
        placeholder="First Name"/>
        <p className="paragraphe">Last Name</p>
      <input
        type="text"
        className="ss-titre"
        placeholder="Last Name"/>
        

      <p className="paragraphe">Email</p>
      <input
        type="text"
        className="ss-titre"
        placeholder="Username@example.example"
      />
      <p className="paragraphe">Password</p>
      <input type="text" className="ss-titre" placeholder="Password" />
      <p className="paragraphe">Role</p>
      <select className="ss-titre">
        <option value="Recruter">Recruter</option>
        <option value="Condidat">Condidat</option>
      </select>  
        
        <p className="paragraphe">Numero</p>
      <input
        type="text"
        className="ss-titre"
        placeholder="Numero "/>
      <button className="btn-register">Register</button>
    </div>
    </div>
  </InscriptionWrapper>
);
export default Inscription;
