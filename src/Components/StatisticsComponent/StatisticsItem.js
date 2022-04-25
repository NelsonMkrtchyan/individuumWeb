import React from "react";

const StatisticsItem = ({ number, title }) => {
  return (
    <div className="statisticsItemContainer">
      <div className="statisticsItemNumber">{number}</div>
      <div className="statisticsItemTitle">{title}</div>
    </div>
  );
};

export default StatisticsItem;
