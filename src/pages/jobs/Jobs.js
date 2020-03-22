import React from "react";
import JobsWrapper from "./JobsWrapper";
import cardElements from "./CardElements";
import JobsCard from "./JobsCard";
const Jobs = () => (
  <JobsWrapper>
    <div className="jobHeadContainer">
      <div className="jobHead">
        <div className="filterDiv">
          <img src="/assets/images/filter.svg" alt="filter icon" />
          <p>Filters</p>
        </div>
        <p>Recent searches v</p>
        <p>React JS Jobs (9487 Jobs Found)</p>
      </div>
    </div>
    <JobsCard ele={cardElements} />
  </JobsWrapper>
);
export default Jobs;
