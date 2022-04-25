import React from "react";
import StatisticsItem from "./StatisticsItem";

const StatisticsComponent = ({ styles }) => {
  return (
    <div className="statisticsComponentContainer" style={{ ...styles }}>
      <StatisticsItem number={12} title="Years" />
      <StatisticsItem number={2746} title="Patients" />
      <StatisticsItem number={71} title="Certificates" />
      <StatisticsItem number={12} title="Dentists" />
    </div>
  );
};

export default StatisticsComponent;
