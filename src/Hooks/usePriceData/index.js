import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getPriceList, getPriceListArmenian } from "../../Data/priceList";

export const usePriceData = () => {
    const { i18n } = useTranslation();
    const [priceData, setPriceData] = useState([]);
    const [currency, setCurrency] = useState("AMD");

    useEffect(() => {
        if (i18n.language === "am") {
            setPriceData(getPriceListArmenian());
            setCurrency("Դրամ");
        } else {
            setPriceData(getPriceList());
            setCurrency("AMD");

        }
    }, [i18n.language]);

    return {
        priceData,
        currency
    };
};