import React, { useEffect, useState } from "react";

const BackgroundTitle = ({
    backgroundTitle,
    direction,
    fontSize,
    position = "absolute",
    style = {}
}) => {
    const [side, setSide] = useState({});

    useEffect(() => {
        switch (direction) {
        case "center":
            setSide({
                textAlign: "center",
                fontSize: fontSize,
                position: position
            });
            break;
        case "end":
            setSide({
                textAlign: "end",
                fontSize: fontSize,
                position: position
            });
            break;
        default:
            setSide({
                textAlign: "flex-start",
                fontSize: fontSize,
                position: position
            });
            break;
        }
    }, [direction, fontSize, position]);

    return (
      <div className="backgroundTitleContainer" style={{ ...side, ...style }}>
          <p>{backgroundTitle}</p>
      </div>
    );
};

export default BackgroundTitle;
