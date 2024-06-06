import React from "react";
import Footer, {Column, ContactsItem, Icon, List, SocialItem, Socials} from "../../Components/Footer";
import PrincipalsComponent from "../../Components/PrincipalsComponent";
import BackgroundTitle from "../../Components/BackgroundTitle";
import GoogleMapComponent from "../../Components/GoogleMapComponent";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import Title from "../../Components/Title";


const Info = styled.div`
    position: relative;
    width: 90%;
    margin: auto;
`;
const Content = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 15vw 20px 5vw;
`;

export const WorkingHours = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 1vw;
    font-size: 1.1rem;

    p {
        margin-top: 10px;
    }
`;

const ContactsPage = () => {
    const {t} = useTranslation(["navbar", "common"]);
    return (
        <div>
            <PrincipalsComponent styles={{marginTop: "5vw"}}/>
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

                    <Column style={{flex: 1}}>
                        <Title title={"Վարդանանց մասնաճուղ"} style={{textAlign: "center", fontSize: "1.5vw"}}/>
                        <List>
                            <ContactsItem>
                                <img src={require("../../Assets/Icons/location.svg").default} alt="icon"/>
                                <p>{t("common:address1")}</p>
                            </ContactsItem>
                        </List>
                        <List>
                            <ContactsItem>
                                <img src={require("../../Assets/Icons/phone.svg").default} alt="icon"/>
                                <p>+374 10 58 05 49</p>
                            </ContactsItem>
                            <ContactsItem>
                                <img src={require("../../Assets/Icons/phone.svg").default} alt="icon"/>
                                <p>+374 41 44 84 21</p>
                            </ContactsItem>
                        </List>
                        <List>

                            <WorkingHours>
                                <p>{t("common:weekdays.monday")} - {t("common:weekdays.saturday")}</p>
                                <p>11:00 - 20:00</p>
                            </WorkingHours>
                        </List>

                    </Column>

                    <Column style={{flex: 1}}>
                        <Title title={"Գարեգին Նժդեհ մասնաճուղ"} style={{textAlign: "center", fontSize: "1.5vw"}}/>
                        <List>

                            <ContactsItem>
                                <img src={require("../../Assets/Icons/location.svg").default} alt="icon"/>
                                <p>{t("common:address2")}</p>
                            </ContactsItem>
                        </List>
                        <List>
                            <ContactsItem>
                                <img src={require("../../Assets/Icons/phone.svg").default} alt="icon"/>
                                <p>+374 10 44 84 21</p>
                            </ContactsItem>
                            <ContactsItem>
                                <img src={require("../../Assets/Icons/phone.svg").default} alt="icon"/>
                                <p>+374 96 44 84 21</p>
                            </ContactsItem>
                        </List>
                        <List>
                            <WorkingHours>
                                <p>{t("common:weekdays.monday")} - {t("common:weekdays.saturday")}</p>
                                <p>10:00 - 19:00</p>
                            </WorkingHours>
                        </List>
                    </Column>


                    {/*<Column style={{ flex: 1 }}>*/}
                    {/*    <Title title={t("common:address")} style={{ textAlign: "center", fontSize: "1.5vw" }} />*/}
                    {/*    <List>*/}
                    {/*        <ContactsItem>*/}
                    {/*            <img src={require("../../Assets/Icons/location.svg").default} alt="icon" />*/}
                    {/*            <p>{t("common:address1")}</p>*/}
                    {/*        </ContactsItem>*/}
                    {/*        <ContactsItem>*/}
                    {/*            <img src={require("../../Assets/Icons/location.svg").default} alt="icon" />*/}
                    {/*            <p>{t("common:address2")}</p>*/}
                    {/*        </ContactsItem>*/}
                    {/*    </List>*/}
                    {/*</Column>*/}
                    {/*<Column style={{ flex: 1 }}>*/}
                    {/*    <Title title={t("common:contacts")} style={{ textAlign: "center", fontSize: "1.5vw" }} />*/}
                    {/*    <List>*/}
                    {/*        <ContactsItem>*/}
                    {/*            <img src={require("../../Assets/Icons/phone.svg").default} alt="icon" />*/}
                    {/*            <p>+374 10 44 84 21</p>*/}
                    {/*        </ContactsItem>*/}
                    {/*        <ContactsItem>*/}
                    {/*            <img src={require("../../Assets/Icons/phone.svg").default} alt="icon" />*/}
                    {/*            <p>+374 96 44 84 21</p>*/}
                    {/*        </ContactsItem>*/}
                    {/*        <ContactsItem>*/}
                    {/*            <img src={require("../../Assets/Icons/email.svg").default} alt="icon" />*/}
                    {/*            <p>individuumclinic@gmail.com</p>*/}
                    {/*        </ContactsItem>*/}
                    {/*    </List>*/}
                    {/*</Column>*/}
                    {/*<Column style={{ alignItems: "center" }}>*/}
                    {/*    <Title title={t("common:workingHours")} style={{ fontSize: "1.5vw", textAlign: "center" }} />*/}
                    {/*    <WorkingHours>*/}
                    {/*        <p>{t("common:weekdays.monday")} - {t("common:weekdays.saturday")}</p>*/}
                    {/*        <p>10:00 - 19:00</p>*/}
                    {/*    </WorkingHours>*/}
                    {/*</Column>*/}
                    <Column style={{ flex: 0, minWidth: "15vw", alignItems: "center" }}>
                        <Title title={t("common:findUs")} style={{ fontSize: "1.5vw", textAlign: "center" }} />
                        <Socials>
                            <SocialItem href="https://www.instagram.com/individuum_dental_clinic/?hl=en">
                                <Icon>
                                    <img
                                      src={require("../../Assets/Icons/instagram.svg").default}
                                      alt="icon"
                                    />
                                </Icon>
                            </SocialItem>
                            <SocialItem href="https://www.facebook.com/Individuumdentalclinic">
                                <Icon>
                                    <img
                                      src={require("../../Assets/Icons/facebook.svg").default}
                                      alt="icon"
                                    />
                                </Icon>
                            </SocialItem>
                        </Socials>
                        <List>
                            <ContactsItem>
                                <img src={require("../../Assets/Icons/email.svg").default} alt="icon" />
                                <p>individuumclinic@gmail.com</p>
                            </ContactsItem>
                        </List>
                    </Column>
                </Content>
            </Info>
            <div className="contactsPageMapContent">
                <div className="contactsPageBackgroundColorsContainer">
                    <div className="contactsPageBackgroundYellowBox"/>
                    <div className="contactsPageBackgroundBlueBox"/>
                </div>
                <Title
                    title={t("common:map")}
                    style={{
                        fontSize: "2vw",
                        width: "60%",
                        margin: "auto auto 5vw"
                    }}/>
                <div className="contactsPageMapContainer">
                    <GoogleMapComponent/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ContactsPage;
