export const landingGalleryImagesAlt = [
    {
        src: require("../Assets/Images/Gallery/macro_1.jpeg"),
        width: 3,
        height: 2
    },
    {
        src: require("../Assets/Images/Gallery/macro_3.jpeg"),
        width: 3,
        height: 2
    },
    {
        src: require("../Assets/Images/Gallery/macro_2.jpeg"),
        width: 2,
        height: 2
    },
    {
        src: require("../Assets/Images/Gallery/macro_4.jpeg"),
        width: 3,
        height: 2
    },
    {
        src: require("../Assets/Images/Gallery/macro_5.jpeg"),
        width: 3,
        height: 2
    },
    {
        src: require("../Assets/Images/Gallery/macro_1.jpeg"),
        width: 3,
        height: 2
    },
    {
        src: require("../Assets/Images/Gallery/macro_5.jpeg"),
        width: 3,
        height: 2
    }
];
export const landingGalleryImagesMain = [
    {
        src: require("../Assets/Images/LandingSwiper/team_1.jpeg"),
        width: 3,
        height: 2
    },
    {
        src: require("../Assets/Images/LandingSwiper/team_3.jpeg"),
        width: 4,
        height: 4
    },
    {
        src: require("../Assets/Images/Gallery/team_5.jpeg"),
        width: 5,
        height: 4
    },
    {
        src: require("../Assets/Images/LandingSwiper/team_2.jpeg"),
        width: 3,
        height: 2
    },
    {
        src: require("../Assets/Images/Gallery/team_4.jpeg"),
        width: 3,
        height: 2
    },
    {
        src: require("../Assets/Images/AboutUsComponent.jpeg"),
        width: 3,
        height: 4
    }
];
export const aboutUsImages = [
    {
        src: require("../Assets/Images/Gallery/armenak_1.jpeg"),
        width: 3,
        height: 4
    },
    {
        src: require("../Assets/Images/Gallery/anahit_1.jpeg"),
        width: 3,
        height: 3
    },
    {
        src: require("../Assets/Images/Gallery/marine_1.jpeg"),
        width: 3,
        height: 4
    },
    {
        src: require("../Assets/Images/Gallery/anush.jpeg"),
        width: 2,
        height: 2
    },
    {
        src: require("../Assets/Images/Gallery/armenak_2.jpeg"),
        width: 3,
        height: 3
    },
    {
        src: require("../Assets/Images/Gallery/hovhannes_2.jpeg"),
        width: 2,
        height: 2
    },
    {
        src: require("../Assets/Images/Gallery/marine_2.jpeg"),
        width: 2,
        height: 2
    },
    {
        src: require("../Assets/Images/Gallery/marine_3.jpeg"),
        width: 3,
        height: 3
    }
];
export const dentistsWorksImages = [
    {
        src: require("../Assets/Images/Gallery/work_1_2.jpeg"),
        width: 3,
        height: 3
    },
    {
        src: require("../Assets/Images/Gallery/work_2.jpeg"),
        width: 3,
        height: 4
    },
    {
        src: require("../Assets/Images/Gallery/work_3.jpeg"),
        width: 2,
        height: 2
    },
    {
        src: require("../Assets/Images/Gallery/work_4_1.jpeg"),
        width: 3,
        height: 3
    },
    {
        src: require("../Assets/Images/Gallery/work_4_2.jpeg"),
        width: 2,
        height: 2
    },
    {
        src: require("../Assets/Images/Gallery/work_5.jpeg"),
        width: 2,
        height: 2
    }
];

export function getLandingGalleryImages() {
    return { photos: landingGalleryImagesMain, limitNodeSearch: 3, direction: "row" };
}

export function getAboutUsImages() {
    return { photos: aboutUsImages, limitNodeSearch: 3, direction: "column" };
}

export function getDentistsWorksImages() {
    return { photos: dentistsWorksImages, limitNodeSearch: 3, direction: "column" };
}
