import React from "react";
import BackgroundTitle from "../../../Components/BackgroundTitle";
import { useTranslation } from "react-i18next";
import Title from "../../../Components/Title";
import styled from "styled-components";
import { Content, Image, ImageBox, Left, YellowBox } from "../../../Components/AboutUsComponent";
import { useAboutUsData } from "../../../Hooks/useAboutUsData";

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
    const aboutUsData = useAboutUsData();
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
                      {aboutUsData}
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
