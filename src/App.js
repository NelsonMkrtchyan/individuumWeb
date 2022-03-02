import './App.scss';
import NavigationBar from "./Components/NavigationBar";
import AboutUsComponent from "./Components/AboutUsComponent";
import SwiperComponent from "./Components/SwiperComponent";
import Footer from "./Components/Footer";

function App() {
    return (
    <div className="App">
        <NavigationBar/>
        <SwiperComponent />
        <AboutUsComponent />
        <Footer />
    </div>
  );
}

export default App;
