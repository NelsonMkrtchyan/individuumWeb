import React from "react";
// import PriceListComponent from "../../Components/PriceListComponent";
import Footer from "../../Components/Footer";
import SwiperComponent from "../../Components/SwiperComponent";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import AboutUsComponent from "../../Components/AboutUsComponent";
import StatisticsComponent from "../../Components/StatisticsComponent";
import DentistsComponent from "../../Components/DentistsComponent";
import GalleryComponent from "../../Components/GalleryComponent";
import { useTranslation } from "react-i18next";
import { getLandingGalleryImages } from "../../Data/galleryComponentImages";

const LandingPage = () => {
    const { t } = useTranslation(["navbar"]);
    const values = getLandingGalleryImages();
    return (
      <div>

          <SwiperComponent />
          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <AboutUsComponent />
          <StatisticsComponent />
          <DentistsComponent />
          {/*<PriceListComponent />*/}
          <GalleryComponent
            values={values}
            title={t("gallery")}
            backgroundTitle={t("gallery")}
          />
          <Footer />
      </div>
    );
};

export default LandingPage;
