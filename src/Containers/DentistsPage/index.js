import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Components/Footer";
import PageTitleSection from "../../Components/PageTitleSection";
import DentistCard from "./Components/DentistCard";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import {useMatch} from "react-router";


const Topic = () => {
    let params = useParams();
    console.log("params", params)
    return (
        <div>
            <p>
                {params}
            </p>
        </div>
    );
}

const DentistsPage = () => {
    let match = useMatch("/dentists");
    console.log("match",match)
    return (
        <div>
            <NavigationBar/>
            <PrincipalsComponent styles={{marginTop:"5vw"}} />
            <PageTitleSection title="Dentists" />
            <div className="dentistsPageContainer">
                <Link to={`${match.pathname}/$components`}>
                    <DentistCard name="Varazdat Tangamyan" position="Doctor" imageSrc={require("../../Assets/Images/Varazdat.png")} whereIs="dentistsPage" />
                </Link>
                <DentistCard name="Marine Mkrtchyan" position="Doctor" imageSrc={require("../../Assets/Images/Marine.png")} whereIs="dentistsPage" />
                <DentistCard name="Aida Babayan" position="Doctor" imageSrc={require("../../Assets/Images/Aida.png")} whereIs="dentistsPage" />
                <DentistCard name="Varazdat Tangamyan" position="Doctor" imageSrc={require("../../Assets/Images/Varazdat.png")} whereIs="dentistsPage" />
                <DentistCard name="Marine Mkrtchyan" position="Doctor" imageSrc={require("../../Assets/Images/Marine.png")} whereIs="dentistsPage" />
                <DentistCard name="Aida Babayan" position="Doctor" imageSrc={require("../../Assets/Images/Aida.png")} whereIs="dentistsPage" />
                <DentistCard name="Varazdat Tangamyan" position="Doctor" imageSrc={require("../../Assets/Images/Varazdat.png")} whereIs="dentistsPage" />
                <DentistCard name="Marine Mkrtchyan" position="Doctor" imageSrc={require("../../Assets/Images/Marine.png")} whereIs="dentistsPage" />
            </div>
            <Footer />

            <Link to={`${match.pathname}/$123`}>Components</Link>

            <Routes>
                <Route path={`${match.pathname}`} element={<DentistsPage />}>
                    <Route path={`${match.pathname}:topicId`} element={<Topic />} />

                </Route>
                {/*<Route path={match}>*/}
                {/*    <h3>Please select a topic.</h3>*/}
                {/*</Route>*/}
            </Routes>
        </div>
    );
}

export default DentistsPage