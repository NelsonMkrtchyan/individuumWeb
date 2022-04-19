import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import { FreeMode } from "swiper";
import SeeAllButton from "../SeeAllButton";
import DentistCard from "../../Containers/DentistsPage/Components/DentistCard";

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
                {/*<div className="dentistsComponentColorBoxYellow"/>*/}
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
                        className="dentistsSwiper"
                    >
                        <SwiperSlide>
                            <DentistCard
                                name="Varazdat Tangamyan"
                                position="Doctor"
                                imageSrc={require("../../Assets/Images/Varazdat.png")}
                                whereIs="dentistsComponent"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <DentistCard
                                name="Marine Mkrtchyan"
                                position="Doctor - Dentist - Implantologist"
                                imageSrc={require("../../Assets/Images/Marine.png")}
                                whereIs="dentistsComponent"
                            />

                        </SwiperSlide>
                        <SwiperSlide>
                            <DentistCard
                                name="Aida Babayan"
                                position="Doctor - Dentist - Implantologist"
                                imageSrc={require("../../Assets/Images/Aida.png")}
                                whereIs="dentistsComponent"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <DentistCard
                                name="Varazdat Tangamyan"
                                position="Doctor"
                                imageSrc={require("../../Assets/Images/Varazdat.png")}
                                whereIs="dentistsComponent"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <DentistCard
                                name="Marine Mkrtchyan"
                                position="Doctor - Dentist - Implantologist"
                                imageSrc={require("../../Assets/Images/Marine.png")}
                                whereIs="dentistsComponent"
                            />

                        </SwiperSlide>
                        <SwiperSlide>
                            <DentistCard
                                name="Aida Babayan"
                                position="Doctor - Dentist - Implantologist"
                                imageSrc={require("../../Assets/Images/Aida.png")}
                                whereIs="dentistsComponent"
                            />
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div className="dentistsButtonContainer">
                    <SeeAllButton />
                </div>
            </div>
        </div>
    );
};

export default DentistsComponent;