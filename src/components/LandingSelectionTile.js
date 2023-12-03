import React from "react";
import bookmark2strips from "../images/bookmark2strips.png";
import bookmark4strips from "../images/bookmark4strips.png";
import bookmark6strips from "../images/bookmark6strips.png";
import one4R from "../images/1x4R.png";
import two4R from "../images/2x4R.png";
import three4R from "../images/3x4R.png";
import {useHistory} from "react-router-dom";
import {IS_4R} from "../config/constants";

const LandingSelectionTile = ({headerText, description, amount, is4R, url}) => {
    const history = useHistory();
    let imageSrc;
    if (IS_4R) {
        if (amount === "$10") {
            imageSrc = one4R;
        } else if (amount === "$12") {
            imageSrc = two4R;
        } else if (amount === "$14") {
            imageSrc = three4R;
        }
    } else { //bookmark
        if (amount === "$10") {
            imageSrc = bookmark2strips;
        } else if (amount === "$12") {
            imageSrc = bookmark4strips;
        } else if (amount === "$14") {
            imageSrc = bookmark6strips;
        }
    }

    return (
        <div className="payToUseLandingSelectionTile_Div">
            {headerText && <h1>{headerText}</h1>}
            {description && <h2>{description}</h2>}
            <div className="payToUseLandingSelectionTile_DivRow">
                <img src={imageSrc} alt="" className="payToUseLandingSelectionTile_LandingImage"/>
                <div>
                    <h1 className="payToUseLandingSelectionTile_LandingPricing">{amount}</h1>
                    <button
                        className="payToUseLandingSelectionTile_LandingSelectButton"
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