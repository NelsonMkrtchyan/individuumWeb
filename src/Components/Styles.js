import styled from "styled-components";

export const Container = styled.div.attrs((style) => ({
    ...style
}))`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  width: 90%;
  margin: 5vw auto;
`;