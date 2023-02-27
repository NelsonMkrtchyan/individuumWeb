import React from "react";
import PrincipalsItem from "./PrincipalsItem";
import { useTranslation } from "react-i18next";

const PrincipalsComponent = ({ styles }) => {
    const { t } = useTranslation(["common"]);
    return (
      <div className="principalsComponentContainer" style={{ ...styles }}>
          <PrincipalsItem title={t("common:principals.teamWork")} color="piruz"
                          icon={require("../../Assets/Images/Services/aesthetics.svg").default} />
          <PrincipalsItem title={t("common:principals.patientCenteredCare")} color="yellow"
                          icon={require("../../Assets/Images/Services/orthodontics.svg").default} />
          <PrincipalsItem title={t("common:principals.safety")} color="lightBlue"
                          icon={require("../../Assets/Images/tooth_1.png")} />
          <PrincipalsItem title={t("common:principals.professionalism")} color="green"
                          icon={require("../../Assets/Images/Services/surgical_dentistry.svg").default} />
          {/*<PrincipalsItem title="Effective Time Management" color="purple"*/}
          {/*                icon={require("../../Assets/Images/Services/surgical_dentistry.svg").default} />*/}
          {/*<PrincipalsItem*/}
          {/*  title="Physical and Psychological Comfort"*/}
          {/*  color="piruz"*/}
          {/*  icon={require("../../Assets/Images/tooth_2.png")}*/}
          {/*/>*/}
      </div>
    );
};

export default PrincipalsComponent;
