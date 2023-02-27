import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Components/Footer";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import PageTitleSection from "../../Components/PageTitleSection";
import { getPriceList } from "../../Data/priceList";
import PriceListCategory from "./Components/PriceListCategory";
import { useTranslation } from "react-i18next";

const PriceListPage = () => {
    const { t } = useTranslation(["navbar"]);

    const priceList = getPriceList();
    return (
      <div>
          <NavigationBar />
          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <PageTitleSection title={t("navbar:priceList")} />
          <div>
              {priceList.map((category, index) => {
                  return (
                    <div>
                        <PriceListCategory key={index} id={category.id} title={category.categoryName}
                                           color={category.color}
                                           logo={category.logo}
                                           data={category.subCategories} />
                    </div>
                  );
              })}
          </div>
          <Footer />
      </div>
    );
};

export default PriceListPage;
