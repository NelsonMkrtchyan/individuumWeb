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
              <div
                className="footerComponentUpperSectionItem footerComponentUpperSectionTextItem footerComponentSecond">
                  <div className="footerComponentTitle">
                      <p>Contacts</p>
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
                      <p>Navigation</p>
                  </div>
                  <ul className="footerTabsContainer">
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
                          <Link to="/services">
                              <p>{t("services")}</p>
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
              </div>
              <div
                className="footerComponentUpperSectionItem footerComponentUpperSectionTextItem footerComponentFourth">
                  <div className="footerComponentTitle">
                      <p>Find Us</p>
                  </div>
                  <div className="footerSocialIconContainer">
                      <a href="https://www.instagram.com/individuum_dental_clinic/?hl=en" target="_blank">
                          <div className="footerSocialIcon"
                               style={{ backgroundImage: `url(${require("../../Assets/Icons/instagram.svg").default})` }}
                          />
                      </a>
                      <a href="https://www.facebook.com/Individuumdentalclinic" target="_blank">
                          <div className="footerSocialIcon"
                               style={{ backgroundImage: `url(${require("../../Assets/Icons/facebook.svg").default})` }}
                          />
                      </a>
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
