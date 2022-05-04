import React from 'react';
import { NavLink } from 'react-router-dom';
import "./About.css";

export default function About() {
    return (
        <div><section id='about'>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src='/assets/about1.jpg' alt='About' className='w-75 mt-5' />
                    </div>
                    <div className='col-md-6'>
                        <h3 className='fs-5 mb-0'>About Us</h3>
                        <h1 className='display-6 mb-2'> Who <b>We</b> Are</h1>
                        <hr className='w-50' />
                        <p className=' text lead mb-4'><strong>Established in the year 1994, Vishwakarma Foundry Works is engaged in designing and developing fully automatic machinery for the food & beverage industry. By using our automatic machinery like Balwan Automatic Rice Cleaner, Cyclone Automatic Rice Cleaner, Half Dala Automatic Rice Cleaner. One can save labour resources and shrinks the labour intensity of this specific field. Our hard work, outstanding service, quality products and professional approaches empower us to become a front-runner in the industry. Operating from Ambedkar Nagar Uttar Pradesh working under the supreme guidance of our founder Mr Harshit we have created a stronghold in this business domain. Our specialty We make sure that our Food Processing Machines meet the challenge</strong></p>
                        <NavLink className='btn btn-primary rounded-pill px-4 py-2' to='/service'>Shop Now</NavLink>
                        <NavLink className='btn btn-outline-primary rounded-pill px-4 py-2 ms-2' to="/contact">Contact Us</NavLink>

                    </div>
                </div>
                <div className=' mapping mapcls text-center mt-5 rounded-pill'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14276.89005062661!2d82.6464717!3d26.5451187!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd43b608f5b153ad!2sVishwakarma%20Foundry%20Works!5e0!3m2!1sen!2sin!4v1649785334505!5m2!1sen!2sin" width="450px" height="400px"  style={{ border: "0",borderRadius:"10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </section></div>
    )
}
