import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { FreeMode } from "swiper";
import SeeAllButton from "../SeeAllButton";
import DentistCard from "../../Containers/DentistsPage/Components/DentistCard";
import { getDentistsInfo } from "../../Data/dentistsInfo";

const DentistsComponent = () => {
    const dentistsInfo = getDentistsInfo();
    return (
      <div className="dentistsComponentWrapper">
          <div>
              <div className="dentistsComponentBackgroundTitleContainer">
                  <div>
                      <p>Dentists</p>
                  </div>
              </div>
              <div className="dentistsComponentColorBox" />
              {/*<div className="dentistsComponentColorBoxYellow"/>*/}
          </div>
          <div className="dentistsComponentContentContainer">
              <div className="dentistsComponentTitle">
                  <p>Dentists</p>
              </div>
              <div>
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="dentistsSwiper"
                  >
                      {dentistsInfo.map((dentist) => {
                          return (
                            <SwiperSlide>
                                <DentistCard
                                  key={dentist.id}
                                  id={dentist.id}
                                  name={dentist.firstName + " " + dentist.secondName}
                                  position={dentist.position}
                                  imageSrc={dentist.imageSrc}
                                  whereIs="dentistsComponent"
                                />
                            </SwiperSlide>
                          );
                      })}
                  </Swiper>
              </div>
              <div className="dentistsButtonContainer">
                  <SeeAllButton whereTo="dentists" />
              </div>
          </div>
      </div>
    );
};

export default DentistsComponent;
