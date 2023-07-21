
const injectionCosmetologyPriceList = [
    {
        id: 0,
        categoryName: "Fillers",
        color: "#ECBE21",
        logo: require("../Assets/Images/tooth_1.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Rejeunesse - 1 ml",
                        price: "50000"
                    },
                    {
                        name: "Saypha - 1 ml",
                        price: "60000"
                    },
                    {
                        name: "Stylage - 1 ml",
                        price: "80000"
                    },
                    {
                        name: "Juvederm - 1 ml",
                        price: "110000"
                    },
                ]
            }
        ]
    },
    {
        id: 1,
        categoryName: "Biorevitalizants",
        color: "#777FB0",
        logo: require("../Assets/Images/tooth_2.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Hyaron - 2.5 ml",
                        price: "31000"
                    },
                    {
                        name: "Neauvia Hydro Deluxe - 2.5 ml",
                        price: "46000"
                    },
                    {
                        name: "Revofil Aquashine BTX - 2.5 ml",
                        price: "50000"
                    },
                    {
                        name: "Hyalual Smart - 2 ml",
                        price: "56000"
                    },
                    {
                        name: "Hyamino Care - 2 ml",
                        price: "61000"
                    },
                    {
                        name: "Juvederm - 2 ml",
                        price: "150000"
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        categoryName: "Mesococtails",
        color: "#9B74B3",
        logo: require("../Assets/Images/tooth_3.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Dermaheal HSR - 5 ml",
                        price: "20000"
                    },
                    {
                        name: "Toskani (Mesolift) - 10 ml",
                        price: "25000"
                    },
                    {
                        name: "Curenex",
                        price: "30000"
                    },
                ]
            }
        ]
    },
];


const injectionCosmetologyPriceListArmenian = [
    {
        id: 0,
        categoryName: "Ֆիլերներ",
        color: "#ECBE21",
        logo: require("../Assets/Images/tooth_1.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Rejeunesse - 1 ml",
                        price: "50000"
                    },
                    {
                        name: "Saypha - 1 ml",
                        price: "60000"
                    },
                    {
                        name: "Stylage - 1 ml",
                        price: "80000"
                    },
                    {
                        name: "Juvederm - 1 ml",
                        price: "110000"
                    },
                ]
            }
        ]
    },
    {
        id: 1,
        categoryName: "Բիօռեվիտալիզանտներ",
        color: "#777FB0",
        logo: require("../Assets/Images/tooth_2.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Hyaron - 2.5 ml",
                        price: "31000"
                    },
                    {
                        name: "Neauvia Hydro Deluxe - 2.5 ml",
                        price: "46000"
                    },
                    {
                        name: "Revofil Aquashine BTX - 2.5 ml",
                        price: "50000"
                    },
                    {
                        name: "Hyalual Smart - 2 ml",
                        price: "56000"
                    },
                    {
                        name: "Hyamino Care - 2 ml",
                        price: "61000"
                    },
                    {
                        name: "Juvederm - 2 ml",
                        price: "150000"
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        categoryName: "Մեզոկոկտեյլներ",
        color: "#9B74B3",
        logo: require("../Assets/Images/tooth_3.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Dermaheal HSR - 5 ml",
                        price: "20000"
                    },
                    {
                        name: "Toskani (Mesolift) - 10 ml",
                        price: "25000"
                    },
                    {
                        name: "Curenex",
                        price: "30000"
                    },
                ]
            }
        ]
    },
];

export function getInjectionCosmetologyPriceList() {
    return injectionCosmetologyPriceList;
}

export function getInjectionCosmetologyPriceListArmenian() {
    return injectionCosmetologyPriceListArmenian;
}
