import React from "react";
import { Link } from "react-router-dom";

const SeeAllButton = ({ text, whereTo = "" }) => {
    return (
      <div className="seeAllButton">
          <Link to={whereTo ? `/${whereTo}` : "/"}>
              <p>{text}</p>
          </Link>
      </div>
    );
};

export default SeeAllButton;
