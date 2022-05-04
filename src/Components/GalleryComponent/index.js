import React from "react";
import Gallery from "react-photo-gallery";
import SeeAllButton from "../SeeAllButton";
import { getGalleryComponentImages } from "../../Data/galleryComponentImages";

const GalleryComponent = ({ styles, backgroundTitle, title }) => {
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
                  <SeeAllButton whereTo="gallery" />
              </div>
          </div>
      </div>
    );
};

export default GalleryComponent;
