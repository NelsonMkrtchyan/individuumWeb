import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Components/Footer";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import BackgroundTitle from "../../Components/BackgroundTitle";
import GoogleMapComponent from "../../Components/GoogleMapComponent";

const ContactsPage = () => {
    return (
        <div>
            <NavigationBar/>
            <PrincipalsComponent styles={{marginTop: "5vw"}} />
            <div style={{width: "100%", margin: "auto"}}>
                <BackgroundTitle backgroundTitle="Contacts" direction="center" fontSize="20vw" />
                <div className="contactsPageContactsContent">
                    <div>
                        <div className="contactsPageTitle">
                            <p>Contacts</p>
                        </div>
                        <ul>
                            <li className="contactsPageText">
                                Armenia, Yerevan, 0026
                                Garegin Njdeh 44
                            </li>
                            <li className="contactsPageText">
                                +374 10 44 84 21
                            </li>
                            <li className="contactsPageText">
                                +374 96 44 84 21
                            </li>
                            <li className="contactsPageText">
                                individuumclinic@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="contactsPageTitle">
                            <p>
                                Find Us
                            </p>
                        </div>
                        <ul>
                            <li className="contactsPageText">
                                Facebook
                            </li>
                            <li className="contactsPageText">
                                Instagram
                            </li>
                            <li className="contactsPageText">
                                Youtube
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="contactsPageMapContent">
                    <div className="contactsPageBackgroundColorsContainer">
                        <div className="contactsPageBackgroundYellowBox" />
                        <div className="contactsPageBackgroundBlueBox" />
                    </div>
                    <div className="contactsPageTitle" style={{width: "60%", margin: "auto"}}>
                        <p>Map</p>
                    </div>
                    <div className="contactsPageMapContainer">
                        <GoogleMapComponent />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContactsPage