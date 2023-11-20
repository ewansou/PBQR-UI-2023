import React from "react";
import landing2strips from "../images/landing-2strips.png";
import {useHistory} from "react-router-dom";

const LandingSelectionTile = ({headerText, description, amount, url}) => {
    const history = useHistory();

    return (
        <div className="landingSelectionTileDiv">
            {headerText && <h1>{headerText}</h1>}
            {description && <h2>{description}</h2>}
            <div className="landingSelectionTileDivRow">
                <img src={landing2strips} alt="pay 8" className="landingImage"/>
                <div>
                    <h1 className="landingPricing">{amount}</h1>
                    <button
                        className="landingSelectButton"
                        onClick={() => history.push(url)}
                    >
                        SELECT
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LandingSelectionTile;