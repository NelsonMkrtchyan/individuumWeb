import React from "react";
import { useParams } from "react-router-dom";
import { getDentistsInfo } from "../../Data/dentistsInfo";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import NavigationBar from "../../Components/NavigationBar";
import PageTitleSection from "../../Components/PageTitleSection";
import Footer from "../../Components/Footer";
import GalleryComponent from "../../Components/GalleryComponent";

const DentistProfile = () => {
  const { dentistId } = useParams();
  const dentistsInfo = getDentistsInfo();

  const currentDentist = dentistsInfo.filter(
    (dentist) => dentist.id.toString() === dentistId
  )[0];

  console.log(currentDentist.imageSrc);
  return (
    <div>
      <NavigationBar />
      <PrincipalsComponent styles={{ marginTop: "5vw" }} />
      <PageTitleSection title="Dentists" />

      <div className="dentistProfileAboutWrapper">
        <div className="dentistProfileAboutContainer">
          <div className="dentistProfileAboutContentContainer">
            s
            <div className="dentistProfileAboutName">
              <p>
                {currentDentist.firstName} {currentDentist.secondName}
              </p>
            </div>
            <div className="dentistProfileAboutRole">
              {currentDentist.position}
            </div>
            <div className="dentistProfileAboutDescription">
              <p>{currentDentist.description}</p>
            </div>
          </div>
          <div className="dentistProfileAboutImageContainer">
            <div
              className="dentistProfileAboutImage"
              style={{ backgroundImage: `url("${currentDentist.imageSrc}")` }}
            />
          </div>
        </div>
        <div className="dentistProfileAboutBoxColor" />
      </div>
      <GalleryComponent
        title="Works"
        backgroundTitle="Works"
        styles={{ marginTop: "8vw" }}
      />
      <Footer />
    </div>
  );
};

export default DentistProfile;
