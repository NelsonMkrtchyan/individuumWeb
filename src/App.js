import './App.scss';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import LandingPage from "./Containers/LandingPage";
import AboutUsPage from "./Containers/AboutUsPage";
import DentistsPage from "./Containers/DentistsPage";
import PriceListPage from "./Containers/PriceListPage";
import GalleryPage from "./Containers/GalleryPage";
import ContactsPage from "./Containers/ContactsPage";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/aboutUs" element={<AboutUsPage />} />
                    <Route path="/dentists" element={<DentistsPage />} />
                    <Route path="/priceList" element={<PriceListPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                </Routes>
            </Router>
        </>
  );
}

export default App;
