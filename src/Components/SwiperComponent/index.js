import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from "swiper";

const SwiperComponent = () => {
    return (
        <div className="swiperComponentContainer">
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                // enteredSlides={true}
                pagination={{
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="swiperComponent"
            >
                <SwiperSlide>
                    <div className="swiperComponentSlideImage"/>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperComponentSlideImage"/>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperComponentSlideImage"/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperComponent;