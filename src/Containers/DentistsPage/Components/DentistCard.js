import React from "react";
import { Link } from "react-router-dom";

const DentistCard = ({ id, name, position, positionBackground, imageSrc, whereIs }) => {
    return (
      <div className={`dentistsCardWrapper ${whereIs}`}>
          <Link to={`/dentists/${id}`}>
              <div className="dentistsCardContainer">
                  <div
                    className="dentistsCardImage"
                    style={{ backgroundImage: `url("${imageSrc}")` }}
                  />
                  <div className="dentistsCardContent">
                      <div className="dentistCardName">
                          <p> {name} </p>
                      </div>
                      <div className="dentistCardRole">
                          <p> {position} </p>
                      </div>
                  </div>
              </div>
          </Link>
          <div className="dentistsCardColorBox" />
      </div>
    );
};

export default DentistCard;
