import React from 'react'
import NavComponent from '../LandingPage/NavComponent'
import "./ourService.scss"
import seriviceillustration from "../../Assets/Serviceillustration.svg"

export default function OurService() {
  return (
    <div className="container-mainV2 ">
    <div className='up'></div>
       <div className='down'></div>
       <div className='left'></div>
       <div className='right'></div>

       <NavComponent />
      
       <div className='row'>

<div className='col-md-6'>
  <h1>UNLICKING POSSIBLITY </h1>
  <p>CUTTING EDGE DEVOPS SERVICES THAT EMPOWER YOUR BUSINESS</p>
  <button> ABOUT US</button>

</div>
<div className='col-md-6'>
  <img src={seriviceillustration} alt='illustration' />
</div>
</div>

       

       
    </div> 
  )
}
