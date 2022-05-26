const priceList = [
    {
        id: 0,
        categoryName: "Therapeutic Dentistry",
        color: "#ECBE21",
        logo: require("../Assets/Images/tooth_1.png"),
        subCategories: [
            {
                subCategoryName: "Caries treatment",
                treatments: [
                    {
                        name: "Intermediate caries",
                        price: "12000"
                    },
                    {
                        name: "Deep Caries",
                        price: "15000"
                    },
                    {
                        name: "Aesthetics restauration",
                        price: "15000"
                    },
                    {
                        name: "Fissure sealant application",
                        price: "6000"
                    },
                    {
                        name: "Composite veneer",
                        price: "20000"
                    },
                    {
                        name: "Composite inlay/onlay/ overlay",
                        price: "35000"
                    }

                ]
            },
            {
                subCategoryName: "Teeth Whitening",
                treatments: [
                    {
                        name: "Opalescence boost / office whitening",
                        price: "30000"
                    },
                    {
                        name: "Ultradent opalescence/ home whitening",
                        price: "65000"
                    },
                    {
                        name: "One tooth whitening",
                        price: "10000"
                    }

                ]
            },
            {
                subCategoryName: "Endodontics / root canal treatment",
                treatments: [
                    {
                        name: "Root canal treatment and crown restoration / one canal/",
                        price: "27000"
                    },
                    {
                        name: "Root canal treatment and crown restoration / two canals/",
                        price: "35000"
                    },
                    {
                        name: "Root canal treatment and crown restoration / multiple canals/",
                        price: "40000"
                    },
                    {
                        name: "Root canal treatment of one canal",
                        price: "15000"
                    },
                    {
                        name: "Root canal treatment of two canals",
                        price: "18000"
                    },
                    {
                        name: "Root canal treatment of multiple canals",
                        price: "23000"
                    },
                    {
                        name: "Fiber post",
                        price: "2000"
                    },
                    {
                        name: "Tooth restoration with crown",
                        price: "3000"
                    }

                ]
            }
        ]
    },
    {
        id: 1,
        categoryName: "Pediatric dentistry",
        color: "#777FB0",
        logo: require("../Assets/Images/tooth_2.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Caries treatment",
                        price: "10000"
                    },
                    {
                        name: "Pediatric endodontics and restoration",
                        price: "15000"
                    },
                    {
                        name: "Pediatric endodontics and  restoration with standard crown",
                        price: "15000"
                    },
                    {
                        name: "Remineralization therapy, fluoridation",
                        price: "30000"
                    },
                    {
                        name: "Primary tooth extraction",
                        price: "4000"
                    },
                    {
                        name: "Space maintainer",
                        price: "13000"
                    }

                ]
            }
        ]
    },
    {
        id: 2,
        categoryName: "Parodontology",
        color: "#9B74B3",
        logo: require("../Assets/Images/tooth_1.png"),
        subCategories: [
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "Parodontal treatment /curetage/",
                        price: "30000"
                    },
                    {
                        name: "Aphtous stomatitis treatment",
                        price: "6000"
                    },
                    {
                        name: "Gingival plastic /3-6 teeth/",
                        price: "20000"
                    },
                    {
                        name: "Gingival plastic /1 tooth/",
                        price: "3000"
                    },
                    {
                        name: "Teeth splinting /4-6 teeth/",
                        price: "15000"
                    }
                ]
            },
            {
                subCategoryName: "",
                treatments: [
                    {
                        name: "General scaling and polishing",
                        price: "14000"
                    },
                    {
                        name: "Gingivitis treatment / 2 appointments/",
                        price: "15000"
                    },
                    {
                        name: "Gingivitis treatment / 3-4 appointments/",
                        price: "20000"
                    },
                    {
                        name: "Remineralization therapy, fluoridization",
                        price: "33000"
                    },
                    {
                        name: "Parodontal treatment",
                        price: "25000"
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        categoryName: "Surgical dentistry",
        color: "#ECBE21",
        logo: require("../Assets/Images/tooth_2.png"),
        subCategories: [
            {
                subCategoryName: "Tooth extraction",
                treatments: [
                    {
                        name: "Primary tooth extraction",
                        price: "4000"
                    },
                    {
                        name: "Tooth extraction /1 root/",
                        price: "5000"
                    },
                    {
                        name: "Tooth extraction /multiple roots/",
                        price: "7000"
                    },
                    {
                        name: "Wisdom tooth extraction /8 tooth/",
                        price: "10000"
                    },
                    {
                        name: "Retained tooth extraction",
                        price: "30000"
                    },
                    {
                        name: "Tooth hemisection",
                        price: "5000"
                    },
                    {
                        name: "Abscess treatment",
                        price: "10000"
                    },
                    {
                        name: "Pericoronitis treatment",
                        price: "8000"
                    }
                ]
            },
            {
                subCategoryName: "Tooth extraction",
                treatments: [
                    {
                        name: "Alveolitis treatment",
                        price: "9000"
                    },
                    {
                        name: "Exostosis removal /one segment/",
                        price: "5000"
                    },
                    {
                        name: "Sinus lifting",
                        price: "250000"
                    },
                    {
                        name: "Implantation JD/ icon",
                        price: "200000"
                    },
                    {
                        name: "Implantation  NeoBiotech",
                        price: "160000"
                    },
                    {
                        name: "Implantation Nobel Biocare",
                        price: "400000"
                    },
                    {
                        name: "Bone grafting /minimal/ ",
                        price: "60000"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        categoryName: "Prosthodontic dentistry",
        color: "#9B74B3",
        logo: require("../Assets/Images/tooth_1.png"),
        subCategories: [
            {
                subCategoryName: "Non-removable prosthesis",
                treatments: [
                    {
                        name: "Porcelain fused to metal crowns /Noritake/",
                        price: "45000"
                    },
                    {
                        name: "Porcelain fused to metal crowns /Ivoclar/",
                        price: "55000"
                    },
                    {
                        name: "Porcelain crown with zirconia base",
                        price: "95000"
                    },
                    {
                        name: "Porcelaine veneer/crown",
                        price: "105000"
                    },
                    {
                        name: "Full porcelaine /e-max/ inlay, onlay",
                        price: "70000"
                    },
                    {
                        name: "Zirconia crown /full anatomy/",
                        price: "65000"
                    },
                    {
                        name: "Metal crown",
                        price: "10000"
                    },
                    {
                        name: "Metal post",
                        price: "10000"
                    },
                    {
                        name: "Zirconia post",
                        price: "26000"
                    },
                    {
                        name: "Temporary metal based acrylic crown",
                        price: "8000"
                    }
                ]
            },
            {
                subCategoryName: "Non-removable prosthesis",
                treatments: [
                    {
                        name: "Temporary acrylic crown",
                        price: "5000"
                    },
                    {
                        name: "Porcelaine fused to metal crown on implant /Noritake/",
                        price: "50000"
                    },
                    {
                        name: "Porcelaine fused to metal crown on implant /Ivoclar/",
                        price: "60000"
                    },
                    {
                        name: "Porcelaine crown with zirconia base on implnat",
                        price: "95000"
                    },
                    {
                        name: "Provisional veneer /mock-up/",
                        price: "8000"
                    },
                    {
                        name: "Standard abutment",
                        price: "25000"
                    },
                    {
                        name: "Customized abutment",
                        price: "40000"
                    },
                    {
                        name: "Customized zirconia based abutment",
                        price: ""
                    },
                    {
                        name: "Ball abutment",
                        price: "35000"
                    },
                    {
                        name: "Multiunit abutment",
                        price: ""
                    },
                    {
                        name: "Healing abutment",
                        price: "5000"
                    }
                ]
            },
            {
                subCategoryName: "Removable prosthesis ",
                treatments: [
                    {
                        name: "Complete removable denture",
                        price: "75000"
                    },
                    {
                        name: "Complete removable denture based on implantats",
                        price: "150000"
                    },
                    {
                        name: "Locator for complete removable denture",
                        price: "35000"
                    },
                    {
                        name: "Nylon clasp",
                        price: "100000"
                    },
                    {
                        name: "Partial removable metal denture /bugel/ 1 jaw",
                        price: "150000"
                    },
                    {
                        name: "Partial removable resin denture /bugel/ 1 jaw",
                        price: "150000"
                    },
                    {
                        name: "One sided metal denture /bugel/ ",
                        price: "8000"
                    },
                    {
                        name: "Denture repair /1jaw/",
                        price: "10000"
                    },
                    {
                        name: "Denture soft repair /1jaw/",
                        price: "15000"
                    },
                    {
                        name: "Broken denture repairment",
                        price: "4000"
                    },
                    {
                        name: "",
                        price: ""
                    }
                ]
            },
            {
                subCategoryName: "Orthodontics",
                treatments: [
                    {
                        name: "Apparat treatment",
                        price: "200000"
                    },
                    {
                        name: "Dental braces treatment/metalic/",
                        price: "450000"
                    },
                    {
                        name: "Dental braces treatment/ceramic/",
                        price: "500000"
                    },
                    {
                        name: "Soft trace for bruxism",
                        price: "15000"
                    },
                    {
                        name: "Orthodontic trace",
                        price: "15000"
                    },
                    {
                        name: "TENS diagnostics",
                        price: "60000"
                    },
                    {
                        name: "OPG x-ray diagnosis",
                        price: "6000"
                    },
                    {
                        name: "X-ray diagnosis",
                        price: "1000"
                    }
                ]
            }
        ]
    }
];

export function getPriceList() {
    return priceList;
}
