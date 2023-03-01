import React from "react";
import styled from "styled-components";
import i18n from "../../Translations/i18n";
import { Link } from "react-router-dom";
import { useScreens } from "../../Data/useScreenData";
import ScreenTab from "./ScreenTab";

const Navbar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5vw;

  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1000;
  box-shadow: rgb(149 157 165 / 20%) 0 8px 24px;
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
  padding: 10px;

  &:hover {
    color: #774C91;
    cursor: pointer;
    border-bottom: 1px solid #774C91;
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
    const screens = useScreens();
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
              {screens.map((screen, i) => (
                <ScreenTab
                  key={i}
                  title={screen.name}
                  whereTo={screen.to}
                />
              ))}
          </PagesList>
          <LanguageWrapper>
              <LanguageLink
                selected={i18n.language === "am"}
                backgroundImage={`url(${require("../../Assets/Flags/armenia.svg").default})`}
                onClick={() => handleOnclick("am")}
              />
              <LanguageLink
                selected={i18n.language === "en"}
                backgroundImage={`url(${require("../../Assets/Flags/united-states-of-america.svg").default})`}
                onClick={() => handleOnclick("en")}
              />
          </LanguageWrapper>

      </Navbar>
    );
};

export default NavigationBar;