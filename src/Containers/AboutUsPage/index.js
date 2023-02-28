import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Components/Footer";
import StatisticsComponent from "../../Components/StatisticsComponent";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import GalleryComponent from "../../Components/GalleryComponent";
import AboutUsPageAboutUs from "./Components/AboutUsPageAboutUs";
import { useTranslation } from "react-i18next";

const AboutUsPage = () => {
    const { t } = useTranslation(["common"]);

    return (
      <div>
          <NavigationBar />
          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <AboutUsPageAboutUs />
          <StatisticsComponent />
          <GalleryComponent styles={{ marginTop: "8vw" }} title={t("common:ourWorks")} />
          <Footer />
      </div>
    );
};

export default AboutUsPage;
