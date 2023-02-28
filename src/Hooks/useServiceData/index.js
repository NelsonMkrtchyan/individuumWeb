import { useEffect, useState } from "react";
import { getServicesInfo, getServicesInfoEnglish } from "../../Data/servicesInfo";
import { useTranslation } from "react-i18next";

export const useServiceData = () => {
    const { i18n } = useTranslation();
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        if (i18n.language === "am") {
            setServiceData(getServicesInfo());
        } else {
            setServiceData(getServicesInfoEnglish());
        }
    }, [i18n.language]);

    return serviceData;
};