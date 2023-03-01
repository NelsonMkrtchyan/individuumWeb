import React from "react";
import Footer from "../../Components/Footer";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import PageTitleSection from "../../Components/PageTitleSection";
import ServiceBlock from "./Components/ServiceBlock";
import { useServiceData } from "../../Hooks/useServiceData";
import { useTranslation } from "react-i18next";
import { Container } from "../../Components/Styles";

const ServicesPage = () => {
    const { t } = useTranslation(["navbar"]);
    const serviceData = useServiceData();

    return (
      <div>

          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <PageTitleSection title={t("navbar:services")} />
          {serviceData && (
            <Container style={{ width: "80%", margin: "auto" }}>
                {serviceData.map((service) => {
                    return (
                      <ServiceBlock
                        key={service.id}
                        id={service.id}
                        title={service.title}
                        logo={service.imageSrc.default} />
                    );
                })}
            </Container>
          )
          }
          <Footer />
      </div>
    );
};

export default ServicesPage;
