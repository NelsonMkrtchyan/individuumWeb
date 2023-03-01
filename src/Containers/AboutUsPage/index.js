import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Components/Footer";
import StatisticsComponent from "../../Components/StatisticsComponent";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import GalleryComponent from "../../Components/GalleryComponent";
import AboutUsPageAboutUs from "./Components/AboutUsPageAboutUs";
import { useTranslation } from "react-i18next";
import PageTitleSection from "../../Components/PageTitleSection";

const AboutUsPage = () => {
    const { t } = useTranslation(["common"]);

    return (
      <div>
          <NavigationBar />
          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <PageTitleSection title={t("navbar:aboutUs")} />
          <AboutUsPageAboutUs />
          <StatisticsComponent />
          <GalleryComponent
            title={t("common:ourWorks")}
            backgroundTitle={t("common:ourWorks")}
          />
          <Footer />
      </div>
    );
};

export default AboutUsPage;
