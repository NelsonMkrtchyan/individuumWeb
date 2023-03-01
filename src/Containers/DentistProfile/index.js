import React from "react";
import { useParams } from "react-router-dom";
import { getDentistsInfo } from "../../Data/dentistsInfo";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Components/Footer";
import GalleryComponent from "../../Components/GalleryComponent";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Title from "../../Components/Title";
import BackgroundTitle from "../../Components/BackgroundTitle";
import Button from "../../Components/Button";


const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  margin: 5vw auto;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Right = styled.div`
  flex: 1;
  height: 57vw;
  display: flex;
`;
const LeftContainer = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;
const Content = styled.div`
  line-height: 1.5vw;
  color: #707070;
`;
const BlueBox = styled.div.attrs((style) => ({
    ...style
}))`
  height: 47vw;
  width: 36vw;
  border-radius: 3vw;
  background-color: #777FB0;
`;
const ImageBox = styled.div.attrs((style) => ({
    ...style
}))`
  height: 47vw;
  width: 36vw;
  margin-left: 5vw;
`;
const Image = styled.img.attrs((style) => ({
    ...style,
    alt: "About us Image"
}))`
  height: 100%;
  width: 36vw;
  max-width: 36vw;
  border-radius: 3vw;
  object-fit: cover;
`;


const DentistProfile = () => {
    const { t } = useTranslation(["navbar", "common"]);
    const { dentistId } = useParams();
    const dentistsInfo = getDentistsInfo();
    const currentDentist = dentistsInfo.filter(
      (dentist) => dentist.id.toString() === dentistId
    )[0];
    return (
      <>
          <NavigationBar />
          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <Container>
              <Left>
                  <LeftContainer>
                      <Title title={`${currentDentist.firstName} ${currentDentist.secondName}`} style={{
                          color: "#4D83F1",
                          fontSize: "2vw",
                          fontWeight: "500"
                      }} />
                      <Content>
                          <p>
                              {currentDentist.position}
                          </p>
                          {/*<p>*/}
                          {/*    {currentDentist.description}*/}
                          {/*</p>*/}
                      </Content>
                  </LeftContainer>
                  <Button
                    text={t("navbar:dentists")}
                    whereTo="dentists"
                    style={{ position: "relative", alignSelf: "start", marginLeft: "5vw" }}
                  />
              </Left>
              <Right>
                  <ImageBox style={{ zIndex: "100" }}>
                      <Image src={currentDentist.imageSrc} />
                  </ImageBox>
                  <BlueBox style={{
                      margin: "0 2vw 0 0",
                      position: "absolute",
                      top: "10vw",
                      right: "3vw"
                  }} />
              </Right>
              <BackgroundTitle
                backgroundTitle={currentDentist.positionBackground}
                fontSize="10vw"
                style={{ top: 0, left: "5vw" }}
              />
          </Container>
          <GalleryComponent
            title={t("common:works")}
            backgroundTitle={t("common:works")}
          />
          <Footer />
      </>
    );
};

export default DentistProfile;
