const priceList = [
    {
        id: 0,
        categoryName: "Therapeutic Dentistry",
        color: "#ECBE21",
        logo: require("../Assets/Images/tooth_1.png"),
        subCategories: [
            {
                subCategoryName: "Caries treatment & prophylactics",
                treatments: [
                    {
                        name: "Middle",
                        price: "12000"
                    },
                    {
                        name: "Deep",
                        price: "15000"
                    },
                    {
                        name: "Aesthetics restauration",
                        price: "15000"
                    },
                    {
                        name: "Vinir",
                        price: "25000"
                    }

                ]
            },
            {
                subCategoryName: "Caries treatment & prophylactics 2",
                treatments: [
                    {
                        name: "Middle",
                        price: "12000"
                    },
                    {
                        name: "Deep",
                        price: "15000"
                    },
                    {
                        name: "Aesthetics restauration",
                        price: "15000"
                    },
                    {
                        name: "Vinir",
                        price: "25000"
                    }

                ]
            },
            {
                subCategoryName: "Caries treatment & prophylactics 3",
                treatments: [
                    {
                        name: "Middle",
                        price: "12000"
                    },
                    {
                        name: "Deep",
                        price: "15000"
                    },
                    {
                        name: "Aesthetics restauration",
                        price: "15000"
                    },
                    {
                        name: "Vinir",
                        price: "25000"
                    }

                ]
            },
            {
                subCategoryName: "Caries treatment & prophylactics 4",
                treatments: [
                    {
                        name: "Middle",
                        price: "12000"
                    },
                    {
                        name: "Deep",
                        price: "15000"
                    },
                    {
                        name: "Aesthetics restauration",
                        price: "15000"
                    },
                    {
                        name: "Vinir",
                        price: "25000"
                    }

                ]
            }
        ]
    },
    {
        id: 1,
        categoryName: "Surgical Dentistry",
        color: "#777FB0",
        logo: require("../Assets/Images/tooth_2.png"),
        subCategories: [
            {
                subCategoryName: "Teeth removal",
                treatments: [
                    {
                        name: "One Root",
                        price: "4000"
                    },
                    {
                        name: "Many Roots",
                        price: "5000"
                    },
                    {
                        name: "Abscess treatment",
                        price: "160000"
                    },
                    {
                        name: "Implantation",
                        price: "160000"
                    }

                ]
            },
            {
                subCategoryName: "Teeth removal 2",
                treatments: [
                    {
                        name: "One Root",
                        price: "4000"
                    },
                    {
                        name: "Many Roots",
                        price: "5000"
                    },
                    {
                        name: "Abscess treatment",
                        price: "160000"
                    },
                    {
                        name: "Implantation",
                        price: "160000"
                    }

                ]
            }
        ]
    },
    {
        id: 2,
        categoryName: "Orthopedic Dentistry",
        color: "#9B74B3",
        logo: require("../Assets/Images/tooth_1.png"),
        subCategories: [
            {
                subCategoryName: "Real Prosthesis",
                treatments: [
                    {
                        name: "Metal-ceramic cover",
                        price: "45000"
                    },
                    {
                        name: "Ceramic cover",
                        price: "90000"
                    },
                    {
                        name: "Full Porcelain",
                        price: "160000"
                    },
                    {
                        name: "Standard Abutment",
                        price: "40000"
                    }

                ]
            },
            {
                subCategoryName: "Real Prosthesis 2",
                treatments: [
                    {
                        name: "Metal-ceramic cover",
                        price: "45000"
                    },
                    {
                        name: "Ceramic cover",
                        price: "90000"
                    },
                    {
                        name: "Full Porcelain",
                        price: "160000"
                    },
                    {
                        name: "Standard Abutment",
                        price: "40000"
                    }

                ]
            }
        ]
    },
    {
        id: 3,
        categoryName: "Orthopedic Dentistry",
        color: "#ECBE21",
        logo: require("../Assets/Images/tooth_2.png"),
        subCategories: [
            {
                subCategoryName: "Real Prosthesis",
                treatments: [
                    {
                        name: "Metal-ceramic cover",
                        price: "45000"
                    },
                    {
                        name: "Ceramic cover",
                        price: "90000"
                    },
                    {
                        name: "Full Porcelain",
                        price: "160000"
                    },
                    {
                        name: "Standard Abutment",
                        price: "40000"
                    }

                ]
            },
            {
                subCategoryName: "Real Prosthesis 2",
                treatments: [
                    {
                        name: "Metal-ceramic cover",
                        price: "45000"
                    },
                    {
                        name: "Ceramic cover",
                        price: "90000"
                    },
                    {
                        name: "Full Porcelain",
                        price: "160000"
                    },
                    {
                        name: "Standard Abutment",
                        price: "40000"
                    }

                ]
            }
        ]
    }
];

export function getPriceList() {
    return priceList;
}
