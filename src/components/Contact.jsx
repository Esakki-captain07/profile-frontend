import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';


function Contact() {
  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [message,setMessage] = useState("")

  const handleSubmit = async(e)=>{
      e.preventDefault()
      const response = await axios.post('https://protfolifo-backend.onrender.com/user/sent', {
        name,
        email,
        message
      });
    console.log(response.data.message)
    alert(response.data.message)

  }



  return (
    <>
      <div id='contact' className="container contact-box">
        <div className="contact-left">
          <div style={{ padding: '20px' }}>
            <h3 className='contact-title'>Contact Me</h3>
            <div className="mt-10 ml-7 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-5">

              <div className="sm:col-span-4">
                <label htmlFor="username" className="color">Name</label>
                <div className="mt-4">
                  <input 
                    type="text" 
                    name="username" 
                    id="username"  
                    className="block w-[400px] rounded-md border-b border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                    placeholder="Enter Your Name"
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="color">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-[400px] rounded-md bg-white border-b border-gray-300 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Your Email"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="about" className="color">About</label>
                <div className="mt-2">
                  <textarea 
                    id="about" 
                    name="about" 
                    rows="3" 
                    className="block w-[400px] rounded-md border-b border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Tell me about yourself"
                    onChange={(e)=>setMessage(e.target.value)}
                  ></textarea>
                </div>
                <Button variant='primary' className='contact-btn' onClick={handleSubmit}>Send</Button>
              </div>

            </div>
          </div>
        </div>

        <div className="contact-right">
          <h3 className='contact-deatils'>Contact Information</h3>
          <div className="deatils">
            <h4 className='mt-10'><b>Location : </b>Sankaran Kovil</h4>
            <h4 className='mt-10'><b>Ph : </b>6383436841</h4>
            <h4 className='mt-10'><b>Email : </b>essaki078@gmail.com</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
