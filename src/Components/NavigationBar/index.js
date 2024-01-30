import React from "react";
import i18n from "../../Translations/i18n";
import { useScreens } from "../../Data/useScreenData";
import ScreenTab from "./ScreenTab";
import { LanguageLink, LanguageWrapper, Logo, LogoWrapper, Navbar, PagesList } from "./StyleComponents";

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
