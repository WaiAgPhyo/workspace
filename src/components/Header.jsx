import React from 'react'
import './header.css'
import logo from '../img/logo.png'

function header() {
  return (
    <div>   
          <div className='header'>
              <div className='logo-div'><img src={logo} alt="logo" className='logo'/><p>Zolly</p></div>
              
              <div>
                <nav>
                  <ul className='navbar'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Dog & Puppies</a></li>
                    <li><a href="">Cat & Kittens</a></li>
                    <li><a href="">Other Type Of Pet</a></li>
                    <li><a href="">How To Adopte</a></li>
                    <li><a href="">Donate</a></li>
                  </ul>
                </nav>
              </div>
              <div>
                <div className='login'><a href="">Login/Register</a></div>
              </div>
          </div>
    </div>
  )
}

export default header