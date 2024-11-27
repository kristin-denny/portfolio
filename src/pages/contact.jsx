//should have form to contact, with name, email, and message
//if they click off without filling out a field then an error message pops up that they need to finish filling out form
import { useState } from 'react';
import "../pages.css";

function Contact() {



    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });



    const isEmailValid = (email) => {
        const validEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = validEmailPattern.test(email);
        return isValid;
    }

    const appendAlert = (message) => {
        const contactForm = document.getElementById('formHeader');
        const messageElement = document.createElement('p');
        messageElement.id = "messageElement";
        messageElement.textContent = message;
        contactForm.appendChild(messageElement);
    }


    const handleBlur = () => {
        appendAlert("Please fill out all boxes");
    }

    const handleFocus = () => {
        const contactForm = document.getElementById('formHeader');
        const messageElement = document.getElementById("messageElement");
        if (messageElement !== null) {
            contactForm.removeChild(messageElement);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const messageElement = document.getElementById("messageElement");
        if (isEmailValid(formData.email) && messageElement === null) {
            console.log(formData);
            alert("Thank you for your message!");
            document.getElementById("contactForm").reset();
        } else {
            alert("Please enter a valid email")
        }
        handleFocus();
    }


    return (
        <div className='contactForm'>
            <h1 id="formHeader">Please reach out!</h1>
            <form onBlur={handleBlur} onFocus={handleFocus} id="ContactForm">
                <label htmlFor='name'>name</label><br />
                <input type="text" id="name" name="name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} /><br />
                <label htmlFor='email'>email</label><br />
                <input type="email" id="email" name="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} /><br />
                <label htmlFor="message">message</label><br />
                <textarea type="text" id="message" name="message" rows="10" cols="30" onChange={(e) => setFormData({ ...formData, message: e.target.value })} /><br />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}
export default Contact;

