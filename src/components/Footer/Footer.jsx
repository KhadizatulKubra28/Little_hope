import React from 'react'
import CharitioLogoFooter from '../Images/charitio-logo-footer.png'
import '../Footer/Footer.css'
import { FiMail, FiPhoneCall } from 'react-icons/fi'
import { TiLocation } from 'react-icons/ti'
function Footer() {
    return (
        <footer>
            <div className='upper-container'>
                <div className='logo-container'>
                    <img src={CharitioLogoFooter} alt="" className='logo-footer' />
                </div>
                <div className='services-container'>
                    <h2>Services</h2>
                    <ul>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Latest News</a></li>
                        <li><a href='/volunteer'>Volunteer</a></li>
                        <li><a href='/donation'>Donation</a></li>
                    </ul>
                </div>
                <div className='contact-container'>
                    <h2>Contact</h2>
                    <p>Would you have any enquiries. Please feel free to contuct us</p>
                    <p><FiMail /> &nbsp;daffodil.gmail.com</p>
                    <p> <FiPhoneCall /> &nbsp;+880 16 1533 5548</p>
                    <p> <TiLocation /> &nbsp;Daffodil International Univercity,Ashulia,Dhaka</p>
                </div>
                <div className='projects-container'>
                    <h2>Projects</h2>
                    
                </div>
            </div>
            <div className='lower-container'>
                <p>© 2025 Little Hope Foundation. Design By Us. All Rights Reserved</p>
            </div>
        </footer>
    )
}
export default Footer