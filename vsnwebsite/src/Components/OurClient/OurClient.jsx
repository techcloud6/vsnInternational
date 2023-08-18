import React from 'react'
import NavComponent from '../LandingPage/NavComponent'
import "./ourClient.scss"
import "../LandingPage/landingPage.scss"
import CLIENT from "../../Assets/CLIENTS.svg"


export default function OurClient() {
  return (
    <div>

      <div className="container-mainV2 "
      >

        <NavComponent />

        <div className='row'>

          <div className='col-md-6'>
            <h1>UNLICKING POSSIBLITY </h1>
            <p>CUTTING EDGE DEVOPS SERVICES THAT EMPOWER YOUR BUSINESS</p>
            <button> ABOUT US</button>

          </div>
          <div className='col-md-6'>
            <img src={CLIENT} alt='illustration' />
          </div>
        </div>







      </div>
    </div>
  )
}
