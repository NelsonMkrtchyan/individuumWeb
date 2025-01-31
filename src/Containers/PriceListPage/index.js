import React, { useState } from "react";
import Footer from "../../Components/Footer";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import PageTitleSection from "../../Components/PageTitleSection";
import PriceListCategory from "./Components/PriceListCategory";
import { useTranslation } from "react-i18next";
import { usePriceData } from "../../Hooks/usePriceData";

import { TabView, TabPanel } from "primereact/tabview";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1vw 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  .p-tabview-nav-container {
    display: flex;
    justify-content: start;
      padding-left: 20vw;
      font-size: 2vw;
    width: 100%;
  }
  .p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {
    box-shadow: none;
  }
    
  .p-tabview-title {
    font-size: 2vw;
      cursor: pointer;
      line-height: normal;
  }
`;

const PriceListPage = () => {
    const { t } = useTranslation(["navbar", "priceList"]);
    const { dentistryPriceData, injectionCosmetologyPriceData, facialAestheticCarePriceData, massagePriceData, currency } = usePriceData();
    const [activeIndex, setActiveIndex] = useState(0);


    return (
      <div>
          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <PageTitleSection title={t("navbar:priceList")} />

          <Wrapper>
              <TabView
                activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                  <TabPanel header={`1. ${t("priceList:dentistry")}`} >
                      {dentistryPriceData.map((category, index) => {
                          return (
                            <PriceListCategory
                              key={index}
                              id={category.id}
                              title={category.categoryName}
                              color={category.color}
                              logo={category.logo}
                              data={category.subCategories}
                              currency={currency}
                            />
                          );
                      })}
                  </TabPanel>
                  <TabPanel header={`2. ${t("priceList:injectionCosmetology")}`}>
                      {injectionCosmetologyPriceData.map((category, index) => {
                          return (
                            <PriceListCategory
                              key={index}
                              id={category.id}
                              title={category.categoryName}
                              color={category.color}
                              logo={category.logo}
                              data={category.subCategories}
                              currency={currency}
                            />
                          );
                      })}
                  </TabPanel>
                  <TabPanel header={`2.1. ${t("priceList:facialAestheticCare")}`}>
                      {facialAestheticCarePriceData.map((category, index) => {
                          return (
                            <PriceListCategory
                              key={index}
                              id={category.id}
                              title={category.categoryName}
                              color={category.color}
                              logo={category.logo}
                              data={category.subCategories}
                              currency={currency}
                            />
                          );
                      })}
                  </TabPanel>
                  <TabPanel header={`2.2. ${t("priceList:massage")}`}>
                      {massagePriceData.map((category, index) => {
                          return (
                            <PriceListCategory
                              key={index}
                              id={category.id}
                              title={category.categoryName}
                              color={category.color}
                              logo={category.logo}
                              data={category.subCategories}
                              currency={currency}
                            />
                          );
                      })}
                  </TabPanel>
              </TabView>
          </Wrapper>

          <Footer />
      </div>
    );
};

export default PriceListPage;
