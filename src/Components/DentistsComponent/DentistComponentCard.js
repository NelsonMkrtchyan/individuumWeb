import React from "react";

const DentistComponentCard = ({ imageClass, name, role }) => {
    return (
        <div className="dentistComponentCardContainer">
            <div className={`dentistComponentCardImage ${imageClass}`} />
            <div className="dentistComponentCardTextContainer">
                <div className="dentistComponentCardName">
                    <p>{name}</p>
                </div>
                <div className="dentistComponentCardRole">
                    <p>{role}</p>
                </div>
            </div>
        </div>
    );
};

export default DentistComponentCard;