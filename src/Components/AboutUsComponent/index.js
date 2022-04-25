import React from "react";
import SeeAllButton from "../SeeAllButton";

const AboutUsComponent = ({ styles }) => {
  return (
    <div className="aboutUsComponentWrapper" style={{ ...styles }}>
      <div>
        <div className="aboutUsComponentBackgroundTitleContainer">
          <div>
            <p>About Us</p>
          </div>
        </div>
        <div className="aboutUsComponentColorBox" />
        <div className="aboutUsComponentImage" />
      </div>
      <div className="contentWrapper">
        <div className="contentContainer">
          <div className="aboutUsComponentLeftContent">
            <div className="aboutUsComponentLeftContentContainer">
              <div>
                <div className="aboutUsComponentTitle">
                  <p>About Us</p>
                </div>
                <div className="aboutUsComponentText">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
              <div className="aboutUsComponentButtonContainer">
                <SeeAllButton />
              </div>
            </div>
          </div>
          <div className="aboutUsComponentRightContent" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
