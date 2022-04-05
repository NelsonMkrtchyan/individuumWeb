import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Components/Footer";
import AboutUsComponent from "../../Components/AboutUsComponent";
import StatisticsComponent from "../../Components/StatisticsComponent";
import PrincipalsComponent from "../../Components/PrincipalsComponent";

const AboutUsPage = () => {
    return (
        <div>
            <NavigationBar/>
            <PrincipalsComponent />
            <AboutUsComponent />
            <StatisticsComponent />
            <Footer />
        </div>
    );
}

export default AboutUsPage