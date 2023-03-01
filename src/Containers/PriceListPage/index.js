import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Components/Footer";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import PageTitleSection from "../../Components/PageTitleSection";
import PriceListCategory from "./Components/PriceListCategory";
import { useTranslation } from "react-i18next";
import { usePriceData } from "../../Hooks/usePriceData";

const PriceListPage = () => {
    const { t } = useTranslation(["navbar"]);

    const { priceData, currency } = usePriceData();
    return (
      <div>
          <NavigationBar />
          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <PageTitleSection title={t("navbar:priceList")} />
          {priceData.map((category, index) => {
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
          <Footer />
      </div>
    );
};

export default PriceListPage;
