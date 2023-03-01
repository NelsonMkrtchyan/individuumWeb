import React from "react";
import PrincipalsItem from "./PrincipalsItem";
import { useTranslation } from "react-i18next";
import styled from "styled-components";


const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 5vw auto auto auto;
  align-self: center;
`;
const PrincipalsComponent = () => {
    const { t } = useTranslation(["common"]);
    return (
      <Wrapper>
          <PrincipalsItem title={t("common:principals.teamWork")} color={"#81c085"}
                          icon={require("../../Assets/Images/Services/aesthetics.svg").default} />
          <PrincipalsItem title={t("common:principals.patientCenteredCare")} color={"#ECBE21"}
                          icon={require("../../Assets/Images/Services/orthodontics.svg").default} />
          <PrincipalsItem title={t("common:principals.safety")} color={"#6A92E9"}
                          icon={require("../../Assets/Images/tooth_1.png")} />
          <PrincipalsItem title={t("common:principals.professionalism")} color={"#6e5aa0"}
                          icon={require("../../Assets/Images/Services/surgical_dentistry.svg").default} />
          {/*<PrincipalsItem title="Effective Time Management" color="purple"*/}
          {/*                icon={require("../../Assets/Images/Services/surgical_dentistry.svg").default} />*/}
          {/*<PrincipalsItem*/}
          {/*  title="Physical and Psychological Comfort"*/}
          {/*  color={"#ECBE21"}*/}
          {/*  icon={require("../../Assets/Images/tooth_2.png")}*/}
          {/*/>*/}
      </Wrapper>
    );
};

export default PrincipalsComponent;
