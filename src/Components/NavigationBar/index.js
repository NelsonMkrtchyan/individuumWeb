import React from "react";
import {useTranslation} from "react-i18next";
import i18n from "../../Translations/i18n";

const NavigationBar = () => {
    const { t } = useTranslation(["navbar"]);

    const handleOnclick = (lang) => {
        i18n.changeLanguage(lang).then();
    };
    return (
        <div className="navigationBarWrapper">
           <div className="navigationBarContainer">
               <div className="navigationBarLogoContainer"> <div className="navigationBarLogo" /> </div>
               <ul className="navigationBarTabsContainer">
                   <li className="navigationBarTabsItem">
                       <p>{t("aboutUs")}</p>
                   </li>
                   <li className="navigationBarTabsItem">
                       <p>{t("dentists")}</p>
                   </li>
                   <li className="navigationBarTabsItem">
                       <p>{t("aboutUs")}</p>
                   </li>
                   <li className="navigationBarTabsItem">
                       <p>{t("gallery")}</p>
                   </li>
                   <li className="navigationBarTabsItem">
                       <p>{t("contacts")}</p>
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