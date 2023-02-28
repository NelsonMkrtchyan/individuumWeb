import React from "react";
import StatisticsItem from "./StatisticsItem";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
  height: 10vw;
  width: 90%;
  display: flex;
  flex-direction: row;
  margin: 10vw auto auto;
`;

const StatisticsComponent = () => {
    const { t } = useTranslation(["common"]);
    return (
      <Container>
          <StatisticsItem number={12} title={t("common:statistics.year")} />
          <StatisticsItem number={3214} title={t("common:statistics.patients")} />
          <StatisticsItem number={76} title={t("common:statistics.certificates")} />
          <StatisticsItem number={12} title={t("common:statistics.dentists")} />
      </Container>
    );
};

export default StatisticsComponent;
