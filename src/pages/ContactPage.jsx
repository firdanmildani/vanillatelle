import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const ContactPage = () => {
  return (
    <div className="section" id='contact-page'>
      <div className="container">
        <div className="section-title text-center mb-5">
          <h1>GET IN TOUCH</h1>
        </div>
        <div className="row contact-us-container">
          <div className="col">
          <form>
            <div className="row g-3">
              <div className="col-md-12">
                <label for="your-name" className="form-label">NAME</label>
                <input type="text" className="form-control" id="" name="" required/>
              </div>
              <div className="col-md-12">
                <label for="your-surname" className="form-label">CITY / COUNTRY</label>
                <input type="text" className="form-control" id="" name="" required/>
              </div>
              <div className="col-md-12">
                <label for="your-email" className="form-label">EMAIL</label>
                <input type="email" className="form-control" id="your-email" name="your-email" required/>
              </div>
              <div className="col-12">
                <label for="your-message" className="form-label">MESSAGE</label>
                <textarea className="form-control" id="your-message" name="your-message" rows="5" required></textarea>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-md-12">
                    <button data-res="<?php echo $sum; ?>" type="submit" className="btn w-100 btn-send fw-bold" >SUBMIT</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          </div>
          <div className="col py-4">
            <b>Contact Us</b>
            <div className="address-contact">
              <a href="https://maps.app.goo.gl/o9CbDQPQKhg23dvR6" target='blank'>
                <span className="fa-layers fa-stack">
                  <FontAwesomeIcon icon={faCircle} style={{color: "#FFF",}} size="xl"/>
                  <FontAwesomeIcon icon={faLocationDot} style={{color: "#191A19",}} size="xs"/>
                </span>
                <div className="address-content">
                  <b>CV. Vanilla Gemstone Indonesia</b>
                  <br/>
                  <p>
                    Kampung Selatamiang No.1, Sukajaya, Kab. Sukabumi, Kabupaten Sukabumi, Jawa Barat 43151
                  </p>
                </div>
              </a>
            </div>
            <div className="address-contact">
              <a href="https://api.whatsapp.com/send?phone=1234567890" target='blank'>
                <span className="fa-layers fa-stack">
                  <FontAwesomeIcon icon={faCircle} style={{color: "#FFF",}} size="xl"/>
                  <FontAwesomeIcon icon={faPhone} style={{color: "#191A19",}} size="xs"/>
                </span>
                <div className="address-content">
                    123456789101
                </div>
              </a>
            </div>
            <div className="address-contact">
              <a href="mailto:support@vanillatelle.com">
                <span className="fa-layers fa-stack">
                  <FontAwesomeIcon icon={faCircle} style={{color: "#FFF",}} size="xl"/>
                  <FontAwesomeIcon icon={faEnvelope} style={{color: "#191A19",}} size="xs"/>
                </span>
                  <div className="address-content">
                    support@vanillatelle.com
                  </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage