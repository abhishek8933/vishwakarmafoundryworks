
import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import toast from 'react-hot-toast';

const Register = () => {

  const history = useHistory();

  const [user, setUser] = useState({
    username : "",
    email : "",
    quantity : "",
    phone:""
  });

  // Handle Inputs
  const handleInput = (event) =>{
    let name = event.target.name;
    let value = event.target.value;
    setUser({...user, [name]:value});
  }

  // Handle Submit
  const handleSubmit = async (event)=>{
    event.preventDefault();
    // Object DeStructuring
    // Store Object Data into Variables
    const {username, email, quantity,phone} = user;
    try {
      //It is Submitted on port 3000 by default
      // Which is Front End but we need to 
      // Submit it on Backend which is on 
      // Port 3001. So we need Proxy.
      const res = await fetch('/register', {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          username, email, quantity,phone
        })
      })
      console.log(res.status)
      if(res.status===400){
        toast.error("server side problem");
      }else{
        // You need to Restart the Server for Proxy Works
        // Now Try Again
        toast.success("Order Placed Successfully ");
        // history.push('/login')
      }
    } catch (error) {
      console.log(error);
    }
  }

    return (
        <div>
            <div className="container shadow my-5 py-2">
          <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
            <h1 className="display-4 fw-bolder">Welcome User</h1>
            <p className="lead text-center">Enter Your Credentials To Get The Best Price</p>
            <p className='lead text-center'>We Will Contact You Shortly</p>
          </div>
          <div className="col-md-6 p-5">
          <h1 className="display-6 fw-bolder mb-5">Place Your Order</h1>
            <form onSubmit={handleSubmit} method="POST">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Quantity
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="quantity"
                  value={user.quantity}
                  onChange={handleInput}
                />
                </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="phone"
                  value={user.phone}
                  onChange={handleInput}
                  placeholder="+91"
                  minLength="10"
                  maxLength="10"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I Agree Terms and Conditions
                </label>
              </div>
              <button type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-pill">
                Send Query
              </button>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Register;