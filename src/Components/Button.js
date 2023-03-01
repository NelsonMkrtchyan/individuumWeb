import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomButton = styled.div.attrs((style) => ({
    ...style
}))`
  width: fit-content;
  color: #777FB0;
  padding-bottom: 5px;
  border-bottom: 3px solid #777FB0;

  p {
    font-weight: bold;
    font-size: 1.3vw;
  }

  a {
    color: #777FB0;
  }

  &:hover {
    cursor: pointer;
    border-color: #774C91;

    a {
      color: #774C91;
      border-color: #774C91;
    }
  }
`;
const Button = ({ text, whereTo = "", style = {} }) => {
    return (
      <CustomButton style={{ ...style }}>
          <Link to={whereTo ? `/${whereTo}` : "/"}>
              <p>{text}</p>
          </Link>
      </CustomButton>
    );
};

export default Button;
