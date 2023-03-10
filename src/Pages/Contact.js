import React from 'react'
import Input from '../Components/Input'
import './style/Contact.css'

function Contact() {

    function submitForm(e) {
        e.preventDefault();
        // const inputs = e.target;
    }

    return (
        <div className="Contact-page page">
            <img src='/Images/Illustrations/contact-us.png' alt="Contact" />
            <form action="#" onSubmit={submitForm}>
                <Input type="text"
                    title="Enter Your Name"
                    id="name"
                    placeholder=" "
                    icon="fi fi-rr-portrait"
                    autoComplete="off"
                    required={true} />
                <Input type="email"
                    title="Enter Your Emial"
                    placeholder=" "
                    id="email"
                    icon="fi fi-rr-at"
                    autoComplete="off"
                    required={true} />
                <div className="input-box">
                    <i className="fi fi-rr-comment-alt"></i>
                    <textarea id="messege" cols="30" rows="5" required></textarea>
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

export default Contact;
