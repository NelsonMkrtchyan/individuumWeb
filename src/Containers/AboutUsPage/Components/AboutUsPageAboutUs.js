import React from "react";
import BackgroundTitle from "../../../Components/BackgroundTitle";
import { useTranslation } from "react-i18next";
import Title from "../../../Components/Title";
import styled from "styled-components";
import { Content, Image, ImageBox, Left, YellowBox } from "../../../Components/AboutUsComponent";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 20vw;
`;
const Container = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  width: 90%;
  margin-top: 5vw;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Schedule = styled.div`
  margin-top: 10px;
`;
const WorkingHours = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1vw;
  font-size: 1.5vw;
`;


const AboutUsPageAboutUs = () => {
    const { t } = useTranslation(["common"]);
    return (
      <Wrapper>
          <BackgroundTitle
            backgroundTitle={t("navbar:aboutUs")}
            direction="center"
            fontSize="12vw"
            style={{ top: "5vw" }}
          />
          <Title title={t("navbar:aboutUs")} style={{
              fontSize: "2vw",
              paddingLeft: "20vw"
          }}
          />
          <Container>
              <Left>
                  <YellowBox style={{ margin: "8vw 15vw 0 0" }} />
                  <ImageBox style={{
                      top: "0",
                      left: "8vw"
                  }}>
                      <Image src={require("../../../Assets//Images/AboutUsComponent.jpeg")} />
                  </ImageBox>
              </Left>
              <Right>
                  <Content>
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
                  </Content>
                  <Schedule>
                      <Title title={t("common:workingHours")} />
                      <WorkingHours>
                          <p>{t("common:weekdays.monday")} - {t("common:weekdays.saturday")}</p>
                          <p>10:00 - 19:00</p>
                      </WorkingHours>
                  </Schedule>
              </Right>
          </Container>
      </Wrapper>
    );
};

export default AboutUsPageAboutUs;
