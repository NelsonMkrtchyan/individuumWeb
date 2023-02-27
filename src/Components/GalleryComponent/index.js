import React from "react";
import Gallery from "react-photo-gallery";
import SeeAllButton from "../SeeAllButton";
import { getGalleryComponentImages } from "../../Data/galleryComponentImages";
import { useTranslation } from "react-i18next";

const GalleryComponent = ({ styles, backgroundTitle, title }) => {
    const { t } = useTranslation(["common"]);
    const photos = getGalleryComponentImages();
    return (
      <div className="galleryComponentWrapper">
          {backgroundTitle && (
            <div>
                <div className="galleryComponentBackgroundTitleContainer">
                    <div>
                        <p>{backgroundTitle}</p>
                    </div>
                </div>
            </div>
          )}
          <div className="galleryComponentGalleryContainer" style={{ ...styles }}>
              <div className="galleryComponentTitle">
                  <p>{title}</p>
              </div>
              <Gallery photos={photos} margin={20} direction={"row"} />
          </div>
          <div>
              <div className="galleryComponentButtonContainer">
                  <SeeAllButton text={t("common:seeAll")} whereTo="gallery" />
              </div>
          </div>
      </div>
    );
};

export default GalleryComponent;
