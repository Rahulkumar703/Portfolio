import React from 'react'
import Input from '../Components/Input'
import './style/Contact.css'
import contactImage from '../Assets/Contact-us.png'

function Contact() {

    function submitForm(e) {
        e.preventDefault();
        const inputs = e.target;
        for (let i = 0; i < 3; ++i) {
            if (inputs[i].value === '') {
                inputs[i].value = "Please Fill"

                return false;
            }
        }
    }

    return (
        <div className="Contact-page page">
            <img src={contactImage} alt="Contact" />
            <form action="#" onSubmit={submitForm}>
                <Input type="text" title="Enter Your Name" id="name" icon="fi fi-rr-portrait" autoComplete="off" />
                <Input type="text" title="Enter Your Emial" id="email" icon="fi fi-rr-at" autoComplete="off" />
                <div className="input-box">
                    <i className="fi fi-rr-comment-alt"></i>
                    <textarea id="messege" cols="30" rows="5" ></textarea>
                    <label htmlFor="message">Message</label>
                </div>
                <div className="send">
                    <button type="submit" id="send">
                        <i className="fi fi-rr-paper-plane"></i>
                        <label htmlFor="send">Submit</label>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact
