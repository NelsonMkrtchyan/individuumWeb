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
    justify-content: center;
    width: 100%;
  }
  .p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {
    box-shadow: none;
  }
  .p-tabview-title {
    font-size: 1vw;
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
                  <TabPanel header={t("priceList:dentistry")} >
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
                  <TabPanel header={t("priceList:injectionCosmetology")}>
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
                  <TabPanel header={t("priceList:injectionCosmetology")}>
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
                  <TabPanel header={t("priceList:massage")}>
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
