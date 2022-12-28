import React from 'react';
import './Style/DetailsCard.css'

function DetailsCard(props) {
    const { title, department, college, dates, marks } = props;
    return (
        <div className='details-card'>
            <div className="heading">
                <h2 className="title">{title}</h2>
                <b className="dates">{dates}</b>
            </div>
            <p className="department">{department}</p>
            <p className="college">{college}</p>
            <b className="marks">{marks}</b>
        </div>
    );
}

export default DetailsCard;
