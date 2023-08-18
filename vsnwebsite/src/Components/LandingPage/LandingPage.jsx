import React from 'react'
import "./landingPage.scss"
import Container from 'react-bootstrap/Container';
import NavComponent from './NavComponent';
import homepage from '../../Assets/homepage.svg';


export default function LandingPage() {
  return (
    <>
     <div className="container-main bg-main ">
     <div className='up'></div>
        <div className='down'></div>
        <div className='left'></div>
        <div className='right'></div>

        <NavComponent />

        <div className='row'>
          <div className='col-md-6'>
            <img src={homepage} alt='illustration' />
          </div>
          <div className='col-md-6'>
            <h1>UNLICKING POSSIBLITY </h1>
            <p>CUTTING EDGE DEVOPS SERVICES THAT EMPOWER YOUR BUSINESS</p>
            <button> ABOUT US</button>
          </div>
        </div>

        

        
     </div> 
    </>
  )
}
