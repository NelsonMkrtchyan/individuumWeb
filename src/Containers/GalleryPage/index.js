import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Components/Footer";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import { getGalleryPageImages } from "../../Data/galleryPageImages";
import Gallery from "react-photo-gallery";
import { useTranslation } from "react-i18next";
import PageTitleSection from "../../Components/PageTitleSection";
import styled from "styled-components";


const GalleryWrapper = styled.div`
  width: 90%;
  padding: 3vw 10px 10px 10px;
  margin: auto;

  img {
    border-radius: 20px;
  }
`;

const GalleryPage = () => {
    const { t } = useTranslation(["navbar"]);

    const images = getGalleryPageImages();
    return (
      <div>
          <NavigationBar />
          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <PageTitleSection title={t("navbar:gallery")} backgroundTitle={t("navbar:gallery")} />
          <GalleryWrapper>
              <Gallery photos={images} margin={20} direction={"row"} />
          </GalleryWrapper>
          <Footer />
      </div>
    );
};

export default GalleryPage;
