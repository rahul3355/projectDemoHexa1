import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import leave1 from './../images/leave1.png';
import leave2 from './../images/leave2.png';
import leave3 from './../images/leave3.png';
import leave4 from './../images/leave4.png';
import leave5 from './../images/leave5.png';
import leave6 from './../images/leave6.png';
import leave7 from './../images/leave7.png';
import leave8 from './../images/leave8.png';
import leave9 from './../images/leave9.png';
import './Contact.css';



const Contact = () => {

    
    return (
    <div>
        <br />
            
            <div class="container contact-form">
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form>
                <h3>Contact us</h3>
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="Your Message *"></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
           
    </div>
    );
};

export default Contact;