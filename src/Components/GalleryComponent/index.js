import React from "react";
import Gallery from "react-photo-gallery";
import Button from "../Button";
import { getGalleryComponentImages } from "../../Data/galleryComponentImages";
import { useTranslation } from "react-i18next";
import { Container } from "../Styles";
import BackgroundTitle from "../BackgroundTitle";
import styled from "styled-components";
import Title from "../Title";


const GalleryWrapper = styled.div`
  width: 90%;
  padding: 3vw 10px 10px 10px;
  align-self: center;
  margin-top: 8vw;

  img {
    border-radius: 20px;
  }
`;


const GalleryComponent = ({ backgroundTitle, title }) => {
    const { t } = useTranslation(["common"]);
    const photos = getGalleryComponentImages();
    return (
      <Container style={{ flexDirection: "column" }}>
          {backgroundTitle && (
            <BackgroundTitle
              backgroundTitle={backgroundTitle}
              fontSize="8vw"
              style={{ top: 0, textAlign: "end" }}
            />
          )}
          <GalleryWrapper>
              <Title title={title} style={{ fontSize: "2vw", paddingRight: "10vw", textAlign: "end" }} />
              <Gallery photos={photos} margin={20} direction={"row"} />
          </GalleryWrapper>
          <Button
            text={t("common:seeAll")}
            whereTo="dentists"
            style={{
                position: "relative",
                alignSelf: "end",
                marginRight: "10vw"
            }}
          />
      </Container>
    );
};

export default GalleryComponent;
