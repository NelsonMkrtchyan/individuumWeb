import React from "react";

const BackgroundTitleComponent = () => {
    return (
        <div className="backgroundTitleWrapper">
            <div className="backgroundTitleContainer">
                <div>
                    <p>ABOUT US</p>
                </div>
            </div>
            <div className="contentContainer">
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <div style={{width: "30%", alignContent: "center"}}>
                        <div><p>About Us</p></div>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></div>
                    </div>
                    <div><p>Nkar</p></div>
                </div>
            </div>
        </div>
    );
};

export default BackgroundTitleComponent;