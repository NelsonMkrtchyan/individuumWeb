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

const LandingPage = () => {
    const { t } = useTranslation(["navbar"]);
    return (
      <div>
          
          <SwiperComponent />
          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <AboutUsComponent />
          <StatisticsComponent />
          <DentistsComponent />
          {/*<PriceListComponent />*/}
          <GalleryComponent
            title={t("gallery")}
            backgroundTitle={t("gallery")}
          />
          <Footer />
      </div>
    );
};

export default LandingPage;
