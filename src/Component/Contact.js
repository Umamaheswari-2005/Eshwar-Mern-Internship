import React, { useState } from "react";
import '../CSS/Contact.css' ;
import ContactBG1 from '../Assets/ContactBG1.gif';
import '../CSS/App.css';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(message);
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=umamaheswari02062005@gmail.com&su=${subject}&body=${body}`;
    window.open(mailtoLink, "_blank"); 
  };

  return (
    <div className="contact">
      <img className="react-gif" src={ContactBG1} alt="Background GIF" />
      <h1>Contact Me</h1>
      <p>Email : ✉️ umamaheswari02062005@gmail.com </p> 
      <p>Phone : 📞 +91-8124013128</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/umamaheswari-g-603711291" target="_blank" rel="noopener noreferrer" className="link-color">Umamaheswari G</a></p>
      <p>GitHub: <a href="https://github.com/Umamaheswari-2005" target="_blank" rel="noopener noreferrer" className="link-color">Umamaheswari-2005</a></p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
}

export default Contact;
