import React, {useEffect, useState} from "react";

const BackgroundTitle = ({backgroundTitle, direction, fontSize, position = "absolute"}) => {

    const [side, setSide] = useState({});

    useEffect(() => {
        switch (direction) {
            case "center":
                setSide({
                    "text-align": "center",
                    "font-size": fontSize,
                    position: position

                });
                break;
            case "end":
                setSide({
                    "text-align": "end",
                    "font-size": fontSize,
                    position: position
                });
                break;
            default:
                setSide({
                    "text-align": "start",
                    "font-size": fontSize,
                    position: position
                })
                break;
        }

    }, [direction]);

    return (
        <div className="backgroundTitleContainer" style={{...side}}>
            <div>
                <p>{backgroundTitle}</p>
            </div>
        </div>
    );
}

export default BackgroundTitle;