import React from "react";

const PrincipalsItem = ({ title, color, icon }) => {
    return (
      <div className="principalsItemContainer">
          <div className={`principalsItemCycle ${color}`}>
              <div className={`principalsItemIcon`} style={{ backgroundImage: `url(${icon})` }} />
          </div>
          <div className="principalsItemTitle">
              <p>{title}</p>
          </div>
      </div>
    );
};

export default PrincipalsItem;
