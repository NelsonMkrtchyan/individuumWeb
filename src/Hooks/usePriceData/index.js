import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getDentistryPriceList, getDentistryPriceListArmenian } from "../../Data/dentistryPriceList";
import { getInjectionCosmetologyPriceList, getInjectionCosmetologyPriceListArmenian } from "../../Data/injectionCosmetologyPriceList";
import { getFacialAestheticCarePriceList, getFacialAestheticCarePriceListArmenian } from "../../Data/facialAestheticCarePriceList";
import { getMassagePriceList, getMassagePriceListArmenian } from "../../Data/massagePriceList";

export const usePriceData = () => {
    const { i18n } = useTranslation();
    const [dentistryPriceData, setDentistryPriceData] = useState([]);
    const [injectionCosmetologyPriceData, setInjectionCosmetologyPriceData] = useState([]);
    const [facialAestheticCarePriceData, setFacialAestheticCarePriceData] = useState([]);
    const [massagePriceData, setMassagePriceData] = useState([]);
    const [currency, setCurrency] = useState("AMD");

    useEffect(() => {
        if (i18n.language === "am") {
            setDentistryPriceData(getDentistryPriceListArmenian());
            setInjectionCosmetologyPriceData(getInjectionCosmetologyPriceListArmenian());
            setFacialAestheticCarePriceData(getFacialAestheticCarePriceListArmenian());
            setMassagePriceData(getMassagePriceListArmenian());
            setCurrency("Դրամ");
        } else {
            setDentistryPriceData(getDentistryPriceList());
            setInjectionCosmetologyPriceData(getInjectionCosmetologyPriceList());
            setFacialAestheticCarePriceData(getFacialAestheticCarePriceList());
            setMassagePriceData(getMassagePriceList());
            setCurrency("AMD");

        }
    }, [i18n.language]);

    return {
        dentistryPriceData,
        injectionCosmetologyPriceData,
        facialAestheticCarePriceData,
        massagePriceData,
        currency
    };
};