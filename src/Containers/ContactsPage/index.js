import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Components/Footer";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import BackgroundTitle from "../../Components/BackgroundTitle";
import GoogleMapComponent from "../../Components/GoogleMapComponent";

const ContactsPage = () => {
    return (
      <div>
          <NavigationBar />
          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <div style={{ width: "100%", margin: "auto" }}>
              <BackgroundTitle
                backgroundTitle="Contacts"
                direction="center"
                fontSize="20vw"
              />
              <div className="contactsPageContactsContent">
                  <div>
                      <div className="contactsPageTitle">
                          <p>Contacts</p>
                      </div>
                      <div className="footerComponentText">
                          <div className="contactUsComponentTextItem">
                              <div className="contactUsSocialIcon"
                                   style={{ backgroundImage: `url(${require("../../Assets/Icons/location.svg").default})` }}
                              />
                              <p>Armenia, Yerevan, 0026 Garegin Njdeh 44</p>
                          </div>
                          <div className="contactUsComponentTextItem">
                              <div className="contactUsSocialIcon"
                                   style={{ backgroundImage: `url(${require("../../Assets/Icons/phone.svg").default})` }}
                              />
                              <p>+374 10 44 84 21</p>
                          </div>
                          <div className="contactUsComponentTextItem">
                              <div className="contactUsSocialIcon"
                                   style={{ backgroundImage: `url(${require("../../Assets/Icons/phone.svg").default})` }}
                              />
                              <p>+374 96 44 84 21</p>
                          </div>
                          <div className="contactUsComponentTextItem">
                              <div className="contactUsSocialIcon"
                                   style={{ backgroundImage: `url(${require("../../Assets/Icons/email.svg").default})` }}
                              />
                              <p>individuumclinic@gmail.com</p>
                          </div>
                      </div>
                  </div>
                  <div>
                      <div className="contactsPageTitle">
                          <p>Find Us</p>
                      </div>
                      <div className="contactUsSocialIconContainer">
                          <a href="https://www.instagram.com/individuum_dental_clinic/?hl=en" target="_blank"
                             rel="noreferrer">
                              <div className="contactUsSocialIcon"
                                   style={{ backgroundImage: `url(${require("../../Assets/Icons/instagram.svg").default})` }}
                              />
                          </a>
                          <a href="https://www.facebook.com/Individuumdentalclinic" target="_blank" rel="noreferrer">
                              <div className="contactUsSocialIcon"
                                   style={{ backgroundImage: `url(${require("../../Assets/Icons/facebook.svg").default})` }}
                              />
                          </a>
                      </div>
                  </div>
              </div>
              <div className="contactsPageMapContent">
                  <div className="contactsPageBackgroundColorsContainer">
                      <div className="contactsPageBackgroundYellowBox" />
                      <div className="contactsPageBackgroundBlueBox" />
                  </div>
                  <div
                    className="contactsPageTitle"
                    style={{ width: "60%", margin: "auto" }}
                  >
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
};

export default ContactsPage;
