import React from "react";
import NavigationBar from "../../Components/NavigationBar";
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
          <NavigationBar />
          <SwiperComponent />
          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <AboutUsComponent />
          <StatisticsComponent styles={{ marginTop: "10vw" }} />
          <DentistsComponent />
          {/*<PriceListComponent />*/}
          <GalleryComponent
            title={t("gallery")}
            backgroundTitle={t("gallery")}
            styles={{ marginTop: "8vw" }}
          />
          <Footer />
      </div>
    );
};

export default LandingPage;
