import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import Footer from "../../Components/Footer";
import GalleryComponent from "../../Components/GalleryComponent";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Title from "../../Components/Title";
import Button from "../../Components/Button";
import { useStaffData } from "../../Hooks/useStaffData";
import { getDentistsWorksImages } from "../../Data/galleryComponentImages";


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
  //align-items: center;
  align-items: end;
  position: relative;
  //border: 1px solid red;
`;
const Right = styled.div`
  flex: 1;
  height: 57vw;
  display: flex;
`;
const LeftContainer = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  //border: 1px solid blue;
`;
const Content = styled.div`
  line-height: 1.5vw;
  color: #707070;
  text-align: start;
  width: 100%;
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
    const values = getDentistsWorksImages();

    const { dentistId } = useParams();
    const staffData = useStaffData();
    const currentDentist = useMemo(() => {
        return staffData.filter(
          (dentist) => dentist.id.toString() === dentistId
        )[0];
    }, [staffData, dentistId]);
    return (
      <>

          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          {currentDentist && (
            <Container>
                <Left>
                    <LeftContainer>
                        <Title title={`${currentDentist.firstName} ${currentDentist.secondName}`} style={{
                            width: "100%",
                            color: "#4D83F1",
                            fontSize: "2vw",
                            fontWeight: "500"
                        }} />
                        <Content>
                            <p>
                                {currentDentist.position}
                            </p>
                            {currentDentist.description}
                        </Content>
                    </LeftContainer>
                    <Button
                      text={t("navbar:dentists")}
                      whereTo="dentists"
                      style={{ position: "relative", alignSelf: "start", marginLeft: "5vw", marginTop: "5vw" }}
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
                {/*<BackgroundTitle*/}
                {/*  backgroundTitle={currentDentist.positionBackground}*/}
                {/*  fontSize="10vw"*/}
                {/*  style={{ top: 0, left: "5vw" }}*/}
                {/*/>*/}
            </Container>
          )}
          <GalleryComponent
            title={t("common:works")}
            backgroundTitle={t("common:works")}
            values={values}
          />
          <Footer />
      </>
    );
};

export default DentistProfile;
