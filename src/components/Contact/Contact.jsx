import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png' 
import mail_icon from '../../assets/mail-icon.png' 
import phone_icon from '../../assets/phone-icon.png' 
import location_icon from '../../assets/location-icon.png' 
import white_arrow from '../../assets/white-arrow.png' 

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "42766e5d-26b7-4a5e-9f35-5210049cb18a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>Send us a Messege <img src={msg_icon} alt="" /></h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
            <li> <img src={mail_icon} alt="" />rudradhara780@gmail.com</li>
            <li> <img src={phone_icon} alt="" />+91 9046752021</li>
            <li> <img src={location_icon} alt="" />77 Manchester City, Cambridge <br></br> MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required />
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required />
            <label>Write your messege here</label>
            <textarea name="messege" id="6" placeholder="Enter your messege" required>
            </textarea>
            <button type="subbmit" className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
        {/* Sending... */}
      </div>
    </div>
  );
};

export default Contact;
