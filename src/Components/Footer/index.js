import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(["navbar"]);

  return (
    <div className="footerComponentContainer">
      <div className="footerComponentUpperSection">
        <div className="footerComponentUpperSectionItem footerComponentFirst">
          <div className="footerComponentLogo" />
        </div>
        <div className="footerComponentUpperSectionItem footerComponentUpperSectionTextItem footerComponentSecond">
          <div className="footerComponentTitle">
            <p>Contacts</p>
          </div>
          <div className="footerComponentText">
            <div className="footerComponentTextItem">
              <p>Armenia, Yerevan, 0026 Garegin Njdeh 44</p>
            </div>
            <div className="footerComponentTextItem">
              <p>+374 10 44 84 21</p>
            </div>
            <div className="footerComponentTextItem">
              <p>+374 96 44 84 21</p>
            </div>
            <div className="footerComponentTextItem">
              <p>individuumclinic@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footerComponentUpperSectionItem footerComponentUpperSectionTextItem footerComponentThird">
          <div className="footerComponentTitle">
            <p>Navigation</p>
          </div>
          <div className="footerComponentText">
            <div className="footerComponentTextItem footerNavigation">
              <Link to={"/aboutUs"}>
                <p>{t("aboutUs")}</p>
              </Link>
            </div>
            <div className="footerComponentTextItem footerNavigation">
              <Link to={"/dentists"}>
                <p>{t("dentists")}</p>
              </Link>
            </div>
            <div className="footerComponentTextItem footerNavigation">
              <Link to={"/priceList"}>
                <p>{t("priceList")}</p>
              </Link>
            </div>
            <div className="footerComponentTextItem footerNavigation">
              <Link to={"/gallery"}>
                <p>{t("gallery")}</p>
              </Link>
            </div>
            <div className="footerComponentTextItem footerNavigation">
              <Link to={"/contacts"}>
                <p>{t("contacts")}</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="footerComponentUpperSectionItem footerComponentUpperSectionTextItem footerComponentFourth">
          <div className="footerComponentTitle">
            <p>Find Us</p>
          </div>
          <div className="footerComponentText">
            <div className="footerComponentTextItem">
              <p>Facebook</p>
            </div>
            <div className="footerComponentTextItem">
              <p>Instagram</p>
            </div>
            <div className="footerComponentTextItem">
              <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footerComponentLowerSection">
        <div className="footerComponentCopyright">
          <p>Copyright</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
