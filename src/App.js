import './App.scss';
import NavigationBar from "./Components/NavigationBar";
import AboutUsComponent from "./Components/AboutUsComponent";
import SwiperComponent from "./Components/SwiperComponent";

function App() {
    return (
    <div className="App">
        <NavigationBar/>
        <SwiperComponent />
        <AboutUsComponent />
    </div>
  );
}

export default App;
