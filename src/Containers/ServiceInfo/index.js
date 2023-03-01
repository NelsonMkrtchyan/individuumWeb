import React, { useMemo } from "react";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import PageTitleSection from "../../Components/PageTitleSection";
import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button";
import { useServiceData } from "../../Hooks/useServiceData";
import { useTranslation } from "react-i18next";

const ServiceInfo = () => {
    const { t } = useTranslation(["navbar"]);
    const { serviceId } = useParams();
    const serviceData = useServiceData();

    const currentService = useMemo(() => {
        return serviceData && serviceData.filter(
          (dentist) => dentist.id.toString() === serviceId
        )[0];
    }, [serviceData, serviceId]);
    return (
      <div>

          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          {currentService && (
            <>
                <PageTitleSection title={currentService.title} backgroundTitle={t("navbar:services")} />
                <div style={{ marginTop: "3vw", marginBottom: "10vw", position: "relative" }}>
                    <div className="serviceInfoContentContainer">
                        <div className="serviceInfoLogo"
                             style={{ backgroundImage: `url("${currentService.imageSrc.default}")` }} />
                        <div>
                            {currentService.description}
                        </div>
                    </div>
                    <div style={{ width: "50%", margin: "auto" }}>
                        <Button text={t("common:back")} whereTo="services" />
                    </div>
                    <div className="serviceInfoBlueBox" />
                    <div className="serviceInfoYellowBox" />
                </div>
            </>
          )
          }
          <Footer />
      </div>
    );
};

export default ServiceInfo;
