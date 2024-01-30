import { AppBar, Drawer, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useEffect, useState } from "react";
import ScreenTab from "./ScreenTab";
import { useScreens } from "../../Data/useScreenData";
import {
    DrawerLanguageWrapper,
    DrawerPagesList,
    LanguageLink,
    LanguageWrapper,
    Logo,
    LogoWrapper,
    PagesList
} from "./StyleComponents";
import i18n from "../../Translations/i18n";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "white",
        color: "black",
        "@media (max-width: 900px)": {
            paddingLeft: 0
        },
        position: "sticky",
        padding: "10px 0"
    },
    toolbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    drawerContainer: {
        padding: "20px 30px"
    }
}));


export default function Header() {
    const handleOnclick = (lang) => {
        i18n.changeLanguage(lang).then();
    };
    const screens = useScreens();
    const { header, toolbar, drawerContainer } = useStyles();

    const [{ mobileView, drawerOpen }, setState] = useState({
        mobileView: false,
        drawerOpen: false
    });


    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
              ? setState((prevState) => ({ ...prevState, mobileView: true }))
              : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    const displayMobile = () => {
        const handleDrawerOpen = () =>
          setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
          setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
          <Toolbar>
              <IconButton
                {...{
                    edge: "start",
                    color: "inherit",
                    "aria-label": "menu",
                    "aria-haspopup": "true",
                    onClick: handleDrawerOpen
                }}
              >
                  <MenuIcon />
              </IconButton>

              <Drawer
                {...{
                    anchor: "left",
                    open: drawerOpen,
                    onClose: handleDrawerClose
                }}
                PaperProps={{ style: { width: "50%" } }}
              >
                  <div className={drawerContainer}>{getDrawerChoices()}</div>
              </Drawer>

              <div>{individuumLogo}</div>
          </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return <>
            <DrawerPagesList>
                {screens.map((screen, i) => (
                  <ScreenTab
                    key={i}
                    title={screen.name}
                    whereTo={screen.to}
                  />
                ))
                }
            </DrawerPagesList>
            <DrawerLanguageWrapper>
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
            </DrawerLanguageWrapper>
        </>;
    };

    const individuumLogo = (
      <LogoWrapper>
          <Logo href="/">
              <img src={require("../../Assets/Images/IndividuumLogo.png")} alt="individuum logo" />
          </Logo>
      </LogoWrapper>
    );

    const getMenuButtons = () => {
        return (
          <>
              <PagesList>
                  {screens.map((screen, i) => (
                    <ScreenTab
                      key={i}
                      title={screen.name}
                      whereTo={screen.to}
                    />
                  ))
                  }
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
          </>
        );
    };

    return (
      <header>
          <AppBar className={header}>
              {mobileView
                ? displayMobile()
                : (
                  <Toolbar className={toolbar}>
                      {individuumLogo}
                      {getMenuButtons()}
                  </Toolbar>
                )
              }
          </AppBar>
      </header>
    );
}
