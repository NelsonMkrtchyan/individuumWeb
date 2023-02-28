import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, whereTo = "", style = {} }) => {
    return (
      <div className="button" style={{ ...style }}>
          <Link to={whereTo ? `/${whereTo}` : "/"}>
              <p>{text}</p>
          </Link>
      </div>
    );
};

export default Button;
