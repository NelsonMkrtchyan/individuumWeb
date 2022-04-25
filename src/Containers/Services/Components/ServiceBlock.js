import React from "react";
import { Link } from "react-router-dom";

const ServiceBlock = ({ logo, title, id }) => {
    return (
      <div className="serviceBlockWrapper">
          <Link to={`/services/${id}`}>
              <div className="serviceBlockContainer">
                  <div className="serviceBlockLogo" style={{ backgroundImage: `url("${logo}")` }} />
                  <div className="serviceBlockTitle">
                      <p>
                          {title}
                      </p>
                  </div>
              </div>
          </Link>
      </div>
    );
};

export default ServiceBlock;
