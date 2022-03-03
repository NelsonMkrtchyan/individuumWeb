import React, {useEffect, useState} from "react";

const PriceListComponentItem = ({tooth, onPress}) => {
    const [title, setTitle] = useState("");
    useEffect(() => {
        switch (tooth){
            case "tooth1":
                setTitle("For Children");
                break;
            case "tooth2":
                setTitle("Therapeutic");
                break;
            case "tooth3":
                setTitle("Orthopedic");
                break;
            default:
                setTitle("Dental");
        }
    }, [tooth])
    const handleClick = () => {
        switch (tooth){
            case "tooth1":
                onPress("For Children");
                break;
            case "tooth2":
                onPress("Therapeutic");
                break;
            case "tooth3":
                onPress("Orthopedic");
                break;
            default:
                onPress("Dental");
        }
    }
    return (
        <div className={`priceListComponentItemWrapper defaultPadding ${tooth}`} onClick={handleClick}>
            <div className="priceListComponentItemColorBoxContainer">
                <div className="priceListComponentItemColorBox">
                    <div className="priceListComponentItemImage" />
                </div>
            </div>
            <div className="priceListComponentItemTitle">
                <p>
                    {title}
                </p>
            </div>
            <div style={{ width: "75%" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingBottom: "1vw" }}>
                    <div><p>Lorem ipsum </p></div>
                    <div>Logo</div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingBottom: "1vw" }}>
                    <div><p>Lorem ipsum </p></div>
                    <div>Logo</div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingBottom: "1vw" }}>
                    <div><p>Lorem ipsum </p></div>
                    <div>Logo</div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingBottom: "1vw" }}>
                    <div><p>Lorem ipsum </p></div>
                    <div>Logo</div>
                </div>
            </div>
        </div>
    );
};

export default PriceListComponentItem;