// PriceListComponentPriceList
import React from "react";

const PriceListComponentPriceList = ({ title }) => {
  return (
    <div className="priceListComponentPriceListContainer">
      <div className="priceListComponentPriceListTitle">
        <p>{title}</p>
      </div>
      <div className="priceListComponentAgeGroupContainer">
        <div className="priceListComponentAgeGroup">
          <p> 13-18 age </p>
        </div>
        <div className="priceListComponentAgeGroup">
          <p> 7-12 age </p>
        </div>
        <div className="priceListComponentAgeGroup">
          <p> 1-6 age </p>
        </div>
        <div className="priceListComponentAgeGroup" />
      </div>
      <div className="priceListComponentPriceListContent">
        <div className="priceListComponentPriceListContentItem">
          <p>Lorem ipsum </p>
          <p>Lorem ipsum </p>
          <p>Lorem ipsum </p>
          <p>Lorem ipsum </p>
          <p>Lorem ipsum </p>
        </div>
        <div className="priceListComponentPriceListContentItem">
          <p>8000 AMD</p>
          <p>5000 AMD</p>
          <p>11000 AMD</p>
          <p>8000 AMD</p>
          <p>5000 AMD</p>
        </div>
        <div className="priceListComponentPriceListContentItem">
          <p>11000 AMD</p>
          <p>5000 AMD</p>
          <p>8000 AMD</p>
          <p>5000 AMD</p>
          <p>8000 AMD</p>
        </div>
        <div className="priceListComponentPriceListContentItem">
          <p>8000 AMD</p>
          <p>5000 AMD</p>
          <p>8000 AMD</p>
          <p>11000 AMD</p>
          <p>5000 AMD</p>
        </div>
      </div>
    </div>
  );
};

export default PriceListComponentPriceList;
