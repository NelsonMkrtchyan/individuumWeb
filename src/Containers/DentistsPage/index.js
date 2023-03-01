import React from "react";

import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Components/Footer";
import PageTitleSection from "../../Components/PageTitleSection";
import UserCard from "./Components/UserCard";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import { getDentistsInfo } from "../../Data/dentistsInfo";
import { useTranslation } from "react-i18next";
import { Container } from "../../Components/Styles";


const DentistsPage = () => {
      const { t } = useTranslation(["navbar"]);
      const dentistsInfo = getDentistsInfo();
      return (
        <>
            <NavigationBar />
            <PrincipalsComponent styles={{ marginTop: "5vw" }} />
            <PageTitleSection title={t("navbar:dentists")} />
            <Container>
                {dentistsInfo.map((dentist) => {
                    return (
                      <UserCard
                        key={dentist.id}
                        id={dentist.id}
                        name={dentist.firstName + " " + dentist.secondName}
                        position={dentist.position}
                        positionBackground={dentist.positionBackground}
                        imageSrc={dentist.imageSrc}
                        isSwiper={false}
                      />
                    );
                })}
            </Container>
            <Footer />
        </>
      );
  }
;

export default DentistsPage;
