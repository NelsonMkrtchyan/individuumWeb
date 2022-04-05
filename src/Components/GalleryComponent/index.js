import React from "react";
import Gallery from "react-photo-gallery";
import SeeAllButton from "../SeeAllButton";
import BackgroundTitle from "../BackgroundTitle";

const GalleryComponent = ({styles, backgroundTitle, title}) => {
    const photos = [
        {
            src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
            width: 6,
            height: 4
        },
        {
            src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
            width: 5,
            height: 4
        },
        {
            src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
            width: 5,
            height: 3
        },
        {
            src: "https://source.unsplash.com/PpOHJezOalU/800x599",
            width: 3,
            height: 3
        },
        {
            src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
            width: 4,
            height: 3
        }
    ];

    return (
        <div className="galleryComponentWrapper" style={{...styles}}>
            {backgroundTitle && (
                <div>
                    <div className="galleryComponentBackgroundTitleContainer">
                        <div>
                            <p>Gallery</p>
                        </div>
                    </div>
                </div>
            )}
            <div className="galleryComponentGalleryContainer">
                <div className="galleryComponentTitle">
                    <p>
                        {title}
                    </p>
                </div>
                <Gallery photos={photos} margin={20} direction={"row"} />
            </div>
            <div>
                <div className="galleryComponentButtonContainer">
                    <SeeAllButton />
                </div>
            </div>
        </div>
    );
}

export default GalleryComponent;