import React from 'react'
import "./landingPage.scss"
// import Container from 'react-bootstrap/Container';
import NavComponent from './NavComponent';
import homepage from '../../Assets/homepage.svg';

export default function LandingPage() {
  return (
    <>
     <div className="container-main bg-main ">
     

        <NavComponent />
     

        <div class="Container">
        <div className='row'>
          <div className='col-md-6'>
            <img src={homepage} alt='illustration' />
          </div>
          <div className='col-md-6 main-section'>
            <h1 className="main-head">UNLOCKING POSSIBILITIES </h1>
            <p className='main-para'>CUTTING EDGE DEVOPS SERVICES THAT EMPOWER YOUR BUSINESS</p>
           <div> <table className='new-table'>
           <tr>
             <td className='main-head'>05</td>
             <td className='main-head'>25</td>
           </tr>
           <tr>
             <td className='table-cont'>Years of experience</td>
             <td className='table-cont'>Project Completed</td>
           </tr>
           
       </table></div><br/><br/><br/><br/><br/>
          
            <div><button className='btn-white'>
            ABOUT US</button></div>
          </div>
        </div>
        </div>
       

         

        
     </div> 
    </>
  )
}
