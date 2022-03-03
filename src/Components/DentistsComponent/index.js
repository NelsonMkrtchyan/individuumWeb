import React from "react";
import DentistComponentCard from "./DentistComponentCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import { FreeMode } from "swiper";

const DentistsComponent = () => {
    return (
        <div className="dentistsComponentWrapper">
            <div>
                <div className="dentistsComponentBackgroundTitleContainer">
                    <div>
                        <p>Dentists</p>
                    </div>
                </div>
                <div className="dentistsComponentColorBox"/>
                <div className="dentistsComponentColorBoxYellow"/>
            </div>
            <div className="dentistsComponentContentContainer">
                <div className="dentistsComponentTitle">
                    <p>
                        Dentists
                    </p>
                </div>
                <div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <DentistComponentCard
                                imageClass="imageVarazdat"
                                name="Varazdat Tangamyan"
                                role="Doctor - Dentist - Implantologist"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <DentistComponentCard
                                imageClass="imageMarine"
                                name="Marine Mkrtchyan"
                                role="Doctor - Dentist - Implantologist"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <DentistComponentCard
                                imageClass="imageAida"
                                name="Aida Babayan"
                                role="Doctor - Dentist - Implantologist"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <DentistComponentCard
                                imageClass="imageVarazdat"
                                name="Varazdat Tangamyan"
                                role="Doctor - Dentist - Implantologist"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <DentistComponentCard
                                imageClass="imageMarine"
                                name="Marine Mkrtchyan"
                                role="Doctor - Dentist - Implantologist"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <DentistComponentCard
                                imageClass="imageAida"
                                name="Aida Babayan"
                                role="Doctor - Dentist - Implantologist"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default DentistsComponent;