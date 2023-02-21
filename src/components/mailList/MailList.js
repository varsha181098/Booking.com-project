import React from 'react'
import './mailList.css';
import { useState } from 'react';



export default function MailList() {

  const [inpVal, setInpVal] = useState(
    {
      email: "",
    }
  );

  const handelSubscribe = () => {


    const { email } = inpVal;
    if (email === "") {
      alert("field can't be empty");
    }
    else if (!email.includes("@")) {
      alert("pls Enter Valid details");
    }
    else {
      alert("Subscribe successfully");
    }

  }


  const handelChange = (e) => {

    e.target.value;

    const { value, name } = e.target;

    setInpVal(() => {

      return {
        inpVal,
        [name]: value
      }
    })
  }

  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" onChange={handelChange} name='email' />
        <button onClick={handelSubscribe}>Subscribe</button>
      </div>
    </div>
  )
}
