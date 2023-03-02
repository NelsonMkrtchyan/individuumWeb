import { StaffInfoBlock, StaffInfoBlockLeft, StaffInfoBlockRight } from "../Components/Styles";

const dentistsInfo = [
    {
        id: 0,
        firstName: "Varazdat",
        secondName: "Tangamyan",
        position: "Doctor - Dentist - Implantologist",
        positionBackground: "Doctor",
        imageSrc: require("../Assets/Images/Dentists/Varazdat.jpeg"),
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
        position: "DOS - MPH candidate - Chief Medical Officer at Individuum Dental Clinic",
        positionBackground: "Doctor",
        imageSrc: require("../Assets/Images/Dentists/Marine.jpeg"),
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
        imageSrc: require("../Assets/Images/Dentists/Anahit.jpeg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Կրթություն:</h3>
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
        imageSrc: require("../Assets/Images/Dentists/Aida.jpeg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Կրթություն:</h3>
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
        imageSrc: require("../Assets/Images/Dentists/Hovhannes.jpeg"),
        description:
          <div></div>
    },
    {
        id: 5,
        firstName: "Armenak",
        secondName: "Srocanc",
        position: "Doctor - Dentist",
        positionBackground: "Doctor",
        imageSrc: require("../Assets/Images/Dentists/Armenak.jpeg"),
        description:
          <div></div>
    },
    {
        id: 6,
        firstName: "Sofy",
        secondName: "Hakobyan",
        position: "Nurse",
        positionBackground: "Nurse",
        imageSrc: require("../Assets/Images/Staff/Sofy_Hakobyan.jpeg"),
        description:
          <div></div>
    },
    {
        id: 7,
        firstName: "Christine",
        secondName: "Ghazaryan",
        position: "Nurse",
        positionBackground: "Nurse",
        imageSrc: require("../Assets/Images/Staff/Christine_Ghazaryan.jpeg"),
        description:
          <div></div>
    },
    {
        id: 8,
        firstName: "Evelina",
        secondName: "Beglaryan",
        position: "Nurse",
        positionBackground: "Nurse",
        imageSrc: require("../Assets/Images/Staff/Evelina_Beglaryan.jpeg"),
        description:
          <div></div>
    },
    {
        id: 9,
        firstName: "Karine",
        secondName: "Hambardzumyan",
        position: "Nurse",
        positionBackground: "Nurse",
        imageSrc: require("../Assets/Images/Staff/Karine_Hambardzumyan.jpeg"),
        description:
          <div></div>
    },
    {
        id: 10,
        firstName: "Yelena",
        secondName: "Alexanyan",
        position: "Nurse",
        positionBackground: "Nurse",
        imageSrc: require("../Assets/Images/Staff/Yelena_Alexanyan.jpeg"),
        description: <div></div>
    },
    {
        id: 11,
        firstName: "Mariam",
        secondName: "Fahradyan",
        position: "Nurse",
        positionBackground: "Nurse",
        imageSrc: require("../Assets/Images/Staff/Mariam_Fahradyan.jpeg"),
        description:
          <div></div>
    },
    {
        id: 12,
        firstName: "Anush",
        secondName: "Karapetyan",
        position: "Cosmetologist",
        positionBackground: "Cosmetologist",
        imageSrc: require("../Assets/Images/Staff/Anush.jpeg"),
        description:
          <div></div>
    },
    {
        id: 13,
        firstName: "Shushan",
        secondName: "Abrahamyan",
        position: "Administrator",
        positionBackground: "Administrator",
        imageSrc: require("../Assets/Images/Staff/Shushan_Abrahamyan.jpeg"),
        description:
          <div></div>
    }
];

const dentistsInfoArmenian = [
    {
        id: 0,
        firstName: "Վարազդատ",
        secondName: "Թանգամյան",
        position: "Բժիշկ - Ատամնաբուժ - Իմպլանտոլոգ",
        positionBackground: "Բժիշկ",
        imageSrc: require("../Assets/Images/Dentists/Varazdat.jpeg"),
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
        position: "Բժիշկ - Ատամնաբուժ",
        positionBackground: "Բժիշկ",
        imageSrc: require("../Assets/Images/Dentists/Marine.jpeg"),
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
        position: "Բժիշկ - Ատամնաբուժ",
        positionBackground: "Բժիշկ",
        imageSrc: require("../Assets/Images/Dentists/Anahit.jpeg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Կրթություն:</h3>
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
        position: "Բժիշկ - Ատամնաբուժ",
        positionBackground: "Բժիշկ",
        imageSrc: require("../Assets/Images/Dentists/Aida.jpeg"),
        description:
          <div>
              <StaffInfoBlock>
                  <StaffInfoBlockLeft>
                      <div>
                          <h3>Կրթություն:</h3>
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
        position: "Բժիշկ - Ատամնաբուժ",
        positionBackground: "Բժիշկ",
        imageSrc: require("../Assets/Images/Dentists/Hovhannes.jpeg"),
        description:
          <div></div>
    },
    {
        id: 5,
        firstName: "Արմենակ",
        secondName: "Սրոցանց",
        position: "Բժիշկ - Ատամնաբուժ",
        positionBackground: "Բժիշկ",
        imageSrc: require("../Assets/Images/Dentists/Armenak.jpeg"),
        description:
          <div></div>
    },
    {
        id: 6,
        firstName: "Սոֆի",
        secondName: "Հակոբյան",
        position: "Բուժքույր",
        positionBackground: "Բուժքույր",
        imageSrc: require("../Assets/Images/Staff/Sofy_Hakobyan.jpeg"),
        description:
          <div></div>
    },
    {
        id: 7,
        firstName: "Քրիստինե",
        secondName: "Ղազարյան",
        position: "Բուժքույր",
        positionBackground: "Բուժքույր",
        imageSrc: require("../Assets/Images/Staff/Christine_Ghazaryan.jpeg"),
        description:
          <div></div>
    },
    {
        id: 8,
        firstName: "Էվելինա",
        secondName: "Բեգլարյան",
        position: "Բուժքույր",
        positionBackground: "Բուժքույր",
        imageSrc: require("../Assets/Images/Staff/Evelina_Beglaryan.jpeg"),
        description:
          <div></div>
    },
    {
        id: 9,
        firstName: "Կարինե",
        secondName: "Համբարձումյան",
        position: "Բուժքույր",
        positionBackground: "Բուժքույր",
        imageSrc: require("../Assets/Images/Staff/Karine_Hambardzumyan.jpeg"),
        description:
          <div></div>
    },
    {
        id: 10,
        firstName: "Ելենա",
        secondName: "Ալեքսանյան",
        position: "Բուժքույր",
        positionBackground: "Բուժքույր",
        imageSrc: require("../Assets/Images/Staff/Yelena_Alexanyan.jpeg"),
        description: <div></div>
    },
    {
        id: 11,
        firstName: "Մարիամ",
        secondName: "Ֆահրադյան",
        position: "Բուժքույր",
        positionBackground: "Բուժքույր",
        imageSrc: require("../Assets/Images/Staff/Mariam_Fahradyan.jpeg"),
        description:
          <div></div>
    },
    {
        id: 12,
        firstName: "Անուշ",
        secondName: "Կարապետյան",
        position: "Cosmetologist",
        positionBackground: "Cosmetologist",
        imageSrc: require("../Assets/Images/Staff/Anush.jpeg"),
        description:
          <div></div>
    },
    {
        id: 13,
        firstName: "Շուշան",
        secondName: "Աբչահամյան",
        position: "Administrator",
        positionBackground: "Administrator",
        imageSrc: require("../Assets/Images/Staff/Shushan_Abrahamyan.jpeg"),
        description:
          <div></div>
    }
];

export function getDentistsInfo() {
    return dentistsInfo;
}

export function getDentistsInfoArmenian() {
    return dentistsInfoArmenian;
}
