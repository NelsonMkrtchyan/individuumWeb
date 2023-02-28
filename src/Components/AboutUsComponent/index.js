import React from "react";
import Button from "../Button";
import { useTranslation } from "react-i18next";
import BackgroundTitle from "../BackgroundTitle";
import Title from "../Title";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  margin-top: 5vw;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`;
const Right = styled.div`
  flex: 1;
  height: 57vw;
  display: flex;
  justify-content: flex-end;
`;
const LeftContainer = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Content = styled.div`
  line-height: 1.5vw;
  color: #707070;
`;
export const YellowBox = styled.div.attrs((style) => ({
    ...style
}))`
  height: 47vw;
  width: 36vw;
  border-radius: 3vw;
  background-color: #ECBE21;
`;
export const ImageBox = styled.div.attrs((style) => ({
    ...style
}))`
  height: 47vw;
  width: 36vw;
  position: absolute;
`;
export const Image = styled.img.attrs((style) => ({
    ...style,
    alt: "About us Image"
}))`
  height: 100%;
  width: auto;
  border-radius: 3vw;
`;


const AboutUsComponent = () => {
    const { t } = useTranslation(["navbar", "common"]);
    return (
      <Container>
          <Left>
              <LeftContainer>
                  <Title title={t("navbar:aboutUs")} />
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
                  <Button
                    text={t("common:seeAll")}
                    whereTo="aboutUs"
                    style={{ position: "absolute", bottom: 0 }}
                  />
              </LeftContainer>
          </Left>
          <Right>
              <YellowBox style={{ margin: "0 2vw 0 0" }} />
              <ImageBox style={{
                  right: "8vw",
                  top: "10vw"
              }}>
                  <Image src={require("../../Assets/Images/AboutUsComponent.jpeg")} />
              </ImageBox>
          </Right>
          <BackgroundTitle
            backgroundTitle={t("navbar:aboutUs")}
            fontSize="12vw"
            style={{ top: 0 }}
          />
      </Container>
    );
};

export default AboutUsComponent;
