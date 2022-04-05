import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import SwiperComponent from "../../Components/SwiperComponent";
import AboutUsComponent from "../../Components/AboutUsComponent";
import DentistsComponent from "../../Components/DentistsComponent";
import PriceListComponent from "../../Components/PriceListComponent";
import Footer from "../../Components/Footer";
import StatisticsComponent from "../../Components/StatisticsComponent";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import GalleryComponent from "../../Components/GalleryComponent";

const LandingPage = () => {
    return (
        <div>
            <NavigationBar/>
            <SwiperComponent />
            <PrincipalsComponent />
            <AboutUsComponent />
            <StatisticsComponent />
            <DentistsComponent />
            {/*<PriceListComponent />*/}
            <GalleryComponent />
            <Footer />
        </div>
    );
}

export default LandingPage;