import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import SwiperComponent from "../../Components/SwiperComponent";
import AboutUsComponent from "../../Components/AboutUsComponent";
import DentistsComponent from "../../Components/DentistsComponent";
import PriceListComponent from "../../Components/PriceListComponent";
import Footer from "../../Components/Footer";

const LandingPage = () => {
    return (
        <div>
            <NavigationBar/>
            <SwiperComponent />
            <AboutUsComponent />
            <DentistsComponent />
            <PriceListComponent />
            <Footer />
        </div>
    );
}

export default LandingPage;