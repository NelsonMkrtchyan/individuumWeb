import React from "react";
import PriceListSubCategory from "./PriceListSubCategory";

const PriceListCategory = ({ title, color, logo, data, id }) => {
    return (
      <div className="priceListCategoryWrapper">
          <div className={`priceListCategoryContainer ${parseInt(id) % 2 && "reverseFlexRow"}`}>
              <div className="priceListCategoryLogoContainer" style={{ backgroundColor: `${color}` }}>
                  <div className="priceListCategoryLogo"
                       style={{ backgroundImage: `url("${logo}")` }} />
              </div>
              <div className="priceListCategoryContentContainer">
                  <div className="priceListCategoryName">
                      <p>{title}</p>
                  </div>
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
