import React from "react";
import PriceListSubCategory from "./PriceListSubCategory";
import { Circle, Icon } from "../../../Components/PrincipalsComponent/PrincipalsItem";
import Title from "../../../Components/Title";

const PriceListCategory = ({ title, color, logo, data, id }) => {
    return (
      <div className="priceListCategoryWrapper">
          <div className={`priceListCategoryContainer ${parseInt(id) % 2 && "reverseFlexRow"}`}>
              <Circle color={color}>
                  <Icon src={logo} />
              </Circle>
              <div className="priceListCategoryContentContainer">
                  <Title title={title} style={{ fontSize: "1.5vw", paddingTop: "3vw" }}
                  />
                  <div className="priceListSubCategoryWrapper">
                      {data.map((subCategory, index) => {
                          return (
                            <PriceListSubCategory key={index} id={index}
                                                  name={subCategory.subCategoryName}
                                                  treatments={subCategory.treatments} />
                          );
                      })}
                  </div>
              </div>
          </div>
          <div
            className={`priceListCategoryColorBox ${parseInt(id) % 2 && "colorLeft"}`}
            style={{ backgroundColor: `${color}` }} />
      </div>
    );
};

export default PriceListCategory;
