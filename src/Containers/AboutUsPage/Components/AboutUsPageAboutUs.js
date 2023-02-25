import React from "react";
import BackgroundTitle from "../../../Components/BackgroundTitle";
import { useTranslation } from "react-i18next";

const AboutUsPageAboutUs = ({ styles }) => {
    const { t } = useTranslation(["common"]);
    return (
      <div className="aboutUsPageAboutUsWrapper" style={{ ...styles }}>
          <BackgroundTitle
            backgroundTitle={t("common:aboutUs.title")}
            direction="center"
            fontSize="18vw"
          />
          <div className="aboutUsPageAboutUsContainer">
              <div className="aboutUsPageAboutUsTitle">{t("common:aboutUs.title")}</div>
              <div className="aboutUsPageAboutUsContainerContent">
                  <div className="aboutUsPageAboutUsImageContainer">
                      <div className="aboutUsPageColorBox /" />
                      <div className="aboutUsPageAboutUsImage" />
                  </div>
                  <div className="aboutUsPageAboutUsTextContainer">
                      <div className="aboutUsPageAboutUsText">
                          <div>
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
                      <div className="aboutUsPageAboutUsFooter">
                          <div className="aboutUsPageAboutUsWorkingHoursTitle">
                              <p>{t("common:aboutUs.workingHours")}</p>
                          </div>
                          <div className="aboutUsPageAboutUsHoursContainer">
                              <p className="aboutUsPageAboutUsHours">Monday-Saturday</p>
                              <p className="aboutUsPageAboutUsHours">10:00 - 19:00</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default AboutUsPageAboutUs;
