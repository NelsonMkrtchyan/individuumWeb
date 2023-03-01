import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../../../Components/Title";


const CardWrapper = styled.div`
  position: relative;

  width: 20vw;
  height: 30vw;
  margin: 2vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`;
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  height: 30vw;
  background-color: #E9F0FE;
  border-radius: 2vw;
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;

  ${CardWrapper}:hover & {
    background-color: ${(prop) => prop.isSwiper ? "#F1D163" : "#fff"};
  }
`;
const Info = styled.div`
  flex: 1;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
`;
const ImageBox = styled.div.attrs((style) => ({
    ...style
}))`
  height: 70%;
  width: 90%;
  margin: 1vw 0 0 0;
`;
const Image = styled.img.attrs((style) => ({
    ...style,
    alt: "card image"
}))`
  border-radius: 2vw;
  object-fit: cover;
`;

const ColorBox = styled.div.attrs((style) => ({
    ...style
}))`
  width: 20vw;
  height: 30vw;
  border-radius: 3vw;
  background-color: #777FB0;
  position: absolute;
  bottom: 2vw;
  left: 2vw;

  ${CardWrapper}:hover & {
    background-color: #F1D163;
  }
`;

const UserCard = ({ id, name, position, imageSrc, isSwiper }) => {
    return (
      <>
          <CardWrapper>
              {!isSwiper && <ColorBox />}
              <Link to={`/dentists/${id}`}>
                  <Content isSwiper={isSwiper}>
                      <ImageBox>
                          <Image src={imageSrc} />
                      </ImageBox>
                      <Info>
                          <Title title={name} style={{
                              fontSize: "1vw",
                              color: "#4D83F1"
                          }} />
                          <p style={{ color: "black" }}> {position} </p>
                      </Info>
                  </Content>
              </Link>
          </CardWrapper>
      </>
    );
};

export default UserCard;
