// useStaffData
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getDentistsInfo, getDentistsInfoArmenian } from "../../Data/dentistsInfo";

export const useStaffData = () => {
    const { i18n } = useTranslation();
    const [staffData, setStaffData] = useState([]);

    useEffect(() => {
        if (i18n.language === "am") {
            setStaffData(getDentistsInfoArmenian());
        } else {
            setStaffData(getDentistsInfo());
        }
    }, [i18n.language]);

    return staffData;
};