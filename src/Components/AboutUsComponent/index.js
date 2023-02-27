import React from "react";
import SeeAllButton from "../SeeAllButton";
import { useTranslation } from "react-i18next";

const AboutUsComponent = ({ styles }) => {
    const { t } = useTranslation(["navbar"]);
    return (
      <div className="aboutUsComponentWrapper" style={{ ...styles }}>
          <div>
              <div className="aboutUsComponentBackgroundTitleContainer">
                  <div>
                      <p>{t("aboutUs")}</p>
                  </div>
              </div>
              <div className="aboutUsComponentColorBox" />
              <div className="aboutUsComponentImage" />
          </div>
          <div className="contentWrapper">
              <div className="contentContainer">
                  <div className="aboutUsComponentLeftContent">
                      <div className="aboutUsComponentLeftContentContainer">
                          <div>
                              <div className="aboutUsComponentTitle">
                                  <p>{t("aboutUs")}</p>
                              </div>
                              <div className="aboutUsComponentText">
                                  <div style={{
                                      width: "100%",
                                      marginRight: "10px"
                                  }}>
                                      <p>
                                          "Ինդիվիդում" ստոմատոլոգիական կլինիկան հիմնադրվել է 2009 թվականի հուլիսին:
                                          Հիմնադրվել է մասնագիտական հմտությամբ, սիրով և պացիենտի հանդեպ հոգատարությամբ,
                                          այսինքն` ճանապարհ դեպի անկաշկանդ ժպիտ կարգախոսով: Իսկ անկաշկանդ ժպիտը կծնվի
                                          առողջ,
                                          խնամված ու գեղեցիկ ատամնաշարի փայլից, ներքին գոհունակությունից,
                                          ինքնավստահությունից և, ինչու չէ, մասնագետի հանդեպ երախտագիտությունից և սեփական
                                          անձի նկատմամբ հարգանքից:
                                      </p>
                                      <br />
                                      <p>
                                          "Ինդիվիդում" ստոմատոլոգիական կլինիկայում բժշկության առանցքային սկզբունքի
                                          գործադրումով ոչ թե հիվանդությունը, այլ հիվանդին են բուժում` յուրաքանչյուր
                                          անձին`
                                          անհատական մոտեցում, յուրաքանչյուր խնդրին` անհատական լուծում նշանաբանով: Մեր
                                          բժիշկների բարձր որակավորումը, բուժանձնակազմի համախմբված աշխատանքը և հոգատար
                                          վերաբերմունքը, ինչպես նաև անկաշկանդ մթնոլորտը, կնպաստեն Ձեր խնդիրների
                                          հնարավորինս որակյալ և հիմնավոր լուծմանը:
                                      </p>
                                      <br />
                                      <p>
                                          Դուք այստեղ չեք դառնա հերթական պացիենտը. Դուք կլինեք Նա` այդ ինդիվիդուումը`
                                          տվյալ
                                          պահին այն միակը, ում ուշադիր անվճար կլսեն, սրտացավորեն կզննեն, հանգամանորեն
                                          կհետազոտեն ու հնարավորինս ճիշտ խորհուրդ կտան` ֆինանսապես, ֆիզիկապես ու
                                          հոգեբանորեն
                                          անցավ:
                                      </p>
                                      <br />
                                      <p>
                                          "Ինդիվիդում"-ի բուժանձնակազմը պարբերաբար մասնակցում է արտասահմանյան և
                                          հայրենական
                                          գիտաժողովներին ու սեմինարներին:
                                          "Ինդիվիդում" ստոմատոլոգիական կլինիկան հագեցված է ժամանակակից սարքավորումներով
                                          և
                                          մատուցում է ոլորտում առկա արդիական չափանիշներին համապատասխան ծառայություններ`
                                          խստագույն պահպանելով ախտահանման կանոնները:
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="aboutUsComponentButtonContainer">
                              <SeeAllButton text={t("common:seeAll")} whereTo="aboutUs" />
                          </div>
                      </div>
                  </div>
                  <div className="aboutUsComponentRightContent" />
              </div>
          </div>
      </div>
    );
};

export default AboutUsComponent;
