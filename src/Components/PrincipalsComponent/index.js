import React from "react";
import PrincipalsItem from "./PrincipalsItem";

const PrincipalsComponent = ({ styles }) => {
    return (
      <div className="principalsComponentContainer" style={{ ...styles }}>
          <PrincipalsItem title="Quality Dental Services" color="piruz"
                          icon={require("../../Assets/Images/tooth_2.png")} />
          <PrincipalsItem title="Availability" color="yellow"
                          icon={require("../../Assets/Images/Services/orthodontics.svg").default} />
          <PrincipalsItem title="Work Transparency" color="lightBlue"
                          icon={require("../../Assets/Images/tooth_1.png")} />
          <PrincipalsItem title="Safety" color="green"
                          icon={require("../../Assets/Images/Services/aesthetics.svg").default} />
          <PrincipalsItem title="Effective Time Management" color="purple"
                          icon={require("../../Assets/Images/Services/surgical_dentistry.svg").default} />
          <PrincipalsItem
            title="Physical and Psychological Comfort"
            color="piruz"
            icon={require("../../Assets/Images/tooth_2.png")}
          />
      </div>
    );
};

export default PrincipalsComponent;
