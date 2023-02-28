import React from "react";
import Button from "../Button";
import { useTranslation } from "react-i18next";
import BackgroundTitle from "../BackgroundTitle";
import Title from "../Title";
import styled from "styled-components";
import { useAboutUsData } from "../../Hooks/useAboutUsData";

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  margin-top: 5vw;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`;
const Right = styled.div`
  flex: 1;
  height: 57vw;
  display: flex;
  justify-content: flex-end;
`;
const LeftContainer = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Content = styled.div`
  line-height: 1.5vw;
  color: #707070;
`;
export const YellowBox = styled.div.attrs((style) => ({
    ...style
}))`
  height: 47vw;
  width: 36vw;
  border-radius: 3vw;
  background-color: #ECBE21;
`;
export const ImageBox = styled.div.attrs((style) => ({
    ...style
}))`
  height: 47vw;
  width: 36vw;
  position: absolute;
`;
export const Image = styled.img.attrs((style) => ({
    ...style,
    alt: "About us Image"
}))`
  height: 100%;
  width: auto;
  border-radius: 3vw;
`;


const AboutUsComponent = () => {
    const { t } = useTranslation(["navbar", "common"]);
    const aboutUsData = useAboutUsData();
    return (
      <Container>
          <Left>
              <LeftContainer>
                  <Title title={t("navbar:aboutUs")} />
                  <Content>
                      {aboutUsData}
                  </Content>
                  <Button
                    text={t("common:seeAll")}
                    whereTo="aboutUs"
                    style={{ position: "absolute", bottom: 0 }}
                  />
              </LeftContainer>
          </Left>
          <Right>
              <YellowBox style={{ margin: "0 2vw 0 0" }} />
              <ImageBox style={{
                  right: "8vw",
                  top: "10vw"
              }}>
                  <Image src={require("../../Assets/Images/AboutUsComponent.jpeg")} />
              </ImageBox>
          </Right>
          <BackgroundTitle
            backgroundTitle={t("navbar:aboutUs")}
            fontSize="12vw"
            style={{ top: 0 }}
          />
      </Container>
    );
};

export default AboutUsComponent;
