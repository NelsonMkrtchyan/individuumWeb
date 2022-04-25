import React from "react";
import BackgroundTitle from "./BackgroundTitle";

const PageTitleSection = ({ title, backgroundTitle }) => {
    return (
      <div>
          <BackgroundTitle
            backgroundTitle={backgroundTitle ? backgroundTitle : title}
            direction="center"
            fontSize="20vw"
          />
          <div className="PageTitleSectionContainer">
              <div className="PageTitleSectionTitle">{title}</div>
          </div>
      </div>
    );
};

export default PageTitleSection;
