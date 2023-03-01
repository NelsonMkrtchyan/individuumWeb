import React from "react";
import BackgroundTitle from "./BackgroundTitle";
import Title from "./Title";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 20vw;
`;

const PageTitleSection = ({ title, backgroundTitle }) => {
    return (
      <Wrapper>
          <BackgroundTitle
            backgroundTitle={backgroundTitle ? backgroundTitle : title}
            direction="center"
            fontSize="10vw"
            style={{ top: "5vw" }}
          />
          <Title title={title} style={{
              paddingLeft: "20vw",
              fontSize: "2vw",
              fontStretch: "expanded",
              fontWeight: "bold"
          }} />
      </Wrapper>
    );
};

export default PageTitleSection;
