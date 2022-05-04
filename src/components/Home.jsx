import React from 'react'
import About from '../components/About/About'
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <section id='home'>
                <div className='container '>
                    <div className='row justify-content-center setting'>
                        <div className='heading col-md-8 mt-5 '>
                            <h1 className='display-4 fw-bolder mb-4 text-center text-white'>
                                Feels the Fresh Bussiness Perspective
                            </h1>
                            <p className='lead text-deco text-center fs-4 mb-5 text-white'>Vishwakarma Foundry Works is engaged in designing and developing fully automatic machinery for the food & beverage industry. By using our automatic machinery like Balwan Automatic Rice Cleaner, Cyclone Automatic Rice Cleaner, Half Dala Automatic Rice Cleaner.</p>
                            <div className='Navlinks d-flex py-2 justify-content-center'>
                                <NavLink to='/contact' className='btn btn-light me-4 rounded-pill px-4 py-2'>Get Quote</NavLink>
                                <NavLink to='/service' className='btn btn-outline-light rounded-pill px-4 py-2'>Our Products</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About/>
        </div>
    )
}
