import React from "react";
import { useTranslation } from "react-i18next";
import { PageLink, PagesList } from "../NavigationBar";

const Footer = () => {
    const { t } = useTranslation(["navbar", "common"]);

    return (
      <div className="footerComponentContainer">
          <div className="footerComponentUpperSection">
              <div className="footerComponentUpperSectionItem footerComponentFirst">
                  <div className="footerComponentLogo" />
              </div>
              <div
                className="footerComponentUpperSectionItem footerComponentUpperSectionTextItem footerComponentSecond">
                  <div className="footerComponentTitle">
                      <p>{t("common:contacts")}</p>
                  </div>
                  <div className="footerComponentText">
                      <div className="footerComponentTextItem">
                          <div className="footerSocialIcon"
                               style={{ backgroundImage: `url(${require("../../Assets/Icons/location.svg").default})` }}
                          />
                          <p>Armenia, Yerevan, 0026 Garegin Njdeh 44</p>
                      </div>
                      <div className="footerComponentTextItem">
                          <div className="footerSocialIcon"
                               style={{ backgroundImage: `url(${require("../../Assets/Icons/phone.svg").default})` }}
                          />
                          <p>+374 10 44 84 21</p>
                      </div>
                      <div className="footerComponentTextItem">
                          <div className="footerSocialIcon"
                               style={{ backgroundImage: `url(${require("../../Assets/Icons/phone.svg").default})` }}
                          />
                          <p>+374 96 44 84 21</p>
                      </div>
                      <div className="footerComponentTextItem">
                          <div className="footerSocialIcon"
                               style={{ backgroundImage: `url(${require("../../Assets/Icons/email.svg").default})` }}
                          />
                          <p>individuumclinic@gmail.com</p>
                      </div>
                  </div>
              </div>
              <div className="footerComponentUpperSectionItem footerComponentUpperSectionTextItem footerComponentThird">
                  <div className="footerComponentTitle">
                      <p>{t("common:navigation")}</p>
                  </div>
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
              </div>
              <div
                className="footerComponentUpperSectionItem footerComponentUpperSectionTextItem footerComponentFourth">
                  <div className="footerComponentTitle">
                      <p>{t("common:findUs")}</p>
                  </div>
                  <div className="footerSocialIconContainer">
                      <a href="https://www.instagram.com/individuum_dental_clinic/?hl=en" target="_blank"
                         rel="noreferrer">
                          <div className="footerSocialIcon"
                               style={{ backgroundImage: `url(${require("../../Assets/Icons/instagram.svg").default})` }}
                          />
                      </a>
                      <a href="https://www.facebook.com/Individuumdentalclinic" target="_blank" rel="noreferrer">
                          <div className="footerSocialIcon"
                               style={{ backgroundImage: `url(${require("../../Assets/Icons/facebook.svg").default})` }}
                          />
                      </a>
                  </div>
              </div>
          </div>
          <div className="footerComponentLowerSection">
              <div className="footerComponentCopyright">
                  <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved</p>
              </div>
          </div>
      </div>
    );
};

export default Footer;
