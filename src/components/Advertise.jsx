import React from 'react'

export default function Advertise() {
  return (
    <div>
        {/* <section id='home'> */}
                <div className='container my-7'>
                    <div className='row justify-content-center'>
                        <div className='col-md-8 mt-5'>
                            <h1 className='display-4 fw-bolder mb-4 text-center '>
                                Hello This Is Harshit Vishwakarma
                            </h1>
                            <hr/>
                            <p className='lead text-center fs-4 mb-5 '>We Are Manufacturing Any type of Agricultural Machines As per the need of the customer in an Affordable Prices And the best Market Price</p>
                            <p className='lead text-center fs-4 mb-5 '>DO COME AND VISIT OUR PLACE</p>
                            <p className='lead text-center fs-4 mb-5 '>We Are Available 24*7 For You</p>
                            <div className='Navlinks d-flex justify-content-center '>
                                {/* <NavLink to='tel:07860686213'  className='btn btn-light me-4 rounded-pill px-4 py-2'><button className='btn btn-primary'>Call Us</button></NavLink>
                                <NavLink to='/' className='btn btn-outline-light rounded-pill px-4 py-2'><button className='btn btn-danger'>GO TO HOME PAGE</button></NavLink> */}
                                <button className='btn btn-warning'><a href='tel:07860686213' style={{"text-decoration":"none",color:"white"}}>Call Us</a></button>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
            {/* </section> */}
     </div>
  )
}
