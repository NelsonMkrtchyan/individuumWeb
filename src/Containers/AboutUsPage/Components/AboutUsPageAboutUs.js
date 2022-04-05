import React from "react";

const AboutUsPageAboutUs = ({styles}) => {
    return (
        <div className="aboutUsPageAboutUsWrapper" style={{...styles}}>
            <div className="aboutUsPageAboutUsBackgroundTitleContainer">
                <div>
                    <p>About Us</p>
                </div>
            </div>
            <div className="aboutUsPageAboutUsContainer">
                <div className="aboutUsPageAboutUsTitle">
                    About Us
                </div>
                <div className="aboutUsPageAboutUsContainerContent">
                    <div className="aboutUsPageAboutUsImageContainer">
                        <div className="aboutUsPageColorBox /" />
                        <div className="aboutUsPageAboutUsImage" />

                    </div>
                    <div className="aboutUsPageAboutUsTextContainer">
                        <div className="aboutUsPageAboutUsText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </div>
                        <div className="aboutUsPageAboutUsFooter">
                            <div className="aboutUsPageAboutUsWorkingHoursTitle">
                                <p>
                                    Working Hours
                                </p>
                            </div>
                            <div className="aboutUsPageAboutUsHoursContainer">
                                <p className="aboutUsPageAboutUsHours">
                                    Monday-Saturday
                                </p>
                                <p className="aboutUsPageAboutUsHours">
                                    10:00 - 19:00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUsPageAboutUs;