import React from "react";

const Footer = () => {
    return (
        <div className="footerComponentContainer">
            <div className="footerComponentUpperSection">
                <div className="footerComponentUpperSectionItem footerComponentFirst">
                    <div className="footerComponentLogo"/>
                </div>
                <div className="footerComponentUpperSectionItem footerComponentUpperSectionTextItem footerComponentSecond">
                    <div className="footerComponentTitle">
                        <p>Contacts</p>
                    </div>
                    <div className="footerComponentText">
                        <div className="footerComponentTextItem">
                            <p>Armenia, Yerevan, 0026
                                Garegin Njdeh 44</p>
                        </div>
                        <div className="footerComponentTextItem">
                            <p>+374 10 44 84 21</p>
                        </div>
                        <div className="footerComponentTextItem">
                            <p>+374 96 44 84 21</p>
                        </div>
                        <div className="footerComponentTextItem">
                            <p>individuumclinic@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="footerComponentUpperSectionItem footerComponentUpperSectionTextItem footerComponentThird">
                    <div className="footerComponentTitle">
                        <p>Navigation</p>
                    </div>
                    <div className="footerComponentText">
                        <div className="footerComponentTextItem">
                            <p>About Us</p>
                        </div>
                        <div className="footerComponentTextItem">
                            <p>Dentists</p>
                        </div>
                        <div className="footerComponentTextItem">
                            <p>Price List</p>
                        </div>
                        <div className="footerComponentTextItem">
                            <p>Gallery</p>
                        </div>
                        <div className="footerComponentTextItem">
                            <p>Contacts</p>
                        </div>
                    </div>
                </div>
                <div className="footerComponentUpperSectionItem footerComponentUpperSectionTextItem footerComponentFourth">
                    <div className="footerComponentTitle">
                        <p>Find Us</p>
                    </div>
                    <div className="footerComponentText">
                        <div className="footerComponentTextItem">
                            <p>Facebook</p>
                        </div>
                        <div className="footerComponentTextItem">
                            <p>Instagram</p>
                        </div>
                        <div className="footerComponentTextItem">
                            <p>Youtube</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerComponentLowerSection">
                <div className="footerComponentCopyright">
                    <p>
                        Copyright
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;