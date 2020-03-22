import React from "react";
const Card = ({ ele }) => {
  return (
    <div className="card">
      {ele.map((el, i) => (
        <div className="cardcomp">
          <div className="smallCardContainer" style={{ top: `${i * 80}px` }}>
            <div className="smallCardLeft">
              <h1>{el.post}</h1>
              <h4>{el.adress}</h4>
            </div>
            <p>{el.date}</p>
          </div>
          <div className="bigCard">
            <div>
              <img src={el.img} alt="#" />
              <div className="bigCardHeader">
                <div className="cardHeaderLeft">
                  <img src={el.logo} alt="#" />
                  <div className="headerP">
                    <p>
                      {el.post} at {el.name}
                    </p>
                    <p>{el.adress}</p>
                  </div>
                </div>
                <div className="cardHeaderRight">
                  <button className="btn">Apply</button>
                  <div className="save">
                    <img src="/assets/images/save.svg" alt="save icon" />
                    <p className="colorP">save</p>
                  </div>
                </div>
              </div>
            </div>

            {/* .................. */}
            <div className="bigCardFooter">
              <div className="listContainer">
                <ul className="list">
                  <li>
                    <a href="google.com" className="detail">
                      Detail
                    </a>
                  </li>
                  <li>
                    <a href="google.com">Highlights</a>
                  </li>
                  <li>
                    <a href="google.com">Company</a>
                  </li>
                  <li>
                    <a href="google.com">Reviews</a>
                  </li>
                </ul>
              </div>
              <div className="respo">
                <h1>Responsibilities: </h1>
                <p>{el.responsibilities}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;
