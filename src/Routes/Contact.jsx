import React from 'react'
import Form from '../Components/Form'
import logo from '../Styles/images/logo (2).png';

const Contact = () => {
  return (
    <div className='contactBg'>
      <div className="container">
        <div className='textContact'>
          <img src={logo} alt="" className='logo2'/>
          <h2>Want to know more?</h2>
          <p>Send us your questions and we will contact you</p>
        </div>
        <Form/>
      </div>
    </div>
  )
}

export default Contact