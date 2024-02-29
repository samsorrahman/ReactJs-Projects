import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from  '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import locaion_icon from '../../assets/location-icon.png'
import React from 'react'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "fe1a4e25-c57c-43fc-a8b2-16aef37db3bf");
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          setResult(res.message);
          event.target.reset();
        } else {
          console.log("Error", res);
          setResult(res.message);
        }
      };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
            </p>
            <ul>
            <li> <img src={mail_icon} alt="" />saeldf@gmail.com</li>
                <li><img src={phone_icon} alt="" />0445434343</li>
            <li><img src={locaion_icon} alt="" />99 hada, avae, dldf <br/> MA 03334, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text"  name='name' required placeholder='Enter your name'/>
                <label>Phone Number</label>
                <input type="tel" name='phone' required placeholder='Enter your phone number'/>
               <label >Write your message here</label>
               <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Send Message <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact

