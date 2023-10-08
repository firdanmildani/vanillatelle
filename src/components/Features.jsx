import React from "react";

const Features = props => {
return (
    <>
    <div className="feature-item col-lg-3 col-sm-6 text-center">
        <div className="feature-icons">
            <img className="feature-icon" src={props.imagePath} alt={props.imageAlt} />
        </div>
        <h5>{props.featureTitle}</h5>
        <div className="feature-desc desc">
            <p>{props.featureCaption}</p>
        </div>
    </div>
    </>                   
);
}

export default Features;