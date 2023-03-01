import React from "react";
import Title from "../../../Components/Title";

const PriceListSubCategory = ({ name, treatments, id, left }) => {
    return (
      // ${id === 0 && "firstOne"}
      <div className={`subCategoryContainer `}>
          <Title title={name} style={{ textAlign: "center", fontSize: "1.2vw", margin: "0 0 2vw 0" }} />
          <div className="subCategoryContent">
              {treatments.map((treatment) => {
                  return (
                    <div className="subCategoryTreatment">
                        <div style={{ borderRight: "1px solid #ecbe21", paddingRight: "2vw", flex: 1 }}>
                            <p style={{ textAlign: "end" }}>{treatment.name}</p>
                        </div>
                        <div style={{ flex: 1, paddingLeft: "2vw" }}>
                            <p>{treatment.price}</p>
                        </div>
                    </div>
                  );
              })}
          </div>
      </div>
    );
};

export default PriceListSubCategory;
