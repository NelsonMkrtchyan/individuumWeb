import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Components/Footer";
import GalleryComponent from "../../Components/GalleryComponent";
import PrincipalsComponent from "../../Components/PrincipalsComponent";

const GalleryPage = () => {
    return (
        <div>
            <NavigationBar/>
            <PrincipalsComponent marginTop="5vw" />
            <GalleryComponent />
            <Footer />
        </div>
    );
}

export default GalleryPage