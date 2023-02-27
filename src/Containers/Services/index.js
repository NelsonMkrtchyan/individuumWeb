import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Components/Footer";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import PageTitleSection from "../../Components/PageTitleSection";
import ServiceBlock from "./Components/ServiceBlock";
import { useServiceData } from "../../Hooks/useServiceData";
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
    const { t } = useTranslation(["navbar"]);
    const serviceData = useServiceData();

    return (
      <div>
          <NavigationBar />
          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <PageTitleSection title={t("navbar:services")} />
          {serviceData && <div className="servicesPageContainer"
                               style={{
                                   display: "flex",
                                   width: "60vw",
                                   margin: "auto",
                                   flexWrap: "wrap",
                                   marginTop: "3vw"
                               }}>
              {serviceData.map((service) => {
                  return (
                    <ServiceBlock key={service.id} id={service.id} title={service.title}
                                  logo={service.imageSrc.default} />
                  );
              })}
          </div>
          }
          <Footer />
      </div>
    );
};

export default ServicesPage;
