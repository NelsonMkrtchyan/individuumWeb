import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import i18n from "../../Translations/i18n";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5vw;
`;
const LogoWrapper = styled.div`
  img {
    height: 60px;
    display: block;
  }
`;
const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  margin-right: auto;
`;
export const PagesList = styled.ul`
  display: flex;
  flex-direction: ${props => (props.footer ? "column" : "row")};
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;

  li {
    padding: ${props => (props.footer ? "10px" : "0")};
  }


`;
export const PageLink = styled(Link)`
  font-size: 1rem;
  color: inherit;
  text-decoration: none;
  padding: 10px;

  &:hover {
    color: #774C91;
    cursor: pointer;
    border-bottom: 1px solid #774C91;
    text-decoration: none;
  }
`;
const LanguageWrapper = styled.ul`
  display: flex;
`;
const LanguageLink = styled.li`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  align-self: center;

  background-image: ${props => (props.backgroundImage)};
  background-size: cover;
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
  padding: ${props => (props.selected && "2px")};
  border-bottom: ${props => (props.selected && "3px solid #774C91")};
`;

const NavigationBar = () => {
    const { t } = useTranslation(["navbar"]);
    const handleOnclick = (lang) => {
        i18n.changeLanguage(lang).then();
    };
    return (
      <Navbar>
          <LogoWrapper>
              <Logo href="/">
                  <img src={require("../../Assets/Images/IndividuumLogo.png")} alt="DevBabu.com" />
              </Logo>
          </LogoWrapper>
          <PagesList>
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
          <LanguageWrapper>
              <LanguageLink
                selected={i18n.language === "en"}
                backgroundImage={`url(${require("../../Assets/Flags/united-states-of-america.svg").default})`}
                onClick={() => handleOnclick("en")}
              />
              <LanguageLink
                selected={i18n.language === "am"}
                backgroundImage={`url(${require("../../Assets/Flags/armenia.svg").default})`}
                onClick={() => handleOnclick("am")}
              />
          </LanguageWrapper>

      </Navbar>
    );
};

export default NavigationBar;