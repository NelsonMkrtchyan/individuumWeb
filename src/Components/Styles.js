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
export const StaffInfoBlock = styled.div.attrs((style) => ({
    ...style
}))`
  display: flex;
  flex-direction: row;

  ul {
    list-style-type: disc;
    margin-left: 30px
  }
`;
export const StaffInfoBlockLeft = styled.div.attrs((style) => ({
    ...style
}))`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;
export const StaffInfoBlockRight = styled.div.attrs((style) => ({
    ...style
}))`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

