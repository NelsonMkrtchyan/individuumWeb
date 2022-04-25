import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Components/Footer";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import PageTitleSection from "../../Components/PageTitleSection";
import ServiceBlock from "./Components/ServiceBlock";
import { getServicesInfo } from "../../Data/servicesInfo";

const ServicesPage = () => {
    const services = getServicesInfo();
    return (
      <div>
          <NavigationBar />
          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <PageTitleSection title="Services" />
          <div className="servicesPageContainer"
               style={{ display: "flex", width: "60vw", margin: "auto", flexWrap: "wrap", marginTop: "3vw" }}>
              {services.map((service) => {
                  return (
                    <ServiceBlock key={service.id} id={service.id} title={service.title}
                                  logo={service.imageSrc.default} />
                  );
              })}
          </div>
          <Footer />
      </div>
    );
};

export default ServicesPage;
