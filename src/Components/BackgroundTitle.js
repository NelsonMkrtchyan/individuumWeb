import React, { useEffect, useState } from "react";

const BackgroundTitle = ({
    backgroundTitle,
    direction,
    fontSize,
    position = "absolute"
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
    }, [direction]);

    return (
      <div className="backgroundTitleContainer" style={{ ...side }}>
          <div>
              <p>{backgroundTitle}</p>
          </div>
      </div>
    );
};

export default BackgroundTitle;
