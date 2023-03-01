import React from "react";
import styled from "styled-components";
import Title from "../Title";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const Circle = styled.div`
  height: 10vw;
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50vw;
  background-color: ${(prop) => prop.color};
  opacity: 0.7;
`;

export const Icon = styled.img.attrs((style) => ({
    ...style,
    alt: "Principal icon"
}))`
  width: 100%;
`;

const PrincipalsItem = ({ title, color, icon }) => {
    return (
      <Wrapper>
          <Circle color={color}>
              <Icon src={icon} />
          </Circle>
          <Title
            title={title}
            style={{
                textAlign: "center",
                fontWeight: "500",
                fontSize: "1vw",
                paddingTop: "1vw"
            }} />
      </Wrapper>
    );
};

export default PrincipalsItem;
