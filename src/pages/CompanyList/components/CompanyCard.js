import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const CompanyCard = ({ img, name, descr, type, address, id }) => {
  return (
    <Link className="companyLink" to={`/compnay-profile/${id}`}>
      <div className="row">
        <div className="example-1 card">
          <div className="wrapper">
            <img src={img} alt="img" className="w" />

            <div className="data">
              <div className="content">
                <h2 className="author">
                  <strong>{name}</strong>
                </h2>
                <h3 className="author">{type}</h3>
                <h1 className="title">
                  <a href="google.com">{address}</a>
                </h1>
                <p className="text">{descr}</p>
              </div>
              <input type="checkbox" id="show-menu" />
              <ul className="menu-content">
                <li>
                  <a href="google.com" className="fa fa-bookmark-o"></a>
                </li>
                <li>
                  <a href="google.com" className="fa fa-heart-o">
                    <span>47</span>
                  </a>
                </li>
                <li>
                  <a href="google.com" className="fa fa-comment-o">
                    <span>8</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
const mapStateToProps = state => ({
  companyList: state.companyReducer.companyList
});

export default connect(mapStateToProps, null)(CompanyCard);
