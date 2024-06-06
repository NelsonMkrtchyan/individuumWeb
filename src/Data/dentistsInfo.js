import { StaffInfoBlock, StaffInfoBlockLeft, StaffInfoBlockRight } from "../Components/Styles";

const dentistsInfo = [
    {
        id: 0,
        firstName: "Varazdat",
        secondName: "Tangamyan",
        position: "Doctor - Dentist - Implantologist",
        positionBackground: "Doctor",
        // imageSrc: require("../Assets/Images/Dentists/Varazdat.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedDoctors/ՎարազդատԹանգամյան.jpg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Կրթություն:</h3>
                          <ul>
                              <li>Մխիթար Հերացու անվան Երևանի Պետական Բժշկական Համալսարան : 1995-2000</li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>

              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Մասնագիտական գործունեություն :</h3>
                          <ul>
                              <li>"Ինդիվիդում" ստոմատոլոգիական կլինիկա : 2009-ից</li>
                              <li>"Լյուքսոդենտ" ստոմատոլոգիական կլինիկա : 2005-2009</li>
                              <li>Հայաստանի Հանրապետության Պաշտպանության Նախարարության զորամասի բուժծառայության պետ :
                                  2002-2004
                              </li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>

              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Վերապատրաստումներ:</h3>
                          <ul>
                              <li>ՀՀ Մ. Հերացու անվան բժշկական համալսարանում : 2013</li>
                              <li>Հայաստանի Հանրապետության Առողջապահության Ազգային Ինստիտուտում : 2009</li>
                              <li>Օրդինատուրա Ռուսաստանի Հետդիպլոմային կրթության բժշկական ակադեմիայում : 2000-2002</li>
                              <li>Ինտերնատուրա, Ք. Երևանի թիվ 10 ստոմատոլոգիական պոլիկլինիկայում : 2000</li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>
          </div>
    },
    {
        id: 1,
        firstName: "Marine",
        secondName: "Mkrtchyan",
        position: "DOS - MPH - Chief Medical Officer at Individuum Dental Clinic",
        positionBackground: "Doctor",
        // imageSrc: require("../Assets/Images/Dentists/Marine.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedDoctors/ՄարինեՄկրտչյան.jpg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Personal information:</h3>
                          <p>Date of Birth: 07 October 1978</p>
                          <p>Mobile: +37499990678</p>
                          <p>E-mail: marinemkrtichyan@gmail.com</p>
                      </div>
                  </StaffInfoBlockLeft>
                  <StaffInfoBlockRight>
                      <div>
                          <h3>Personal experience:</h3>
                          <ul>
                              <li>Individuum Dental Clinic, Chief Medical Officer: 2009 July 1 –present</li>
                              <li>Luxodent Dental Clinic, Dental Therapist: 2005 February -2009</li>
                              <li>Private practice in Agarak: 2002 February -2004 December</li>
                              <li>N 10 Dental Polyclinic, Internship: 2000 June – 2001 June</li>
                          </ul>
                      </div>
                  </StaffInfoBlockRight>
              </StaffInfoBlock>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Personal skills:</h3>
                          <p>Proficiency in:</p>
                          <ul>
                              <li>Diagnosing dental problems and conditions</li>
                              <li>Reading and interpreting dental computed tomography (CT) and dental X-ray results</li>
                              <li>Teeth whitening</li>
                              <li>Endodontic treatment</li>
                              <li>Aesthetic restoration</li>
                              <li>Aesthetic prosthodontic treatment</li>
                              <li>Problem solving</li>
                              <li>Team building and management</li>
                              <li>Leadership and communication</li>
                              <li>Quality control</li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
                  <StaffInfoBlockRight>
                      <div>
                          <h3>Education:</h3>
                          <ul>
                              <li>American University of Armenia, Gerald and Patricia Turpanjean School of Public Health
                                  (AUA):
                                  2017-present
                              </li>
                              <li>National Institute of Health: Prosthodontic Dentistry 03/ 2017-12/ 2017</li>
                              <li>Yerevan State Medical University, Faculty of Dentistry (YSMU): 1995-2000</li>
                          </ul>
                      </div>
                  </StaffInfoBlockRight>
              </StaffInfoBlock>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Boards and Certifications:</h3>
                          <ul>
                              <li>Certification in Prosthodontic Dentistry, National Institute of Health of Armenia
                                  2017
                              </li>
                              <li>Certification in “Advancing Women in Leadership and Decision Making” courses</li>
                              <li>American University of Armenia Extension Armenian International Women’s Association
                                  2017
                              </li>
                              <li>State Examination Commission of General Dentistry, Yerevan State Medical University,
                                  2000
                              </li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
                  <StaffInfoBlockRight>
                      <div>
                          <h3>Community service activities:</h3>
                          <ul>
                              <li>Regular organization of informational presentations on Individual Oral Hygiene for
                                  elementary school children
                              </li>
                              <li>Regular organization of informational presentations on Professional Orientation for
                                  high
                                  school students
                              </li>
                              <li>Providing free treatment for orphanage children from the SOS Mankakan Gyugher Hayastan
                                  organization
                              </li>
                          </ul>
                      </div>
                  </StaffInfoBlockRight>
              </StaffInfoBlock>
          </div>
    },
    {
        id: 2,
        firstName: "Anahit",
        secondName: "Melkonyan",
        position: "Doctor - Dentist",
        positionBackground: "Doctor",
        // imageSrc: require("../Assets/Images/Dentists/Anahit.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedDoctors/ԱնահիտՄելքոնյան.jpg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3></h3>
                          <ul>
                              <li>Ինտերնատուրա` N1 Համալսարանային ստոմատոլոգիական պոլիկլինիկայում : 2006-2007</li>
                              <li>Մխիթար Հերացու անվան Երևանի պետական բժշկական համալսարան, գերազանց (կարմիր դիպլոմ):
                                  Որակավորում` բժիշկ-ստոմատոլոգ : 2001-2006
                              </li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>

              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Մասնագիտական գործունեություն :</h3>
                          <ul>
                              <li>"Ինդիվիդում" ստոմատոլոգիական կլինիկա : 2012-ից</li>
                              <li>“Դելյուքս” մասնավոր կլինիկա : 2011-2012</li>
                              <li>Մանկական պոլիկլինիկա “Արսել” : 2009</li>
                              <li>“Կ.Սարդարյան” մասնավոր կլինիկա : 2008-2009</li>
                              <li>“ՍտոմԼայն” մասնավոր կլինիկա : 2007</li>
                              <li>Տարածքային ստոմատոլոգիական պոլիկլինիկա N1 : 2006-2007</li>
                              <li>Հոսպիտալին կից պոլիկլինիկա (սովորելու 4-5 կուրսերում) : 2004-2006</li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>

              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Վերապատրաստումներ:</h3>
                          <ul>
                              <li>Վերապատրաստում “ՍտոմԼայն” մասնավոր կլինիկայում
                                  Ընդհանուր ընդունելության բժիշկ, առկա են հավաստագրեր : 2007
                              </li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>
          </div>
    },
    {
        id: 3,
        firstName: "Aida",
        secondName: "Babayan",
        position: "Doctor - Dentist",
        positionBackground: "Doctor",
        // imageSrc: require("../Assets/Images/Dentists/Aida.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedDoctors/ԱիդաԲաբայան.jpg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3></h3>
                          <ul>
                              <li>Երևանի Մխիթար Հերացու անվան պետական բժշկական համալսարան՝ ստոմատոլոգիական ֆակուլտետ :
                                  2007-2012
                              </li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Մասնագիտական գործունեություն :</h3>
                          <ul>
                              <li>"Ինդիվիդում" ստոմատոլոգիական կլինիկա : 2014-ից</li>
                              <li>Բժիշկ-ստոմատոլոգ «ՍՄ» ստոմատոլոգիական կլինիկայում : 2013-2017</li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>

          </div>
    },
    {
        id: 4,
        firstName: "Hovhannes",
        secondName: "Zeynalyan",
        position: "Doctor - Dentist",
        positionBackground: "Doctor",
        // imageSrc: require("../Assets/Images/Dentists/Hovhannes.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedDoctors/ՀովհաննեսԶեյնալյան.jpg"),
        description:
          <div></div>
    },
    {
        id: 5,
        firstName: "Armenak",
        secondName: "Srocanc",
        position: "Doctor - Dentist",
        positionBackground: "Doctor",
        // imageSrc: require("../Assets/Images/Dentists/Armenak.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedDoctors/ԱրմենակՍրոցանց.jpg"),
        description:
          <div></div>
    },
    {
        id: 6,
        firstName: "Armen",
        secondName: "Khachanyan",
        position: "Doctor - Dentist",
        positionBackground: "Doctor",
        imageSrc: require("../Assets/Images/updatedResizedDoctors/ԱրմենԽաչանյան.jpg"),
        description:
          <div></div>
    },
    {
        id: 7,
        firstName: "Albert",
        secondName: "Kotanov",
        position: "Doctor - Dentist",
        positionBackground: "Doctor",
        imageSrc: require("../Assets/Images/updatedResizedDoctors/ԱլբերտԿոտանով.jpg"),
        description:
          <div></div>
    },
    {
        id: 8,
        firstName: "Liana",
        secondName: "Gevorgyan",
        position: "Doctor - Dentist",
        positionBackground: "Doctor",
        imageSrc: require("../Assets/Images/updatedResizedDoctors/ԼիանաԳևորգյան.jpg"),
        description:
          <div></div>
    },
    // {
    //     id: 9,
    //     firstName: "Jora",
    //     secondName: "Hodabashyan",
    //     position: "Doctor - Dentist",
    //     positionBackground: "Doctor",
    //     imageSrc: require("../Assets/Images/updatedResizedDoctors/ԺորաՀոդաբաշյան.jpg"),
    //     description:
    //       <div></div>
    // },

    // {
    //     id: null,
    //     firstName: "Andranik",
    //     secondName: "Melqonyan",
    //     position: "Nurse",
    //     positionBackground: "Nurse",
    //     // imageSrc: require("../Assets/Images/Staff/Sofy_Hakobyan.jpeg"),
    //     imageSrc: "",
    //     description:
    //       <div>
    //           <StaffInfoBlock>
    //               <StaffInfoBlockLeft>
    //                   <div>
    //                       <h3></h3>
    //                       <p>
    //                           Ես Մելքոնյան Անդրանիկն եմ ։ Ինդիվիդում Ստոմատոլոգիական Կլինիկայում աշխատում եմ 2022
    //                           թվականից , որպես ասիստենտ ։ Ինչպես նաև ուսանում եմ «ՀԱՅԲՈՒՍԱԿ» համալսարանի
    //                           Ստոմատոլոգիական ֆակուլտետում։
    //                       </p>
    //                       <br />
    //                       <p>
    //                           Ասիստենտի աշխատանքը ինձ ընձեռնել է հնարավորթյուն համատեղելու ուսանողի կյանքն աշխատանքի
    //                           հետ , և միևնույն ժամանակ ՝ տեսական գիտելիքներս կիրառել գործնականում ։
    //                       </p>
    //                       <br />
    //                       <p>
    //                           Աշխատելով այստեղ ես արդեն գիտակցում եմ ինչպես պետք է մոտենալ պացիենտներին թե՛ որպես
    //                           ասիստենտ և թե՛ որպես բժիշկ ։
    //                       </p>
    //                       <br />
    //                       <p>
    //                           Մոտ ապագայում, երբ բարելավեմ անգլերենի մակարդակը , ցանկանում եմ մասնակցել Դոմինիկո Ռիկուչիի
    //                           դասընթացներին ։ ՀԵտաքրքրություններս շատ են , բայց առանձնապես շատ եմ սիրում ֆուտբոլը ։ Իսկ
    //                           ազատ ժամանակ ունենալու դեպքում ցանկանում եմ սովորել կիթառ նվագել ։
    //                       </p>
    //                   </div>
    //               </StaffInfoBlockLeft>
    //           </StaffInfoBlock>
    //       </div>
    // },

    {
        id: 10,
        firstName: "Christine",
        secondName: "Ghazaryan",
        position: "Doctor Assistant",
        positionBackground: "Nurse",
        // imageSrc: require("../Assets/Images/Staff/Christine_Ghazaryan.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedStaff/ՔրիստինեՂազարյան.jpg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3></h3>
                          <p>
                              Ես Քրիստինե Ղազարյանն եմ, Ինդիվիդում ստոմատոլոգիական կլինիկայում աշխատում եմ 2020
                              թվականից,
                              որպես բուժքույր։
                          </p>
                          <br />
                          <p>
                              Աշխատանքին համատեղ սովորում եմ ԵՊՀ – ի Ֆարմացիայի ֆակուլտետում, որպեսզի
                              հետագայում իմ ներդրումն ունենամ առողջապահական ոլորտում։
                          </p>
                          <br />
                          <p>
                              Ինչ վերաբերում է իմ աշխատանքին՝ ամենից
                              առավել կարևորում եմ պրոֆեսիոնալիզմը, որն իր դրական ազդեցությունն է ունենում աշխատանքի
                              կազմակերպման գործում։ Այս ամենի հնարավորությունը տալիս է թիմային աշխատանքը, որի շնորհիվ
                              գործընկերներիս հետ փոխանակվում ենք ձեռք բերած հմտություններով և գիտելիքներով։
                          </p>
                          <br />
                          <p>
                              Նախընտրում եմ ազատ ժամանակս անցկացնել արդյունավետ։ Զբաղվում եմ սպորտվ, դիտում եմ
                              ինֆորմատիվ
                              հոլովակներ և ֆիլմեր, ինչպես նաև սիրում եմ ժամանակ անցկացնել բնության գրկում, որտեղ կարող
                              եմ գտնել
                              մտքի խաղաղություն, որն էլ օգնում է բալանսավորել իմ արտաքին և ներքին ներդաշնակությունը։
                          </p>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>
          </div>
    },
    {
        id: 11,
        firstName: "Evelina",
        secondName: "Beglaryan",
        position: "Doctor Assistant",
        positionBackground: "Nurse",
        // imageSrc: require("../Assets/Images/Staff/Evelina_Beglaryan.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedStaff/ԷվելինաԲեգլարյան.jpg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3></h3>
                          <p>
                              Ես Էվան եմ, Ինդիվիդում Ստոմատոլոգիական Կլինիկայում աշխատում եմ 2022 թվականից որպես
                              բուժքույր։ Աշխատանքս համատեղում եմ ուսման ու օտար լեզվի ուսումնասիրմանհետ։
                          </p>
                          <br />
                          <p>
                              Բուժքրոջ աշխատանքում ինձ ամենից շատ ոգևորում է այն, որ ես իմ աշխատանքովօգնում եմ բժշկին`
                              ում շնորհիվ առողջ և գեղեցիկ ժպիտներն ավելանում են: Ես հաճախ եմ նկատում , որ մեր թիմային
                              դրական էներգետիկան օգնում է պացիենտների լարվածության հաղթահարմանը։ Փորձում եմ հնարավորինս
                              սիրալիր լինել թե‘ ամենափոքր, թե‘ ամենամեծպացիենտի հետ: Կարծում եմ պրոֆեսիոնալիզմի մաս է
                              կազմում ոչ միայն մասնագիտական կրթվածությունը, այլև բարեհամբյուր սպասարկումն ու թիմային
                              աշխատանքը:
                          </p>
                          <br />
                          <p>
                              Հետաքրքրված եմ բիզնես կառավարմամբ ու սիրում եմ երբ ինձ նկարում են😄
                          </p>
                          <br />
                          <p>
                              Կյանքում շատ եմ կարևորում օգնություն ցուցաբերելու հատկությունը, ու այդ պատճառովպլանավորում
                              եմ զբաղվել անտուն մարդկանց օգնելու կարևորագույն քայլով։
                          </p>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>
          </div>
    },
    {
        id: 12,
        firstName: "Karine",
        secondName: "Hambardzumyan",
        position: "Doctor Assistant",
        positionBackground: "Nurse",
        // imageSrc: require("../Assets/Images/Staff/Karine_Hambardzumyan.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedStaff/ԿարինեՀամբարձումյան.jpg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3></h3>
                          <p>
                              Ես Կարինե Համբարձումյանն եմ, Ինդիվիդում Ստոմատոլոգիական Կլինիկայում աշխատում եմ 2018
                              թվականից որպես բուժքույր։
                          </p>
                          <br />
                          <p>
                              2014-2017թթ սովորել եմ ԵՊՀԲ քոլեջում: Այս պահին նաև մասնակցում եմ «Բուժքույրական գործը
                              21-րդ դարում կազմակերպում և կառավարում» նորարարական ծրագրին։
                          </p>
                          <br />
                          <p>
                              Բուժքրոջ աշխատանքում ինձ համար ամենագրավիչը թիմային աշխատանքն է, բժշկի աշխատանքի որակի
                              ապահովումը: Ես հաճախ զգում եմ , որ իմ սիրալիր պահվածքով նպաստում եմ պացիենտների
                              լարվածության հաղթահարմանը, բժշկի աշխատանքի էֆեկտիվության բարձրացմանը:
                          </p>
                          <br />
                          <p>
                              Հետաքրքրված եմ ֆիթնեսով և լողով, և երբ ազատ ժամանակ ունենամ, պլանավորում եմ ավտոդպրոց
                              գնալ:
                          </p>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>
          </div>
    },
    {
        id: 13,
        firstName: "Yelena",
        secondName: "Alexanyan",
        position: "Doctor Assistant",
        positionBackground: "Nurse",
        // imageSrc: require("../Assets/Images/Staff/Yelena_Alexanyan.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedStaff/ԵլենաԱլեքսանյան.jpg"),
        description: <div></div>
    },
    {
        id: 14,
        firstName: "Mariam",
        secondName: "Fahradyan",
        position: "Doctor Assistant",
        positionBackground: "Nurse",
        // imageSrc: require("../Assets/Images/Staff/Mariam_Fahradyan.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedStaff/ՄարիամՖահրադյան.jpg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3></h3>
                          <p>
                              Ես Մարիամ Ֆահրադյանն եմ, Ինդիվիդում Ստոմատոլոգիական Կլինիկայում աշխատում եմ 2019 թվականից
                              որպես բուժքույր: Սովորել եմ ԵՊՀԲՔ որպես մանկաբարձ, այս պահին նաևմասնակցում եմ
                              "Բուժքույրական գործը 21 -րդ դարում ծրագրին":Բուժքրոջաշխատանքում ինձ համար ամենագրավիչը
                              պացիենտի հետ աշխատելն է օգնությունցուցաբերելը ,ինչպես նաև գեղեցիկ ժպիտներ
                              պարգևելը:Աշխատանքում կարևորու եմ եմ ոչմիայն թիմային աշխատանքը այլ նաև պրոֆեսիոնալիզմը:
                          </p>
                          <br />
                          <p>
                              Աշխատելով պրոֆեսիոնալ թիմում, ես հասկանում եմ, որ հայտնվել եմ ճիշտ վայրում և ունեմիմ
                              կողմից շատ ու շատ անելիքներ, որպեսզի աջակից դառնամ այս մարդասիրականաշխատանքի որակի
                              բարձրացմանը և պատրաստ եմ անել իմ կողմից պահանջվող ամենքայլ այդ գործունեության ծավալման
                              ընթացքում:
                          </p>
                          <br />
                          <p>
                              Ապագայում պլանավորում եմ սովորել օտար լեզուներ : Կցանկանայի մասնակցել այլբուժքույրական
                              ծրագրի ևս որը կնպաստի գիտելիքի զարգացմանը և աշխատանքի որակիբարձրացմանը:
                          </p>
                          <br />
                          <p>
                              Հետաքրքրված եմ խոհանոցով , յոգայով սիրում եմ բնությունը, արևը և կենդանիների
                          </p>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>
          </div>
    },
    {
        id: 15,
        firstName: "Galina",
        secondName: "Eghoyan",
        position: "Doctor Assistant",
        positionBackground: "Nurse",
        imageSrc: require("../Assets/Images/updatedResizedStaff/ԳալինաԵղոյան.jpg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3></h3>
                          <p>
                              Ես Գալինան եմ, Ինդիվիդում ստոմատոլոգիակա կլինիկայում աշխատում եմ 2022 թվականից որպես
                              բուժքույր/ասիստենտ։
                          </p>
                          <br />
                          <p>
                              Այս պահին նաև ԵՊԲՀ-ի ստոմատոլոգիական ֆակուլտետի չորրորդ կուրսի ուսանողուհի եմ։ Աշխատանքն
                              ընտրելիս և առաժմ աշխատանքում գլխավոր նպատակս բժիշկ-պացիենտ փոխհարաբերությունն է, ընդհանուր
                              կլինիկայի աշխատանքի կառուցումն ու ճիշտ կազմակերպումը,մասնագիտական ոլորտում պրակտիկորեն
                              ծանոթանալու գործիքակազմից սկսած մինչև պացիենտներին դիմավորելու աշխատանքի կազմակերպումը։
                          </p>
                          <br />
                          <p>
                              Ապագայում պլանավորում եմ զարգանալ բուն մասնագիտությամբ, ձեռք բերել բարձր մասնագիտական
                              գիտելիքներ և հմտություններ:
                          </p>
                          <br />
                          <p>
                              Հետաքրքրված եմ ստեղծագրությամբ, արվեստով և հոգեբանությամբ (ժեստերի լեզվով)։ Ազատ ժամանակ
                              սիրում եմ զբավել գեղարվեստական գրականության ընթերցմամբ, ազատ ոճում ստողծագործելու և
                              վայելել բնությունը:
                          </p>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>
          </div>
    },
    // {
    //     id: null,
    //     firstName: "Mane",
    //     secondName: "",
    //     position: "Nurse",
    //     positionBackground: "Nurse",
    //     // imageSrc: require("../Assets/Images/Staff/Mariam_Fahradyan.jpeg"),
    //     imageSrc: "",
    //     description:
    //       <div>
    //           <StaffInfoBlock>
    //               <StaffInfoBlockLeft>
    //                   <div>
    //                       <h3></h3>
    //                       <p>
    //                           Ես Մանեն եմ, Ինդիվիդում Ստոմատոլոգիական Կլինիկայում աշխատում եմ 2022 թվականից՝ որպես բուժքույր։
    //                       </p>
    //                       <br />
    //                       <p>
    //                           Այս պահին նաև սովորում եմ ԵՊՀ կենսաֆիզիկա և կենսաինֆորմատիկայի բաժնում։ Նաև ուսումնասիրում եմ անգլերեն և ֆրանսերեն լեզուները։
    //                       </p>
    //                       <br />
    //                       <p>
    //                           Բուժքրոջ աշխատանքում ինձ համար ամենագրավիչն է պացիենտին և բժշկին գոհացնելը, առողջությունը հաճելի միջավայրում ապահովելը։ Պացիենտների լարվածությունը երաժշտության ճիշտ ընտրությամբ փորձում եմ մեղմացնել, քանի որ ինձ համար կարևոր է նրանց ժպիտով ճանապարհելը։ Ապագայում պլանավորում եմ ներգրավվել Էսթետիկայի և բժշկական կոսմետոլոգիայի ոլորտում։
    //                       </p>
    //                       <br />
    //                       <p>
    //                           Հետաքրքրված եմ սպորտով։ Նպատակս է լինել իմ աշխատանքում լավագույնը։ Երազանքներիցս մեկն է լինել 4 երեխաների մայր։😊
    //                       </p>
    //                   </div>
    //               </StaffInfoBlockLeft>
    //           </StaffInfoBlock>
    //       </div>
    // },
    {
        id: 16,
        firstName: "Andranik",
        secondName: "Melqonyan",
        position: "Doctor Assistant",
        positionBackground: "Nurse",
        imageSrc: require("../Assets/Images/updatedResizedStaff/ԱնդրանիկՄելքոնյան.jpg"),
        description: <div></div>
    },
    // {
    //     id: 17,
    //     firstName: "Marieta",
    //     secondName: "Stepanyan",
    //     position: "Doctor Assistant",
    //     positionBackground: "Nurse",
    //     imageSrc: require("../Assets/Images/updatedResizedStaff/ՄարիետաՍտեփանյան.jpg"),
    //     description: <div></div>
    // },
    {
        id: 18,
        firstName: "Tigran",
        secondName: "Vardazaryan",
        position: "Doctor Assistant",
        positionBackground: "Nurse",
        imageSrc: require("../Assets/Images/updatedResizedStaff/ՏիգրանՎարդազարյան.jpg"),
        description: <div></div>
    },
    // {
    //     id: 19,
    //     firstName: "Karen",
    //     secondName: "Israelyan",
    //     position: "Doctor Assistant",
    //     positionBackground: "Nurse",
    //     imageSrc: require("../Assets/Images/updatedResizedStaff/ԿարենԻսրաելյան.jpg"),
    //     description: <div></div>
    // },
    {
        id: 20,
        firstName: "Anush",
        secondName: "Karapetyan",
        position: "Cosmetologist",
        positionBackground: "Cosmetologist",
        // imageSrc: require("../Assets/Images/Staff/Anush.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedStaff/ԱնուշԿարապետյան.jpg"),
        description:
          <div></div>
    },
    {
        id: 21,
        firstName: "Shushan",
        secondName: "Abrahamyan",
        position: "Administrator",
        positionBackground: "Administrator",
        // imageSrc: require("../Assets/Images/Staff/Shushan_Abrahamyan.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedStaff/ՇուշանԱբրահամյան.jpg"),
        description:
            <div></div>
    },
    {
        id: 22,
        firstName: "Gayane",
        secondName: "Khachaturova",
        position: "Administrator",
        positionBackground: "Administrator",
        imageSrc: require("../Assets/Images/updatedResizedStaff/ԽաչատուրովաԳայանե.jpg"),
        description: <div></div>
    },
    // {
    //     id: 23,
    //     firstName: "Nvard",
    //     secondName: "Minasyan",
    //     position: "Administrator",
    //     positionBackground: "Administrator",
    //     imageSrc: require("../Assets/Images/updatedResizedStaff/ՆվարդՄինասյան.jpg"),
    //     description:
    //       <div></div>
    // },
    // {
    //     id: 24,
    //     firstName: "Lida",
    //     secondName: "Khachatryan",
    //     position: "Administrator",
    //     positionBackground: "Administrator",
    //     imageSrc: require("../Assets/Images/updatedResizedStaff/ԼիդաԽաչատրյան.jpg"),
    //     description:
    //       <div></div>
    // }
];

const dentistsInfoArmenian = [
    {
        id: 0,
        firstName: "Վարազդատ",
        secondName: "Թանգամյան",
        position: "Բժիշկ - Ստոմատոլոգ - Իմպլանտոլոգ",
        positionBackground: "Բժիշկ",
        // imageSrc: require("../Assets/Images/Dentists/Varazdat.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedDoctors/ՎարազդատԹանգամյան.jpg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Կրթություն:</h3>
                          <ul>
                              <li>Մխիթար Հերացու անվան Երևանի Պետական Բժշկական Համալսարան : 1995-2000</li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>

              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Մասնագիտական գործունեություն :</h3>
                          <ul>
                              <li>"Ինդիվիդում" ստոմատոլոգիական կլինիկա : 2009-ից</li>
                              <li>"Լյուքսոդենտ" ստոմատոլոգիական կլինիկա : 2005-2009</li>
                              <li>Հայաստանի Հանրապետության Պաշտպանության Նախարարության զորամասի բուժծառայության պետ :
                                  2002-2004
                              </li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>

              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Վերապատրաստումներ:</h3>
                          <ul>
                              <li>ՀՀ Մ. Հերացու անվան բժշկական համալսարանում : 2013</li>
                              <li>Հայաստանի Հանրապետության Առողջապահության Ազգային Ինստիտուտում : 2009</li>
                              <li>Օրդինատուրա Ռուսաստանի Հետդիպլոմային կրթության բժշկական ակադեմիայում : 2000-2002</li>
                              <li>Ինտերնատուրա, Ք. Երևանի թիվ 10 ստոմատոլոգիական պոլիկլինիկայում : 2000</li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>
          </div>
    },
    {
        id: 1,
        firstName: "Մարինե",
        secondName: "Մկրտչյան",
        position: "Բժիշկ - Ստոմատոլոգ",
        positionBackground: "Բժիշկ",
        // imageSrc: require("../Assets/Images/Dentists/Marine.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedDoctors/ՄարինեՄկրտչյան.jpg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Personal information:</h3>
                          <p>Date of Birth: 07 October 1978</p>
                          <p>Mobile: +37499990678</p>
                          <p>E-mail: marinemkrtichyan@gmail.com</p>
                      </div>
                  </StaffInfoBlockLeft>
                  <StaffInfoBlockRight>
                      <div>
                          <h3>Personal experience:</h3>
                          <ul>
                              <li>Individuum Dental Clinic, Chief Medical Officer: 2009 July 1 –present</li>
                              <li>Luxodent Dental Clinic, Dental Therapist: 2005 February -2009</li>
                              <li>Private practice in Agarak: 2002 February -2004 December</li>
                              <li>N 10 Dental Polyclinic, Internship: 2000 June – 2001 June</li>
                          </ul>
                      </div>
                  </StaffInfoBlockRight>
              </StaffInfoBlock>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Personal skills:</h3>
                          <p>Proficiency in:</p>
                          <ul>
                              <li>Diagnosing dental problems and conditions</li>
                              <li>Reading and interpreting dental computed tomography (CT) and dental X-ray results</li>
                              <li>Teeth whitening</li>
                              <li>Endodontic treatment</li>
                              <li>Aesthetic restoration</li>
                              <li>Aesthetic prosthodontic treatment</li>
                              <li>Problem solving</li>
                              <li>Team building and management</li>
                              <li>Leadership and communication</li>
                              <li>Quality control</li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
                  <StaffInfoBlockRight>
                      <div>
                          <h3>Education:</h3>
                          <ul>
                              <li>American University of Armenia, Gerald and Patricia Turpanjean School of Public Health
                                  (AUA):
                                  2017-present
                              </li>
                              <li>National Institute of Health: Prosthodontic Dentistry 03/ 2017-12/ 2017</li>
                              <li>Yerevan State Medical University, Faculty of Dentistry (YSMU): 1995-2000</li>
                          </ul>
                      </div>
                  </StaffInfoBlockRight>
              </StaffInfoBlock>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Boards and Certifications:</h3>
                          <ul>
                              <li>Certification in Prosthodontic Dentistry, National Institute of Health of Armenia
                                  2017
                              </li>
                              <li>Certification in “Advancing Women in Leadership and Decision Making” courses</li>
                              <li>American University of Armenia Extension Armenian International Women’s Association
                                  2017
                              </li>
                              <li>State Examination Commission of General Dentistry, Yerevan State Medical University,
                                  2000
                              </li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
                  <StaffInfoBlockRight>
                      <div>
                          <h3>Community service activities:</h3>
                          <ul>
                              <li>Regular organization of informational presentations on Individual Oral Hygiene for
                                  elementary school children
                              </li>
                              <li>Regular organization of informational presentations on Professional Orientation for
                                  high
                                  school students
                              </li>
                              <li>Providing free treatment for orphanage children from the SOS Mankakan Gyugher Hayastan
                                  organization
                              </li>
                          </ul>
                      </div>
                  </StaffInfoBlockRight>
              </StaffInfoBlock>
          </div>
    },
    {
        id: 2,
        firstName: "Անահիտ",
        secondName: "Մելքոնյան",
        position: "Բժիշկ - Ստոմատոլոգ",
        positionBackground: "Բժիշկ",
        // imageSrc: require("../Assets/Images/Dentists/Anahit.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedDoctors/ԱնահիտՄելքոնյան.jpg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3></h3>
                          <ul>
                              <li>Ինտերնատուրա` N1 Համալսարանային ստոմատոլոգիական պոլիկլինիկայում : 2006-2007</li>
                              <li>Մխիթար Հերացու անվան Երևանի պետական բժշկական համալսարան, գերազանց (կարմիր դիպլոմ):
                                  Որակավորում` բժիշկ-ստոմատոլոգ : 2001-2006
                              </li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>

              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Մասնագիտական գործունեություն :</h3>
                          <ul>
                              <li>"Ինդիվիդում" ստոմատոլոգիական կլինիկա : 2012-ից</li>
                              <li>“Դելյուքս” մասնավոր կլինիկա : 2011-2012</li>
                              <li>Մանկական պոլիկլինիկա “Արսել” : 2009</li>
                              <li>“Կ.Սարդարյան” մասնավոր կլինիկա : 2008-2009</li>
                              <li>“ՍտոմԼայն” մասնավոր կլինիկա : 2007</li>
                              <li>Տարածքային ստոմատոլոգիական պոլիկլինիկա N1 : 2006-2007</li>
                              <li>Հոսպիտալին կից պոլիկլինիկա (սովորելու 4-5 կուրսերում) : 2004-2006</li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>

              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Վերապատրաստումներ:</h3>
                          <ul>
                              <li>Վերապատրաստում “ՍտոմԼայն” մասնավոր կլինիկայում
                                  Ընդհանուր ընդունելության բժիշկ, առկա են հավաստագրեր : 2007
                              </li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>
          </div>
    },
    {
        id: 3,
        firstName: "Աիդա",
        secondName: "Բաբայան",
        position: "Բժիշկ - Ստոմատոլոգ",
        positionBackground: "Բժիշկ",
        // imageSrc: require("../Assets/Images/Dentists/Aida.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedDoctors/ԱիդաԲաբայան.jpg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3></h3>
                          <ul>
                              <li>Երևանի Մխիթար Հերացու անվան պետական բժշկական համալսարան՝ ստոմատոլոգիական ֆակուլտետ :
                                  2007-2012
                              </li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Մասնագիտական գործունեություն :</h3>
                          <ul>
                              <li>"Ինդիվիդում" ստոմատոլոգիական կլինիկա : 2014-ից</li>
                              <li>Բժիշկ-ստոմատոլոգ «ՍՄ» ստոմատոլոգիական կլինիկայում : 2013-2017</li>
                          </ul>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>

          </div>
    },
    {
        id: 4,
        firstName: "Հովհաննես",
        secondName: "Զեյնալյան",
        position: "Բժիշկ - Ստոմատոլոգ",
        positionBackground: "Բժիշկ",
        // imageSrc: require("../Assets/Images/Dentists/Hovhannes.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedDoctors/ՀովհաննեսԶեյնալյան.jpg"),
        description:
          <div></div>
    },
    {
        id: 5,
        firstName: "Արմենակ",
        secondName: "Սրոցանց",
        position: "Բժիշկ - Ստոմատոլոգ",
        positionBackground: "Բժիշկ",
        // imageSrc: require("../Assets/Images/Dentists/Armenak.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedDoctors/ԱրմենակՍրոցանց.jpg"),
        description:
          <div></div>
    },
    {
        id: 6,
        firstName: "Արմեն",
        secondName: "Խաչանյան",
        position: "Բժիշկ - Ստոմատոլոգ",
        positionBackground: "Բժիշկ",
        imageSrc: require("../Assets/Images/updatedResizedDoctors/ԱրմենԽաչանյան.jpg"),
        description:
          <div></div>
    },
    {
        id: 7,
        firstName: "Ալբերտ",
        secondName: "Կոտանով",
        position: "Բժիշկ - Ստոմատոլոգ",
        positionBackground: "Բժիշկ",
        imageSrc: require("../Assets/Images/updatedResizedDoctors/ԱլբերտԿոտանով.jpg"),
        description:
          <div></div>
    },
    {
        id: 8,
        firstName: "Լիանա",
        secondName: "Գևորգյան",
        position: "Բժիշկ - Ստոմատոլոգ",
        positionBackground: "Բժիշկ",
        imageSrc: require("../Assets/Images/updatedResizedDoctors/ԼիանաԳևորգյան.jpg"),
        description:
          <div></div>
    },
    // {
    //     id: 9,
    //     firstName: "Ժորա",
    //     secondName: "Հոդաբաշյան",
    //     position: "Բժիշկ - Ստոմատոլոգ",
    //     positionBackground: "Բժիշկ",
    //     // imageSrc: require("../Assets/Images/Dentists/Armenak.jpeg"),
    //     imageSrc: require("../Assets/Images/updatedResizedDoctors/ԺորաՀոդաբաշյան.jpg"),
    //     description:
    //       <div></div>
    // },
    // {
    //     id: null,
    //     firstName: "Անդրանիկ",
    //     secondName: "Մելքոնյան",
    //     position: "Բուժեղբայր",
    //     positionBackground: "Բուժեղբայր",
    //     // imageSrc: require("../Assets/Images/Staff/Sofy_Hakobyan.jpeg"),
    //     imageSrc: "",
    //     description:
    //       <div>
    //           <StaffInfoBlock>
    //               <StaffInfoBlockLeft>
    //                   <div>
    //                       <h3></h3>
    //                       <p>
    //                           Ես Մելքոնյան Անդրանիկն եմ ։ Ինդիվիդում Ստոմատոլոգիական Կլինիկայում աշխատում եմ 2022
    //                           թվականից , որպես ասիստենտ ։ Ինչպես նաև ուսանում եմ «ՀԱՅԲՈՒՍԱԿ» համալսարանի
    //                           Ստոմատոլոգիական ֆակուլտետում ։
    //                       </p>
    //                       <br />
    //                       <p>
    //                           Ասիստենտի աշխատանքը ինձ ընձեռնել է հնարավորթյուն համատեղելու ուսանողի կյանքն աշխատանքի
    //                           հետ , և միևնույն ժամանակ ՝ տեսական գիտելիքներս կիրառել գործնականում ։
    //                       </p>
    //                       <br />
    //                       <p>
    //                           Աշխատելով այստեղ ես արդեն գիտակցում եմ ինչպես պետք է մոտենալ պացիենտներին թե՛ որպես
    //                           ասիստենտ և թե՛ որպես բժիշկ ։
    //                       </p>
    //                       <br />
    //                       <p>
    //                           Մոտ ապագայում, երբ բարելավեմ անգլերենի մակարդակը , ցանկանում եմ մասնակցել Դոմինիկո Ռիկուչիի
    //                           դասընթացներին ։ ՀԵտաքրքրություններս շատ են , բայց առանձնապես շատ եմ սիրում ֆուտբոլը ։ Իսկ
    //                           ազատ ժամանակ ունենալու դեպքում ցանկանում եմ սովորել կիթառ նվագել ։
    //                       </p>
    //                   </div>
    //               </StaffInfoBlockLeft>
    //           </StaffInfoBlock>
    //       </div>
    // },

    {
        id: 10,
        firstName: "Քրիստինե",
        secondName: "Ղազարյան",
        position: "Բժշկի Օգնական",
        positionBackground: "Բուժքույր",
        // imageSrc: require("../Assets/Images/Staff/Christine_Ghazaryan.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedStaff/ՔրիստինեՂազարյան.jpg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3></h3>
                          <p>
                              Ես Քրիստինե Ղազարյանն եմ, Ինդիվիդում ստոմատոլոգիական կլինիկայում աշխատում եմ 2020
                              թվականից,
                              որպես բուժքույր։
                          </p>
                          <br />
                          <p>
                              Աշխատանքին համատեղ սովորում եմ ԵՊՀ – ի Ֆարմացիայի ֆակուլտետում, որպեսզի
                              հետագայում իմ ներդրումն ունենամ առողջապահական ոլորտում։
                          </p>
                          <br />
                          <p>
                              Ինչ վերաբերում է իմ աշխատանքին՝ ամենից
                              առավել կարևորում եմ պրոֆեսիոնալիզմը, որն իր դրական ազդեցությունն է ունենում աշխատանքի
                              կազմակերպման գործում։ Այս ամենի հնարավորությունը տալիս է թիմային աշխատանքը, որի շնորհիվ
                              գործընկերներիս հետ փոխանակվում ենք ձեռք բերած հմտություններով և գիտելիքներով։
                          </p>
                          <br />
                          <p>
                              Նախընտրում եմ ազատ ժամանակս անցկացնել արդյունավետ։ Զբաղվում եմ սպորտվ, դիտում եմ
                              ինֆորմատիվ
                              հոլովակներ և ֆիլմեր, ինչպես նաև սիրում եմ ժամանակ անցկացնել բնության գրկում, որտեղ կարող
                              եմ գտնել
                              մտքի խաղաղություն, որն էլ օգնում է բալանսավորել իմ արտաքին և ներքին ներդաշնակությունը։
                          </p>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>
          </div>
    },
    {
        id: 11,
        firstName: "Էվելինա",
        secondName: "Բեգլարյան",
        position: "Բժշկի Օգնական",
        positionBackground: "Բուժքույր",
        // imageSrc: require("../Assets/Images/Staff/Evelina_Beglaryan.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedStaff/ԷվելինաԲեգլարյան.jpg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3></h3>
                          <p>
                              Ես Էվան եմ, Ինդիվիդում Ստոմատոլոգիական Կլինիկայում աշխատում եմ 2022 թվականից որպես
                              բուժքույր։ Աշխատանքս համատեղում եմ ուսման ու օտար լեզվի ուսումնասիրմանհետ։
                          </p>
                          <br />
                          <p>
                              Բուժքրոջ աշխատանքում ինձ ամենից շատ ոգևորում է այն, որ ես իմ աշխատանքովօգնում եմ բժշկին`
                              ում շնորհիվ առողջ և գեղեցիկ ժպիտներն ավելանում են: Ես հաճախ եմ նկատում , որ մեր թիմային
                              դրական էներգետիկան օգնում է պացիենտների լարվածության հաղթահարմանը։ Փորձում եմ հնարավորինս
                              սիրալիր լինել թե‘ ամենափոքր, թե‘ ամենամեծպացիենտի հետ: Կարծում եմ պրոֆեսիոնալիզմի մաս է
                              կազմում ոչ միայն մասնագիտական կրթվածությունը, այլև բարեհամբյուր սպասարկումն ու թիմային
                              աշխատանքը:
                          </p>
                          <br />
                          <p>
                              Հետաքրքրված եմ բիզնես կառավարմամբ ու սիրում եմ երբ ինձ նկարում են😄
                          </p>
                          <br />
                          <p>
                              Կյանքում շատ եմ կարևորում օգնություն ցուցաբերելու հատկությունը, ու այդ պատճառովպլանավորում
                              եմ զբաղվել անտուն մարդկանց օգնելու կարևորագույն քայլով։
                          </p>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>
          </div>
    },
    {
        id: 12,
        firstName: "Կարինե",
        secondName: "Համբարձումյան",
        position: "Բժշկի Օգնական",
        positionBackground: "Բուժքույր",
        // imageSrc: require("../Assets/Images/Staff/Karine_Hambardzumyan.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedStaff/ԿարինեՀամբարձումյան.jpg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3></h3>
                          <p>
                              Ես Կարինե Համբարձումյանն եմ, Ինդիվիդում Ստոմատոլոգիական Կլինիկայում աշխատում եմ 2018
                              թվականից որպես բուժքույր։
                          </p>
                          <br />
                          <p>
                              2014-2017թթ սովորել եմ ԵՊՀԲ քոլեջում: Այս պահին նաև մասնակցում եմ «Բուժքույրական գործը
                              21-րդ դարում կազմակերպում և կառավարում» նորարարական ծրագրին։
                          </p>
                          <br />
                          <p>
                              Բուժքրոջ աշխատանքում ինձ համար ամենագրավիչը թիմային աշխատանքն է, բժշկի աշխատանքի որակի
                              ապահովումը: Ես հաճախ զգում եմ , որ իմ սիրալիր պահվածքով նպաստում եմ պացիենտների
                              լարվածության հաղթահարմանը, բժշկի աշխատանքի էֆեկտիվության բարձրացմանը:
                          </p>
                          <br />
                          <p>
                              Հետաքրքրված եմ ֆիթնեսով և լողով, և երբ ազատ ժամանակ ունենամ, պլանավորում եմ ավտոդպրոց
                              գնալ:
                          </p>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>
          </div>
    },
    {
        id: 13,
        firstName: "Ելենա",
        secondName: "Ալեքսանյան",
        position: "Բժշկի Օգնական",
        positionBackground: "Բժշկի Օգնական",
        // imageSrc: require("../Assets/Images/Staff/Yelena_Alexanyan.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedStaff/ԵլենաԱլեքսանյան.jpg"),
        description: <div>
            <StaffInfoBlock>
                <StaffInfoBlockLeft>
                    <div>
                        <h3></h3>
                        <p>
                            Ես Ելենա Ալեքսանյանն եմ, Ինդիվիդում Ստոմատոլոգիական Կլինիկայում աշխատում եմ 2021 թվականից`
                            որպես բուժքույր/ասիստենտ։ Այս պահին նաև սովորում եմ հայ-ամերիկյան «Էրեբունի» ՊԲՔ-ի
                            «քույրական գործի կազմակերպում» մասնագիտությամբ 5-րդ կուրսոմ։
                        </p>
                        <br />
                        <p>
                            Բուժքրոջ աշխատանքում ինձ համար կարևոր է ստեղծել աշխատանքային բարենպաստ և հաճելի միջավայր,
                            ապահովել պացենտի հարմարավետությունը և օգնել բժշկին՝ ստեղծելով իդեալական գործիքակազմ և
                            աջակցելով ասիստենտական միջամտություններով։
                        </p>
                        <br />
                        <p>
                            Պետք է ասեմ, որ Ինդիվիդում-ի թիմում աշխատելով՝ ես լիարժեք գնահատեցի թիմային աշխատանքի
                            կարևորությունը և դրա կատարելագործումը։ Սա միջավայր է, որտեղ ես շրջապատված եմ ինձանից խելացի
                            մարդկանցով և ամեն ակնթարթում ունեմ անվերջ սովորելու և ձգտելու հնարավորություն։ Սիրում եմ իմ
                            աշխատանքը և շատ եմ ուրախանում այն ջերմ ժպիտներից, որոնք նվիրում է իմ սիրելի Ինդիվիդում-ը։
                            Ապագայիս մասին կողմնորոշումներս բազմազան են, սակայն հստակ է մի բան՝ ԲԺԻՇԿ եմ դառնալու։ Ես
                            ուրախ եմ, որ սա կլինի իմ առաջին իրեղեն ապացույցը, որին ամեն անգամ կնայեմ, կմոտիվացվեմ և
                            կմոտենամ այն մարդուն, որի մասին ամեն ինչ պլանավորվել է մտքումս և կիարգործվի գիտակցությանս
                            կողմից։
                        </p>
                        <br />
                        <p>
                            Ես ազատ ժամանակ սիրում եմ խաղալ բասկետբոլ և լսել երաժշտություն։ Իսկ հեռավոր ապագայում ուզում
                            եմ զբաղվել ալպինիզմով և շրջագայել։
                        </p>
                    </div>
                </StaffInfoBlockLeft>
            </StaffInfoBlock>
        </div>
    },
    {
        id: 14,
        firstName: "Մարիամ",
        secondName: "Ֆահրադյան",
        position: "Բժշկի Օգնական",
        positionBackground: "Բժշկի Օգնական",
        // imageSrc: require("../Assets/Images/Staff/Mariam_Fahradyan.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedStaff/ՄարիամՖահրադյան.jpg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3></h3>
                          <p>
                              Ես Մարիամ Ֆահրադյանն եմ, Ինդիվիդում Ստոմատոլոգիական Կլինիկայում աշխատում եմ 2019 թվականից
                              որպես բուժքույր: Սովորել եմ ԵՊՀԲՔ որպես մանկաբարձ, այս պահին նաևմասնակցում եմ
                              "Բուժքույրական գործը 21 -րդ դարում ծրագրին":Բուժքրոջաշխատանքում ինձ համար ամենագրավիչը
                              պացիենտի հետ աշխատելն է օգնությունցուցաբերելը ,ինչպես նաև գեղեցիկ ժպիտներ
                              պարգևելը:Աշխատանքում կարևորու եմ եմ ոչմիայն թիմային աշխատանքը այլ նաև պրոֆեսիոնալիզմը:
                          </p>
                          <br />
                          <p>
                              Աշխատելով պրոֆեսիոնալ թիմում, ես հասկանում եմ, որ հայտնվել եմ ճիշտ վայրում և ունեմիմ
                              կողմից շատ ու շատ անելիքներ, որպեսզի աջակից դառնամ այս մարդասիրականաշխատանքի որակի
                              բարձրացմանը և պատրաստ եմ անել իմ կողմից պահանջվող ամենքայլ այդ գործունեության ծավալման
                              ընթացքում:
                          </p>
                          <br />
                          <p>
                              Ապագայում պլանավորում եմ սովորել օտար լեզուներ : Կցանկանայի մասնակցել այլբուժքույրական
                              ծրագրի ևս որը կնպաստի գիտելիքի զարգացմանը և աշխատանքի որակիբարձրացմանը:
                          </p>
                          <br />
                          <p>
                              Հետաքրքրված եմ խոհանոցով , յոգայով սիրում եմ բնությունը, արևը և կենդանիների
                          </p>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>
          </div>
    },
    {
        id: 15,
        firstName: "Գալինա",
        secondName: "Եղոյան",
        position: "Բժշկի Օգնական",
        positionBackground: "Բժշկի Օգնական",
        // imageSrc: require("../Assets/Images/Staff/Mariam_Fahradyan.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedStaff/ԳալինաԵղոյան.jpg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3></h3>
                          <p>
                              Ես Գալինան եմ, Ինդիվիդում ստոմատոլոգիակա կլինիկայում աշխատում եմ 2022 թվականից որպես
                              բուժքույր/ասիստենտ։
                          </p>
                          <br />
                          <p>
                              Այս պահին նաև ԵՊԲՀ-ի ստոմատոլոգիական ֆակուլտետի չորրորդ կուրսի ուսանողուհի եմ։ Աշխատանքն
                              ընտրելիս և առաժմ աշխատանքում գլխավոր նպատակս բժիշկ-պացիենտ փոխհարաբերությունն է, ընդհանուր
                              կլինիկայի աշխատանքի կառուցումն ու ճիշտ կազմակերպումը,մասնագիտական ոլորտում պրակտիկորեն
                              ծանոթանալու գործիքակազմից սկսած մինչև պացիենտներին դիմավորելու աշխատանքի կազմակերպումը։
                          </p>
                          <br />
                          <p>
                              Ապագայում պլանավորում եմ զարգանալ բուն մասնագիտությամբ, ձեռք բերել բարձր մասնագիտական
                              գիտելիքներ և հմտություններ:
                          </p>
                          <br />
                          <p>
                              Հետաքրքրված եմ ստեղծագրությամբ, արվեստով և հոգեբանությամբ (ժեստերի լեզվով)։ Ազատ ժամանակ
                              սիրում եմ զբավել գեղարվեստական գրականության ընթերցմամբ, ազատ ոճում ստողծագործելու և
                              վայելել բնությունը:
                          </p>
                      </div>
                  </StaffInfoBlockLeft>
              </StaffInfoBlock>
          </div>
    },
    // {
    //     id: null,
    //     firstName: "Մանե",
    //     secondName: "",
    //     position: "Բուժքույր",
    //     positionBackground: "Բուժքույր",
    //     // imageSrc: require("../Assets/Images/Staff/Mariam_Fahradyan.jpeg"),
    //     imageSrc: "",
    //     description:
    //       <div>
    //           <StaffInfoBlock>
    //               <StaffInfoBlockLeft>
    //                   <div>
    //                       <h3></h3>
    //                       <p>
    //                           Ես Մանեն եմ, Ինդիվիդում Ստոմատոլոգիական Կլինիկայում աշխատում եմ 2022 թվականից՝ որպես բուժքույր։
    //                       </p>
    //                       <br />
    //                       <p>
    //                           Այս պահին նաև սովորում եմ ԵՊՀ կենսաֆիզիկա և կենսաինֆորմատիկայի բաժնում։ Նաև ուսումնասիրում եմ անգլերեն և ֆրանսերեն լեզուները։
    //                       </p>
    //                       <br />
    //                       <p>
    //                           Բուժքրոջ աշխատանքում ինձ համար ամենագրավիչն է պացիենտին և բժշկին գոհացնելը, առողջությունը հաճելի միջավայրում ապահովելը։ Պացիենտների լարվածությունը երաժշտության ճիշտ ընտրությամբ փորձում եմ մեղմացնել, քանի որ ինձ համար կարևոր է նրանց ժպիտով ճանապարհելը։ Ապագայում պլանավորում եմ ներգրավվել Էսթետիկայի և բժշկական կոսմետոլոգիայի ոլորտում։
    //                       </p>
    //                       <br />
    //                       <p>
    //                           Հետաքրքրված եմ սպորտով։ Նպատակս է լինել իմ աշխատանքում լավագույնը։ Երազանքներիցս մեկն է լինել 4 երեխաների մայր։😊
    //                       </p>
    //                   </div>
    //               </StaffInfoBlockLeft>
    //           </StaffInfoBlock>
    //       </div>
    // },
    {
        id: 16,
        firstName: "Անդրանիկ",
        secondName: "Մելքոնյան",
        position: "Բժշկի Օգնական",
        positionBackground: "Nurse",
        imageSrc: require("../Assets/Images/updatedResizedStaff/ԱնդրանիկՄելքոնյան.jpg"),
        description: <div></div>
    },
    // {
    //     id: 17,
    //     firstName: "Մարիետա",
    //     secondName: "Ստեփանյան",
    //     position: "Բժշկի Օգնական",
    //     positionBackground: "Nurse",
    //     imageSrc: require("../Assets/Images/updatedResizedStaff/ՄարիետաՍտեփանյան.jpg"),
    //     description: <div></div>
    // },
    {
        id: 18,
        firstName: "Տիգրան",
        secondName: "Վարդազարյան",
        position: "Բժշկի Օգնական",
        positionBackground: "Nurse",
        imageSrc: require("../Assets/Images/updatedResizedStaff/ՏիգրանՎարդազարյան.jpg"),
        description: <div></div>
    },
    // {
    //     id: 19,
    //     firstName: "Կարեն",
    //     secondName: "Իսրաելյան",
    //     position: "Բժշկի Օգնական",
    //     positionBackground: "Nurse",
    //     imageSrc: require("../Assets/Images/updatedResizedStaff/ԿարենԻսրաելյան.jpg"),
    //     description: <div></div>
    // },
    {
        id: 20,
        firstName: "Անուշ",
        secondName: "Կարապետյան",
        position: "Կոսմետոլոգ",
        positionBackground: "Cosmetologist",
        // imageSrc: require("../Assets/Images/Staff/Anush.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedStaff/ԱնուշԿարապետյան.jpg"),
        description:
          <div></div>
    },
    {
        id: 21,
        firstName: "Շուշան",
        secondName: "Աբրահամյան",
        position: "Գլխավոր Ադմինիստրատոր",
        positionBackground: "Administrator",
        // imageSrc: require("../Assets/Images/Staff/Shushan_Abrahamyan.jpeg"),
        imageSrc: require("../Assets/Images/updatedResizedStaff/ՇուշանԱբրահամյան.jpg"),
        description:
            <div></div>
    },
    {
        id: 22,
        firstName: "Գայանե",
        secondName: "Խաչատուրովա",
        position: "Ադմինիստրատոր",
        positionBackground: "Administrator",
        imageSrc: require("../Assets/Images/updatedResizedStaff/ԽաչատուրովաԳայանե.jpg"),
        description: <div></div>
    },
    // {
    //     id: 23,
    //     firstName: "Նվարդ",
    //     secondName: "Մինասյան",
    //     position: "Ադմինիստրատոր",
    //     positionBackground: "Administrator",
    //     imageSrc: require("../Assets/Images/updatedResizedStaff/ՆվարդՄինասյան.jpg"),
    //     description:
    //       <div></div>
    // },
    // {
    //     id: 24,
    //     firstName: "Լիդա",
    //     secondName: "Խաչատրյան",
    //     position: "Ադմինիստրատոր",
    //     positionBackground: "Administrator",
    //     imageSrc: require("../Assets/Images/updatedResizedStaff/ԼիդաԽաչատրյան.jpg"),
    //     description:
    //       <div></div>
    // }
];

export function getDentistsInfo() {
    return dentistsInfo;
}

export function getDentistsInfoArmenian() {
    return dentistsInfoArmenian;
}
