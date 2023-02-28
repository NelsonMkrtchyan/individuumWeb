import React, { useEffect, useState } from "react";
import styled from "styled-components";


const Container = styled.div.attrs((style) => ({
    ...style
}))`
  position: absolute;
  width: 100%;

  p {
    color: #000000;
    opacity: 4%;
  }
`;

const BackgroundTitle = ({
    backgroundTitle,
    direction,
    fontSize,
    position = "absolute",
    style = {}
}) => {
    const [side, setSide] = useState({});

    useEffect(() => {
        switch (direction) {
        case "center":
            setSide({
                textAlign: "center",
                fontSize: fontSize,
                position: position
            });
            break;
        case "end":
            setSide({
                textAlign: "end",
                fontSize: fontSize,
                position: position
            });
            break;
        default:
            setSide({
                textAlign: "flex-start",
                fontSize: fontSize,
                position: position
            });
            break;
        }
    }, [direction, fontSize, position]);

    return (
      <Container style={{ ...side, ...style }}>
          <p>{backgroundTitle}</p>
      </Container>
    );
};

export default BackgroundTitle;
