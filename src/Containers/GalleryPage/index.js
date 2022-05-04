import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Components/Footer";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import BackgroundTitle from "../../Components/BackgroundTitle";
import { getGalleryPageImages } from "../../Data/galleryPageImages";
import Gallery from "react-photo-gallery";

const GalleryPage = () => {
    const images = getGalleryPageImages();
    return (
      <div>
          <NavigationBar />
          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <div style={{ position: "relative", marginTop: "2vw" }}>
              <BackgroundTitle
                position="relative"
                backgroundTitle="Gallery"
                direction="center"
                fontSize="20vw"
              />
              <div style={{ position: "absolute", bottom: "2vw", left: "15vw" }}>
                  <p className="blockTitle">Gallery</p>
              </div>
          </div>
          <div className="galleryComponentGalleryContainer">
              <Gallery photos={images} margin={20} direction={"row"} />
          </div>
          <Footer />
      </div>
    );
};

export default GalleryPage;
