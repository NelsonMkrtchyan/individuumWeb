const facialAestheticCarePriceList = [
    {
        id: 0,
        categoryName: "Aesthetic Care",
        color: "#ECBE21",
        logo: require("../Assets/Images/tooth_1.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Aesthetic care of the whole face",
                        price: "13000"
                    },
                    {
                        name: "Face express care (gommage peeling and alginate mask)",
                        price: "8000"
                    },
                    {
                        name: "Face express care (face mask based on skin type)",
                        price: "5000"
                    }
                ]
            }
        ]
    },
    {
        id: 1,
        categoryName: "Face professional cleaning",
        color: "#777FB0",
        logo: require("../Assets/Images/tooth_2.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Atraumatic",
                        price: "11000"
                    },
                    {
                        name: "Mechanical",
                        price: "10000"
                    },
                    {
                        name: "Ultrasound complete",
                        price: "12000"
                    },
                    {
                        name: "Ultrasound partial",
                        price: "6000"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        categoryName: "Peelings",
        color: "#9B74B3",
        logo: require("../Assets/Images/tooth_3.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Chemical (milky, almond, salicylic, yellow, etc) and enzymatic",
                        price: "5000 - 22000"
                    },
                    {
                        name: "Porcelain skin",
                        price: "10000"
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        categoryName: "",
        color: "#ECBE21",
        logo: require("../Assets/Images/tooth_1.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Non-invasive carboxytherapy",
                        price: "10000"
                    },
                    {
                        name: "Non-invasive carbon peeling (without laser)",
                        price: "12000"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        categoryName: "Cryo Lifting of facial skin",
        color: "#777FB0",
        logo: require("../Assets/Images/tooth_2.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Drainage modeling",
                        price: "10000"
                    }
                ]
            }
        ]
    }
];


const facialAestheticCarePriceListArmenian = [
    {
        id: 0,
        categoryName: "Էսթետիկ Խնամք",
        color: "#ECBE21",
        logo: require("../Assets/Images/tooth_1.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Դեմքի ամբողջական էսթետիկ խնամք",
                        price: "13000"
                    },
                    {
                        name: "Դեմքի էքսպրես խնամք (գոմաժ պիլինգ և ալգինատային դիմակ)",
                        price: "8000"
                    },
                    {
                        name: "Դեմքի էքսպրես խնամք (դիմակ ըստ մաշկի տիպի)",
                        price: "5000"
                    }
                ]
            }
        ]
    },
    {
        id: 1,
        categoryName: "Դեմքի պրոֆեսիոնալ մաքրում",
        color: "#777FB0",
        logo: require("../Assets/Images/tooth_2.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Ատրավմատիկ",
                        price: "11000"
                    },
                    {
                        name: "Մոխանիկական",
                        price: "10000"
                    },
                    {
                        name: "Ուլտրաձայնային ամբողջական",
                        price: "12000"
                    },
                    {
                        name: "Ուլտրաձայնային մասնակի",
                        price: "6000"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        categoryName: "Պիլինգներ",
        color: "#9B74B3",
        logo: require("../Assets/Images/tooth_3.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Քիմիական (կաթնային, նշի, սալիցիլային, դեղին և այլ) և ֆերմենտային",
                        price: "5000 - 22000"
                    },
                    {
                        name: "Ճենապակյա մաշկ",
                        price: "10000"
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        categoryName: "",
        color: "#ECBE21",
        logo: require("../Assets/Images/tooth_1.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Ոչ ինվազիվ կարբօքսիթերապիա",
                        price: "10000"
                    },
                    {
                        name: "Ոչ ինվազիվ կարբոնային պիլինգ (առանց լազերի)",
                        price: "12000"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        categoryName: "Դեմքի մաշկի կրիո լիֆթինգ",
        color: "#777FB0",
        logo: require("../Assets/Images/tooth_2.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Դրենաժային մոդելավորում",
                        price: "10000"
                    }
                ]
            }
        ]
    }
];

export function getFacialAestheticCarePriceList() {
    return facialAestheticCarePriceList;
}

export function getFacialAestheticCarePriceListArmenian() {
    return facialAestheticCarePriceListArmenian;
}
