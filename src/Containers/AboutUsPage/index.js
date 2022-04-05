import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Components/Footer";
import StatisticsComponent from "../../Components/StatisticsComponent";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import GalleryComponent from "../../Components/GalleryComponent";
import AboutUsPageAboutUs from "./Components/AboutUsPageAboutUs";

const AboutUsPage = () => {
    return (
        <div>
            <NavigationBar/>
            <PrincipalsComponent styles={{marginTop: "5vw"}} />
            <AboutUsPageAboutUs styles={{marginTop: "0"}} />
            <StatisticsComponent styles={{marginTop: "10vw"}} />
            <GalleryComponent styles={{marginTop: "1vw"}} title="Our Works" />
            <Footer />
        </div>
    );
}

export default AboutUsPage