import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import PageTitleSection from "../../Components/PageTitleSection";
import { useParams } from "react-router-dom";
import { getServicesInfo } from "../../Data/servicesInfo";

const ServiceInfo = () => {
    const { serviceId } = useParams();
    const servicesInfo = getServicesInfo();

    const currentService = servicesInfo.filter(
      (dentist) => dentist.id.toString() === serviceId
    )[0];
    return (
      <div>
          <NavigationBar />
          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <PageTitleSection title={currentService.title} backgroundTitle="Services" />
          <div style={{ marginTop: "3vw" }}>
              {currentService.title}
          </div>
      </div>
    );
};

export default ServiceInfo;
