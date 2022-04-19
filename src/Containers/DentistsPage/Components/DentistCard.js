import React from "react";

const DentistCard = ({ name, position, imageSrc, whereIs }) => {
    return (
        <div className={`dentistsCardWrapper ${whereIs}`}>
            <div className="dentistsCardContainer">
                <div className="dentistsCardImage" style={{ backgroundImage: `url("${imageSrc}")`}}/>
                <div className="dentistsCardContent">
                    <div className="dentistCardName">
                        <p> {name} </p>
                    </div>
                    <div className="dentistCardRole">
                        <p> {position} </p>
                    </div>
                </div>
            </div>
            <div className="dentistsCardColorBox"/>

        </div>
    );
};

export default DentistCard;