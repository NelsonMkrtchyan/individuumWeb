import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper";
import { getSwiperImages } from "../../Data/swiperImages";

const SwiperComponent = () => {
      const swiperImages = getSwiperImages();
      return (
        <div className="swiperComponentContainer">
            <Swiper
              autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
              }}
              loop={true}
              pagination={{
                  dynamicBullets: true
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="swiperComponent"
            >
                {swiperImages.map((image) => {
                    return (
                      <SwiperSlide>
                          <div className="swiperComponentSlideImage"
                               style={{ backgroundImage: `url("${image.src}")` }} />
                          <div className="swiperComponentWatermark">
                              {/*<div className="swiperComponentIcon"*/}
                              {/*     style={{ backgroundImage: `url("${require("../../Assets/Images/LandingSwiper/swiperIcon.svg").default}")` }} />*/}
                              {/*<div className="swiperComponentWatermarkText">*/}
                              {/*    <p>Individuum Clinic</p>*/}
                              {/*</div>*/}
                          </div>
                      </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
      );
  }
;

export default SwiperComponent;
