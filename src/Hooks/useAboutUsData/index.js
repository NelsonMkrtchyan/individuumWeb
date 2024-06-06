import React, {useEffect, useMemo, useState} from "react";
import {useTranslation} from "react-i18next";


export const useAboutUsData = () => {
    const {i18n} = useTranslation();
    const [aboutUsData, setAboutUsData] = useState(<></>);

    const aboutUsArm = useMemo(() => {
        return (<>
            <p>
                Ինդիվիդում Նորարարական Ստոմատոլոգիական ծառայությունը հիմնվել է 2009 թ. Վարազդատ Թանգամյանի և Մարինե
                Մկրտչյանի կողմից՝ առաջնորդվելով մարդասիրությամբ, մասնագիտական նվիրվածությամբ և եռանդով, որակն ու էթիկան
                համատեղելու մեծ պատասխանատվությամբ։

            </p>
            <br/>
            <p>
                Ինդիվիդում Նորարարական Ստոմատոլոգիայի առաքելությունն է ստեղծել բացառիկ ստոմատոլոգիական ծառայություն,
                որտեղ մեր բուժառուները կգտնեն հյուրընկալ միջավայր, անվտանգ և որակյալ բուժսպասարկում՝ բժշկական
                տեխնոլոգիաների, ապացուցահեն մոտեցումների և բժշկագիտության նվաճումների միավորմամբ: Մեր գերագույն նպատակն
                է նորովի սահմանել ստոմատոլոգիական փորձառությունը՝ ամեն այցելության սթրեսը փոխարինելով օգտակար և
                հետաքրքիր փորձով, վախն ու տհաճությունը՝ հաճելի ու վստահելի հարաբերություններով, որտեղ բուժառուները իրենց
                կզգան մեր գործողությունների և նպատակների իրագործման կենտրոնում։ Մեր աշխատակազմի բացառիկ պրոֆեսիոնալիզմի
                և թիմային աշխատանք իրականացնելու ունակության շնորհիվ այստեղ տիրում է վստահության և հարմարավետության
                մթնոլորտ, որտեղ ամեն բուժառու իրեն գնահատված և հոգատարությամբ շրջապատված է զգում։ Միևնույն ժամանակ
                կլինիկայի տեխնիկական հագեցվածությունը, ավագ և միջին բուժանձնակազմի շարունակական կրթությունը և
                հմտությունների զարգացումը բուժման գործընթացը դարձնում են հնարավորինս արագ, արդյունավետ և երաշխավորված՝
                գիտության և տեխնիկայի նվաճումները լավագույնս ծառայացնելով մեր բուժառուների առողջությանը և կյանքի որակին։
            </p>
            <br/>
            <p>
                Ինչու՞ Ինդիվիդում.
                Ընդգծելով յուրաքանչյուր բուժառուի անհատականությունը՝ մենք կարևորում ենք ինդիվիդուալ մոտեցումը, ինչն
                ենթադրում է հաշվի առնել ամեն անհատի մասնավոր կարիքներն ու ցանկությունները՝ այդ ճանապարհին խստորեն
                հետևելով միջազգային ուղեցույցներին և համաշխարհային լավագույն փորձառությանը:
            </p>
            <br/>
            <p>
                Մեր թիմի յուրաքանչյուր անդամ նույնպես ինդիվիդում է՝ իր սեփական նախասիրություններով, մասնագիտական
                ձգտումներով և հոգատարության դրսևորմամբ: Սակայն բոլորիս համախմբող ընդհանրություններն են բժշկագիտության
                սկզբունքներին հավատարմությունը, կատարելագործման ձգտումը և աշխատասիրությունը։ Դրանք այն հիմնասյուներն են,
                որոնք միավորել են մեզ մեր ընդհանուր նպատակի՝ մեր բուժառուների առողջությունը և կյանքի որակը բարելավելու
                գործում:
                Այստեղ մեր բուժառուների կարիքներն ու ցանկությունները տեսանելի են, լսելի են և հոգատարությամբ շրջապատված,
                իսկ նրանց ստոմատոլոգիական առողջության ճանապարհը՝ ոլորտի լավագույն մասնագետնեռի ուշադրության ներքո։
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
            <br/>
            <p>
                In Individuum dental clinic, the key medical principle is not treat the disease but the patient, which
                means that every person gets his individual approach, every problem gets it's individual
                solution. Our dentists high qualification, consolidated work of our medical staff and caring attitude,
                as well as relaxed atmosphere will lead to quality and fundamental solution of your problem.
            </p>
            <br/>
            <p>
                Here you won't be just a patient: you'll be the person - the individuum, the only one who
                will be carefully listened to free of charge, will be examined by heart, thoroughly researched and will
                be correctly advised financially, physically and mentally acheless.
            </p>
            <br/>
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
