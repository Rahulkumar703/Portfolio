import React, { useState } from 'react'

function Input(props) {
    const { type, title, id, icon, autoComplete } = props;
    const [inputValue, setInputValue] = useState({
        value: ''
    });
    function changeValue(e) {
        setInputValue({
            value: e.target.value
        })
    }
    return (
        <div className="input-box">
            {icon !== "" ? <i className={icon}></i> : ""}
            <input type={type}
                title={title}
                id={id}
                value={inputValue.value}
                onChange={changeValue}
                autoComplete={autoComplete === "off" ? "disable" : "enable"} />

            <i className="fi fi-rr-comment-alt"></i>

            <label htmlFor={id}>{id}</label>
        </div>
    )
}

export default Input
