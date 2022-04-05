import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Components/Footer";
import GalleryComponent from "../../Components/GalleryComponent";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import BackgroundTitle from "../../Components/BackgroundTitle";

const GalleryPage = () => {
    return (
        <div>
            <NavigationBar/>
            <PrincipalsComponent styles={{marginTop:"5vw"}} />
            <div style={{position: "relative", marginTop:"2vw"}}>
                <BackgroundTitle position="relative" backgroundTitle="Gallery" direction="center" fontSize="20vw" />
                <div style={{position: "absolute", bottom: "2vw", left: "15vw"}}>
                    <p className="blockTitle">Gallery</p>
                </div>
            </div>
            <GalleryComponent styles={{ marginTop:"1vw" }} />
            <Footer />
        </div>
    );
}

export default GalleryPage