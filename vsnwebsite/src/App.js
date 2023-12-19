import LandingPage from './Components/LandingPage/LandingPage';

import './App.scss';
import { BrowserRouter as Router, Routes, Route, BrowserRouter , Switch} from "react-router-dom";
import OurClient from './Components/OurClient/OurClient';
import OurPartners from './Components/OurPartners/OurPartners';
import OurServices from './Components/OurServices/OurService'
import Careers from './Components/Careers/Careers';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
      
      <Routes>
      
      <Route exact path="/" element={<LandingPage />}/>
      <Route exact path="/OurClient" element={<OurClient />} />
      <Route exact path="/OurPartners" element={<OurPartners /> } />
      <Route exact path="/OurServices" element={<OurServices /> } />
      <Route exact path="/Careers" element={<Careers /> } />
      <Route exact path="/Contact" element={<Contact /> } />
      

      </Routes>
      
    
  </BrowserRouter>
    
      

    </>
  );
}

export default App;
