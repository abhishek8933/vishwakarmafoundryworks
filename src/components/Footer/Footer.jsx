import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer class="footer-distributed">

        <div class="footer-left">
            <h3>Ram Pyare<span>Vishwkarma</span></h3>

            <p class="footer-links">
                <a href='/'>Home</a>
                |
                <a href='/about'>About</a>
                |
                <a href="/contact">Contact</a>
                |
                <a href="/advertise">About Me</a>
            </p>

            <p class="footer-company-name">Copyright © 2022 <strong>Vishwkarma Foundary Works</strong> All rights reserved</p>
        </div>

        <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <p><span>Ambedkar Nagar</span>
                    Uttar Pradesh</p>
            </div>

            <div>
                <i class="fa fa-phone"></i>
                <a href='tel:7860686213'>+91 7860686213</a>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><a to="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a></p>
            </div>
            <div>
            <div>
                <i class="fa fa-money"></i>
                <p>09AAUPV3193R1Z9</p>
            </div>
        </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About the company</span>
                <strong>VishwKarma Foundary Works</strong> is a agricultural machines manufacturing company. We can manufacture any type of agricultural machinery as per the demands of the customer
            </p>
            <div class="footer-icons">
                <a href="https://www.facebook.com/vishwakarmafoundaryworks/"><i class="fa fa-facebook"></i></a>
                <a href="https://www.instagram.com/vishwakarmafoundryworks/"><i class="fa fa-instagram"></i></a>
                <a to=""><i class="fa fa-linkedin"></i></a>
                <a to=""><i class="fa fa-twitter"></i></a>
                <a href="https://www.youtube.com/channel/UCPEBAQYVORYI5yiQtghXLgA"><i class="fa fa-youtube"></i></a>
            </div>
        </div>
    </footer>
    )
}

export default Footer