import React from "react";
import {useTranslation} from "react-i18next";
import i18n from "../../Translations/i18n";

const NavigationBar = () => {
    const { t } = useTranslation(["navbar"]);

    const handleOnclick = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value).then();
    };
    return (
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
           <div className="navigationBarLanguageContainer">
               <div className="countryFlag" />
               <button value="en" onClick={handleOnclick}>
                   English
               </button>
               <button value="am" onClick={handleOnclick}>
                   Հայերեն
               </button>
           </div>
        </div>
    )
};

export default NavigationBar;