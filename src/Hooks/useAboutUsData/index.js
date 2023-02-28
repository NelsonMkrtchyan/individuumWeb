import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";


export const useAboutUsData = () => {
    const { i18n } = useTranslation();
    const [aboutUsData, setAboutUsData] = useState(<></>);

    const aboutUsArm = useMemo(() => {
        return (<>
            <p>
                "Ինդիվիդում" ստոմատոլոգիական կլինիկան հիմնադրվել է 2009 թվականի հուլիսին:
                Հիմնադրվել է մասնագիտական հմտությամբ, սիրով և պացիենտի հանդեպ հոգատարությամբ,
                այսինքն` ճանապարհ դեպի անկաշկանդ ժպիտ կարգախոսով: Իսկ անկաշկանդ ժպիտը կծնվի
                առողջ,
                խնամված ու գեղեցիկ ատամնաշարի փայլից, ներքին գոհունակությունից,
                ինքնավստահությունից և, ինչու չէ, մասնագետի հանդեպ երախտագիտությունից և սեփական
                անձի նկատմամբ հարգանքից:
            </p>
            <br />
            <p>
                "Ինդիվիդում" ստոմատոլոգիական կլինիկայում բժշկության առանցքային սկզբունքի
                գործադրումով ոչ թե հիվանդությունը, այլ հիվանդին են բուժում` յուրաքանչյուր
                անձին`
                անհատական մոտեցում, յուրաքանչյուր խնդրին` անհատական լուծում նշանաբանով: Մեր
                բժիշկների բարձր որակավորումը, բուժանձնակազմի համախմբված աշխատանքը և հոգատար
                վերաբերմունքը, ինչպես նաև անկաշկանդ մթնոլորտը, կնպաստեն Ձեր խնդիրների
                հնարավորինս որակյալ և հիմնավոր լուծմանը:
            </p>
            <br />
            <p>
                Դուք այստեղ չեք դառնա հերթական պացիենտը. Դուք կլինեք Նա` այդ ինդիվիդուումը`
                տվյալ
                պահին այն միակը, ում ուշադիր անվճար կլսեն, սրտացավորեն կզննեն, հանգամանորեն
                կհետազոտեն ու հնարավորինս ճիշտ խորհուրդ կտան` ֆինանսապես, ֆիզիկապես ու
                հոգեբանորեն
                անցավ:
            </p>
            <br />
            <p>
                "Ինդիվիդում"-ի բուժանձնակազմը պարբերաբար մասնակցում է արտասահմանյան և
                հայրենական
                գիտաժողովներին ու սեմինարներին:
                "Ինդիվիդում" ստոմատոլոգիական կլինիկան հագեցված է ժամանակակից սարքավորումներով
                և
                մատուցում է ոլորտում առկա արդիական չափանիշներին համապատասխան ծառայություններ`
                խստագույն պահպանելով ախտահանման կանոնները:
            </p>
        </>);
    }, []);
    const aboutUsEng = useMemo(() => {
        return (<>
            <p>
                Individuum dental clinic was founded in July 2009. It was founded with professional skills, love and
                caring for patients, i.e. road to relaxed smile as the slogan. And the relaxes smile will be born from
                healthy, caring and beautiful dentition sparkle, internal satisfaction, self confidence and, why not,
                gratitude to the professional and respect to your own persona.
            </p>
            <br />
            <p>
                In Individuum dental clinic, the key medical principle is not treat the disease but the patient, which
                means that every person gets his individual approach, every problem gets it's individual
                solution. Our dentists high qualification, consolidated work of our medical staff and caring attitude,
                as well as relaxed atmosphere will lead to quality and fundamental solution of your problem.
            </p>
            <br />
            <p>
                Here you won't be just a patient: you'll be the person - the individuum, the only one who
                will be carefully listened to free of charge, will be examined by heart, thoroughly researched and will
                be correctly advised financially, physically and mentally acheless.
            </p>
            <br />
            <p>
                Our medical staff from time to time participates in international and national conferences and seminars.
                Our clinic is equipped with modern equipment and provides services in accordance with the current
                standards in the field, strictly observing the rules of disinfection.
            </p>
        </>);
    }, []);

    useEffect(() => {
        if (i18n.language === "am") {
            setAboutUsData(aboutUsArm);
        } else {
            setAboutUsData(aboutUsEng);
        }
    }, [i18n.language, aboutUsArm, aboutUsEng]);

    return aboutUsData;
};