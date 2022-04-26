import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import PageTitleSection from "../../Components/PageTitleSection";
import { useParams } from "react-router-dom";
import { getServicesInfo } from "../../Data/servicesInfo";
import Footer from "../../Components/Footer";
import SeeAllButton from "../../Components/SeeAllButton";

const ServiceInfo = () => {
    const { serviceId } = useParams();
    const servicesInfo = getServicesInfo();

    const currentService = servicesInfo.filter(
      (dentist) => dentist.id.toString() === serviceId
    )[0];
    console.log(currentService.imageSrc, JSON.stringify(currentService.imageSrc));
    return (
      <div>
          <NavigationBar />
          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <PageTitleSection title={currentService.title} backgroundTitle="Services" />
          <div style={{ marginTop: "3vw", marginBottom: "10vw", position: "relative" }}>
              <div className="serviceInfoContentContainer">
                  <div className="serviceInfoLogo"
                       style={{ backgroundImage: `url("${currentService.imageSrc.default}")` }} />
                  <div>
                      <p>
                          {currentService.description}
                      </p>
                  </div>
              </div>
              <div style={{ width: "50%", margin: "auto" }}>
                  <SeeAllButton text="Back" whereTo="services" />
              </div>
              <div className="serviceInfoBlueBox" />
              <div className="serviceInfoYellowBox" />
          </div>
          <Footer />
      </div>
    );
};

export default ServiceInfo;
