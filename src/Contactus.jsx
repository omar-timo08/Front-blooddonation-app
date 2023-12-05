import React, { useState } from "react";

export const Contactus = (props) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="contactus">
           <div className="Contact-form-container">
            <h2>Contact Us</h2>
            <form className="Contactus-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="subject">Message</label>
                <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
                <button type="submit">Send Message</button>
            </form>
           </div>
        </div>
    )
}