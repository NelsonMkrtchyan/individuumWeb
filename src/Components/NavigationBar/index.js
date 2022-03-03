import React from "react";
import {useTranslation} from "react-i18next";
import i18n from "../../Translations/i18n";
import {Link} from "react-router-dom";

const NavigationBar = () => {
    const { t } = useTranslation(["navbar"]);

    const handleOnclick = (lang) => {
        i18n.changeLanguage(lang).then();
    };
    return (
        <div className="navigationBarWrapper">
           <div className="navigationBarContainer">
               <Link to="/" className="navigationBarLogoContainer"> <div className="navigationBarLogo" /> </Link>
               <ul className="navigationBarTabsContainer">
                   <li className="navigationBarTabsItem">
                       <Link to="/aboutUs">
                           <p>{t("aboutUs")}</p>
                       </Link>
                   </li>
                   <li className="navigationBarTabsItem">
                       <Link to="/dentists">
                        <p>{t("dentists")}</p>
                       </Link>
                   </li>
                   <li className="navigationBarTabsItem">
                       <Link to="/priceList">
                           <p>{t("priceList")}</p>
                       </Link>
                   </li>
                   <li className="navigationBarTabsItem">
                       <Link to="/gallery">
                           <p>{t("gallery")}</p>
                       </Link>
                   </li>
                   <li className="navigationBarTabsItem">
                       <Link to={"/contacts"}>
                           <p>{t("contacts")}</p>
                       </Link>
                   </li>
               </ul>
               <ul className="navigationBarLanguageContainer">
                   <li className="countryFlag" onClick={() => handleOnclick("en")}>
                       <div><p>English</p></div>
                   </li>
                   <li className="countryFlag" onClick={() => handleOnclick("am")}>
                       <div><p>Հայերեն</p></div>
                   </li>
               </ul>
           </div>
        </div>
    )
};

export default NavigationBar;