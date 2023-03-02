import React from "react";
import Footer from "../../Components/Footer";
import StatisticsComponent from "../../Components/StatisticsComponent";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import GalleryComponent from "../../Components/GalleryComponent";
import AboutUsPageAboutUs from "./Components/AboutUsPageAboutUs";
import { useTranslation } from "react-i18next";
import PageTitleSection from "../../Components/PageTitleSection";
import { getAboutUsImages } from "../../Data/galleryComponentImages";

const AboutUsPage = () => {
    const { t } = useTranslation(["common"]);
    const values = getAboutUsImages();
    return (
      <div>

          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <PageTitleSection title={t("navbar:aboutUs")} />
          <AboutUsPageAboutUs />
          <StatisticsComponent />
          <GalleryComponent
            title={t("common:ourWorks")}
            backgroundTitle={t("common:ourWorks")}
            values={values}
          />
          <Footer />
      </div>
    );
};

export default AboutUsPage;
