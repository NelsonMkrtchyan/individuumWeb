import React from "react";

import { Link } from "react-router-dom";

import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Components/Footer";
import PageTitleSection from "../../Components/PageTitleSection";
import DentistCard from "./Components/DentistCard";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import { getDentistsInfo } from "../../Data/dentistsInfo";
import { useTranslation } from "react-i18next";

const DentistsPage = () => {
    const { t } = useTranslation(["navbar"]);

    const dentistsInfo = getDentistsInfo();

    return (
      <div>
          <NavigationBar />
          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <PageTitleSection title={t("navbar:dentists")} />
          <div className="dentistsPageContainer">
              {dentistsInfo.map((dentist) => {
                  return (
                    <DentistCard
                      key={dentist.id}
                      id={dentist.id}
                      name={dentist.firstName + " " + dentist.secondName}
                      position={dentist.position}
                      imageSrc={dentist.imageSrc}
                      whereIs="dentistsPage"
                    />
                  );
              })}
          </div>
          <Footer />

          <Link to={"/dentists/123"}>Components</Link>
      </div>
    );
};

export default DentistsPage;
