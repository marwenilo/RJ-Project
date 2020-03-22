import React, { Component } from "react";
import { connect } from "react-redux";
import "./components/Style.css";
// import CompanyProflesWrapper from './CompanyProflesWrapper'
import CompanyCard from "./components/CompanyCard";

class CompanyList extends Component {
  state = {
    name: ""
  };
  filterName = e => {
    this.setState({
      name: e.target.value
    });
  };
  render() {
    return (
      <div className="ConatinerWrapper">
        <input
          placeholder="Search for Company"
          type="text"
          className=" case"
          onChange={this.filterName}
        />

        <div className="companyContainer">
          {this.props.companyList
            .filter(el => el.name.toLowerCase().includes(this.state.name))
            .map((el, key) => (
              <CompanyCard
                key={key}
                img={el.img}
                descr={el.descr}
                name={el.name}
                type={el.type}
                address={el.address}
                id={el.id}
              />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  companyList: state.companyReducer.companyList
});

export default connect(mapStateToProps, null)(CompanyList);
