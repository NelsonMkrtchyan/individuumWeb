import React from "react";
import { useTranslation } from "react-i18next";
import { PageLink, PagesList } from "../NavigationBar";
import Title from "../Title";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5vw;
`;
const UpperContainer = styled.div`
  flex: 1;
  background-color: #F0F0F0;
  display: flex;
  flex-direction: row;
  padding: 10px 5vw;
`;
const LowerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3vw;
  background-color: #777FB0;

  p {
    color: white;
  }
`;
export const Column = styled.div.attrs((style) => ({
    ...style
}))`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const ContactsList = styled.ul`
  flex: 1;
  list-style: none;

  li {
    padding: ${props => (props.footer ? "10px" : "0")};
  }
`;
export const ContactsItem = styled("li")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  font-size: 1.1rem;
  color: inherit;

  &:hover {
    cursor: copy;
  }
`;
export const Socials = styled.div`
  flex: 2;
  padding-bottom: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  a {
    margin-bottom: 1vw;
  }
`;
export const SocialItem = styled("a").attrs(() => ({
    target: "_blank",
    rel: "noreferrer"
}))``;

export const Icon = styled.div`
  display: flex;
  cursor: pointer;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  font-size: 1.1rem;
  color: inherit;
`;


const Footer = () => {
    const { t } = useTranslation(["navbar", "common"]);

    return (
      <Wrapper>
          <UpperContainer>
              <LogoContainer>
                  <PageLink to="/">
                      <img style={{
                          width: "auto",
                          height: "200px"
                      }} src={require("../../Assets/Images/FooterLogo.png")} alt="icon" />
                  </PageLink>
              </LogoContainer>
              <Column style={{ flex: 1 }}>
                  <Title title={t("common:contacts")} style={{ textAlign: "center" }} />
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
              </Column>
              <Column style={{ flex: 1, alignItems: "center" }}>
                  <Title title={t("common:navigation")} />
                  <PagesList footer={true}>
                      <li>
                          <PageLink to="/aboutUs">{t("aboutUs")}</PageLink>
                      </li>
                      <li>
                          <PageLink to="/dentists">{t("dentists")}</PageLink>
                      </li>
                      <li>
                          <PageLink to="/priceList">{t("priceList")}</PageLink>
                      </li>
                      <li>
                          <PageLink to="/services">{t("services")}</PageLink>
                      </li>
                      <li>
                          <PageLink to="/gallery">{t("gallery")}</PageLink>
                      </li>
                      <li>
                          <PageLink to="/contacts">{t("contacts")}</PageLink>
                      </li>
                  </PagesList>
              </Column>
              <Column style={{ flex: 0, minWidth: "10vw", alignItems: "center" }}>
                  <Title title={t("common:findUs")} />
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
          </UpperContainer>
          <LowerContainer>
              <div>
                  <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved</p>
              </div>
          </LowerContainer>
      </Wrapper>
    );
};

export default Footer;
