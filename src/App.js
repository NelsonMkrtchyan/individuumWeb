import './App.scss';
import NavigationBar from "./Components/NavigationBar";
import AboutUsComponent from "./Components/AboutUsComponent";
import SwiperComponent from "./Components/SwiperComponent";
import Footer from "./Components/Footer";
import PriceListComponent from "./Components/PriceListComponent";

function App() {
    return (
    <div className="App">
        <NavigationBar/>
        <SwiperComponent />
        <AboutUsComponent />
        <PriceListComponent />
        <Footer />
    </div>
  );
}

export default App;
