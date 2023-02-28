import React from "react";
import styled from "styled-components";

const TitleComp = styled.div.attrs((style) => ({
    ...style
}))`
  font-size: 1.5vw;
  font-weight: bold;
  padding-bottom: 20px;
`;
const Title = ({ title, style }) => {
    return (
      <TitleComp style={style}>
          <p>{title}</p>
      </TitleComp>
    );
};
export default Title;
