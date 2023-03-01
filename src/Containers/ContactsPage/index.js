import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import Footer, { Column, ContactsItem, ContactsList, Icon, SocialItem, Socials } from "../../Components/Footer";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import BackgroundTitle from "../../Components/BackgroundTitle";
import GoogleMapComponent from "../../Components/GoogleMapComponent";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Title from "../../Components/Title";


const Info = styled.div`
  position: relative;
  width: 80%;
  margin: auto;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15vw 20px 5vw;
`;

const WorkingHours = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1vw;
  font-size: 1.5vw;

  p {
    margin-top: 10px;
  }
`;

const ContactsPage = () => {
    const { t } = useTranslation(["navbar", "common"]);
    return (
      <div>
          <NavigationBar />
          <PrincipalsComponent styles={{ marginTop: "5vw" }} />
          <Info>
              <BackgroundTitle
                backgroundTitle={t("navbar:contacts")}
                direction="center"
                fontSize="10vw"
                style={{
                    top: "2vw",
                    width: "100vw",
                    left: "-10%"
                }}
              />
              <Content>
                  <Column>
                      <Title title={t("common:contacts")} style={{ fontSize: "2vw", textAlign: "center" }} />
                      <div>
                          <ContactsList>
                              <ContactsItem>
                                  <img src={require("../../Assets/Icons/location.svg").default} alt="icon" />
                                  <p>Armenia, Yerevan, 0026 Vardanants 2</p>
                              </ContactsItem>
                              <ContactsItem>
                                  <img src={require("../../Assets/Icons/location.svg").default} alt="icon" />
                                  <p>Armenia, Yerevan, 0026 Garegin Njdeh 44</p>
                              </ContactsItem>
                              <ContactsItem>
                                  <img src={require("../../Assets/Icons/phone.svg").default} alt="icon" />
                                  <p>+374 10 44 84 21</p>
                              </ContactsItem>
                              <ContactsItem>
                                  <img src={require("../../Assets/Icons/phone.svg").default} alt="icon" />
                                  <p>+374 96 44 84 21</p>
                              </ContactsItem>
                              <ContactsItem>
                                  <img src={require("../../Assets/Icons/email.svg").default} alt="icon" />
                                  <p>individuumclinic@gmail.com</p>
                              </ContactsItem>
                          </ContactsList>
                      </div>
                  </Column>

                  <Column style={{ alignItems: "center" }}>
                      <Title title={t("common:workingHours")} style={{ fontSize: "2vw", textAlign: "center" }} />
                      <WorkingHours>
                          <p>{t("common:weekdays.monday")} - {t("common:weekdays.saturday")}</p>
                          <p>10:00 - 19:00</p>
                      </WorkingHours>
                  </Column>

                  <Column style={{ flex: 0, minWidth: "15vw", alignItems: "center" }}>
                      <Title title={t("common:findUs")} style={{ fontSize: "2vw", textAlign: "center" }} />
                      <Socials>
                          <SocialItem href="https://www.instagram.com/individuum_dental_clinic/?hl=en">
                              <Icon>
                                  <img
                                    src={require("../../Assets/Icons/instagram.svg").default}
                                    alt="icon"
                                    style={{
                                        width: "35px",
                                        height: "35px"
                                    }}
                                  />
                              </Icon>
                          </SocialItem>
                          <SocialItem href="https://www.facebook.com/Individuumdentalclinic">
                              <Icon>
                                  <img
                                    src={require("../../Assets/Icons/facebook.svg").default}
                                    alt="icon"
                                    style={{
                                        width: "35px",
                                        height: "35px"
                                    }}
                                  />
                              </Icon>
                          </SocialItem>
                      </Socials>
                  </Column>
              </Content>
          </Info>
          <div className="contactsPageMapContent">
              <div className="contactsPageBackgroundColorsContainer">
                  <div className="contactsPageBackgroundYellowBox" />
                  <div className="contactsPageBackgroundBlueBox" />
              </div>
              <div
                className="contactsPageTitle"
                style={{ width: "60%", margin: "auto" }}
              >
                  <p>{t("common:map")}</p>
              </div>
              <div className="contactsPageMapContainer">
                  <GoogleMapComponent />
              </div>
          </div>
          <Footer />
      </div>
    );
};

export default ContactsPage;
