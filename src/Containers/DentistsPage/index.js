import React from "react";
import Footer from "../../Components/Footer";
import PageTitleSection from "../../Components/PageTitleSection";
import UserCard from "./Components/UserCard";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import { useTranslation } from "react-i18next";
import { Container } from "../../Components/Styles";
import { useStaffData } from "../../Hooks/useStaffData";


const DentistsPage = () => {
      const { t } = useTranslation(["navbar"]);
      const staffData = useStaffData();

      return (
        <>

            <PrincipalsComponent styles={{ marginTop: "5vw" }} />
            <PageTitleSection title={t("navbar:dentists")} />
            <Container>
                {staffData.map((dentist) => {
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
