import React from 'react';
import './Style/InfoBar.css'
function InfoBar(prop) {
    return (
        <div className={`info-bar ${prop.visibile ? "" : "hidden"}`}>
            <p className="info-text">
                {prop.text}
            </p>
        </div>
    );
}

export default InfoBar;
