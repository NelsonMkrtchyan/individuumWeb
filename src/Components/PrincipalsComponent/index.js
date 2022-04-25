import React from "react";
import PrincipalsItem from "./PrincipalsItem";

const PrincipalsComponent = ({ styles }) => {
  return (
    <div className="principalsComponentContainer" style={{ ...styles }}>
      <PrincipalsItem title="Quality Dental Services" color="piruz" />
      <PrincipalsItem title="Availability" color="yellow" />
      <PrincipalsItem title="Work Transparency" color="lightBlue" />
      <PrincipalsItem title="Safety" color="green" />
      <PrincipalsItem title="Effective Time Management" color="purple" />
      <PrincipalsItem
        title="Physical and Psychological Comfort"
        color="piruz"
      />
    </div>
  );
};

export default PrincipalsComponent;
