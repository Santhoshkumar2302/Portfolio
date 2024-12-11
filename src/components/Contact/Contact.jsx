import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4e1f9125-6520-4de9-b7a2-52125a2a513c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p></p>
                <div className="contact-details">
                    <div className='contact-detail'>
                        <img src={mail_icon} alt="" /><p>sandysanthoshg2000@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={call_icon} alt="" /><p>+91 7305228513</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon} alt="" /><p>Tindivanam, Villupuram District.</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name'/>
                <label htmlFor="">Your E-Mail</label>
                <input type="text" placeholder='Enter Your E-Mail' name='E-mail'/>
                <label htmlFor="">Write Your Message</label>
                <textarea name="Message" rows="8" placeholder='Enter Your Message'></textarea>
                <button type="submit" className='contact-submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact