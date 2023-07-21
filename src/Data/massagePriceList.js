
const massagePriceList = [
    {
        id: 0,
        categoryName: "Face massage",
        color: "#ECBE21",
        logo: require("../Assets/Images/tooth_1.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Lifting",
                        price: "12000"
                    },
                    {
                        name: "Contour",
                        price: "12000"
                    },
                    {
                        name: "Intraoral",
                        price: "12000"
                    },
                ]
            }
        ]
    },
    {
        id: 1,
        categoryName: "Medical massage",
        color: "#777FB0",
        logo: require("../Assets/Images/tooth_2.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Full body",
                        price: "18000"
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        categoryName: "Classic relax massage",
        color: "#9B74B3",
        logo: require("../Assets/Images/tooth_3.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Aroma relax",
                        price: "12000"
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        categoryName: "Anti-cellulite massage",
        color: "#ECBE21",
        logo: require("../Assets/Images/tooth_1.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Lymphatic drainage",
                        price: "15000"
                    },
                    {
                        name: "With honey",
                        price: "15000"
                    },
                    {
                        name: "Vacuum",
                        price: "15000"
                    },
                    {
                        name: "Brazilian (with bamboo sticks)",
                        price: "15000"
                    },
                    {
                        name: "Scrub + wrapping (with chocolate, seaweed)",
                        price: "15000"
                    },
                ]
            }
        ]
    },
    {
        id: 4,
        categoryName: "Segmental massage",
        color: "#777FB0",
        logo: require("../Assets/Images/tooth_2.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Head",
                        price: "3000"
                    },
                    {
                        name: "Neck",
                        price: "4000"
                    },
                    {
                        name: "Belly",
                        price: "5000"
                    },
                    {
                        name: "Back",
                        price: "6000"
                    },
                    {
                        name: "Full legs",
                        price: "10000"
                    },
                    {
                        name: "Up to the knees",
                        price: "6000"
                    },
                ]
            }
        ]
    },
    {
        id: 5,
        categoryName: "Paraffinotherapy",
        color: "#9B74B3",
        logo: require("../Assets/Images/tooth_3.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Hands",
                        price: "3000"
                    },
                    {
                        name: "Feet",
                        price: "4000"
                    },
                ]
            }
        ]
    },
];


const massagePriceListArmenian = [
    {
        id: 0,
        categoryName: "Դեմքի մերսում",
        color: "#ECBE21",
        logo: require("../Assets/Images/tooth_1.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Լիֆտինգ",
                        price: "12000"
                    },
                    {
                        name: "Կոնտուրային",
                        price: "12000"
                    },
                    {
                        name: "Ներբերանային",
                        price: "12000"
                    },
                ]
            }
        ]
    },
    {
        id: 1,
        categoryName: "Բուժական մերսում",
        color: "#777FB0",
        logo: require("../Assets/Images/tooth_2.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Ամբողջ մարմին",
                        price: "18000"
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        categoryName: "Դասական ռելաքս մերսում",
        color: "#9B74B3",
        logo: require("../Assets/Images/tooth_3.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Արոմա ռելաքս",
                        price: "12000"
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        categoryName: "Հակացելյուլիտային մերսում",
        color: "#ECBE21",
        logo: require("../Assets/Images/tooth_1.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Լիմֆոդրենաժային",
                        price: "15000"
                    },
                    {
                        name: "Մեղրով",
                        price: "15000"
                    },
                    {
                        name: "Վակումային",
                        price: "15000"
                    },
                    {
                        name: "Բրազիլական (բամբուկ փայտերով)",
                        price: "15000"
                    },
                    {
                        name: "Սկրաբ + պարուրում (շոկոլադով, ծովային ջրիմուռներով)",
                        price: "15000"
                    },
                ]
            }
        ]
    },
    {
        id: 4,
        categoryName: "Սեգմենտային մերսում",
        color: "#777FB0",
        logo: require("../Assets/Images/tooth_2.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Գլուխ",
                        price: "3000"
                    },
                    {
                        name: "Պարանոց",
                        price: "4000"
                    },
                    {
                        name: "Որովայն",
                        price: "5000"
                    },
                    {
                        name: "Մեջք",
                        price: "6000"
                    },
                    {
                        name: "Ամբողջ ոտքեր",
                        price: "10000"
                    },
                    {
                        name: "Մինչև ծնկներ",
                        price: "6000"
                    },
                ]
            }
        ]
    },
    {
        id: 5,
        categoryName: "Պարաֆինոթերապիա",
        color: "#9B74B3",
        logo: require("../Assets/Images/tooth_3.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Ձեռքեր",
                        price: "3000"
                    },
                    {
                        name: "Ոտնաթաթեր",
                        price: "4000"
                    },
                ]
            }
        ]
    },
];

export function getMassagePriceList() {
    return massagePriceList;
}

export function getMassagePriceListArmenian() {
    return massagePriceListArmenian;
}
