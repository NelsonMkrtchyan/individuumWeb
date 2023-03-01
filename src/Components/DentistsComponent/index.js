import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { FreeMode } from "swiper";
import Button from "../Button";
import UserCard from "../../Containers/DentistsPage/Components/UserCard";
import { getDentistsInfo } from "../../Data/dentistsInfo";
import { useTranslation } from "react-i18next";
import { Container } from "../Styles";
import styled from "styled-components";
import BackgroundTitle from "../BackgroundTitle";

const BlueBox = styled.div.attrs((style) => ({
    ...style
}))`
  height: 30vw;
  width: 30vw;
  border-radius: 3vw;
  background-color: #777FB0;
  position: absolute;
  left: -3vw;
  bottom: 10vw;
`;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;
const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  display: flex;
`;
const DentistsComponent = () => {
    const { t } = useTranslation(["navbar"]);
    const dentistsInfo = getDentistsInfo();
    return (
      <Container style={{ width: "100%", height: "50vw", flexDirection: "column" }}>
          <>
              <BackgroundTitle
                backgroundTitle={t("navbar:dentists")}
                fontSize="10vw"
                style={{ top: 0, textAlign: "end" }}
              />
              {/*<Title*/}
              {/*  title={t("navbar:dentists")}*/}
              {/*  style={{*/}
              {/*      position: "absolute",*/}
              {/*      top: "7vw",*/}
              {/*      // right: "25vw",*/}
              {/*      left: 0,*/}
              {/*      zIndex: 100,*/}
              {/*      textAlign: "end",*/}
              {/*      fontSize: "2vw",*/}
              {/*      fontStretch: "expanded",*/}
              {/*      fontWeight: "bold"*/}
              {/*  }}*/}
              {/*/>*/}
              <BlueBox />
          </>
          <Wrapper style={{ flex: 1 }}>
              <SwiperWrapper>
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    freeMode={true}
                    modules={[FreeMode]}
                    style={{
                        width: "85%",
                        margin: "auto 0 auto auto",
                        backgroundColor: "transparent"
                    }}
                    className="dentistsSwiper"
                  >
                      {dentistsInfo.map((dentist) => {
                          return (
                            <SwiperSlide>
                                <UserCard
                                  key={dentist.id}
                                  id={dentist.id}
                                  name={dentist.firstName + " " + dentist.secondName}
                                  position={dentist.position}
                                  imageSrc={dentist.imageSrc}
                                  isSwiper={true}
                                />
                            </SwiperSlide>
                          );
                      })}
                  </Swiper>
              </SwiperWrapper>
              <Button
                text={t("common:seeAll")}
                whereTo="dentists"
                style={{ position: "relative", marginRight: "15vw" }}
              />
          </Wrapper>

      </Container>
    );
};

export default DentistsComponent;
