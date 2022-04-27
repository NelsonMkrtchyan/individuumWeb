import "./App.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./Containers/LandingPage";
import AboutUsPage from "./Containers/AboutUsPage";
import DentistsPage from "./Containers/DentistsPage";
import PriceListPage from "./Containers/PriceListPage";
import GalleryPage from "./Containers/GalleryPage";
import ContactsPage from "./Containers/ContactsPage";
import React, { useEffect } from "react";
import DentistProfile from "./Containers/DentistProfile";
import ServicesPage from "./Containers/Services";
import ServiceInfo from "./Containers/ServiceInfo";
import { useLocation } from "react-router";


const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        console.log("location", location);
        switch (location.pathname) {
        case "/dentists":
            window.scrollTo(0, 350);
            break;
        case "/services":
            window.scrollTo(0, 350);
            break;
        default:
            window.scrollTo(0, 0);
            break;
        }


    }, [location]);

    return <>{props.children}</>;
};

function App() {
    return (
      <>
          <Router>
              <ScrollToTop>
                  <Routes>
                      <Route path="/" element={<LandingPage />} />
                      <Route path="/aboutUs" element={<AboutUsPage />} />
                      <Route path="/dentists" element={<DentistsPage />} />
                      <Route path="/dentists/:dentistId" element={<DentistProfile />} />
                      <Route path="/priceList" element={<PriceListPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/services/:serviceId" element={<ServiceInfo />} />
                      <Route path="/gallery" element={<GalleryPage />} />
                      <Route path="/contacts" element={<ContactsPage />} />
                  </Routes>
              </ScrollToTop>
          </Router>
      </>
    );
}

export default App;
