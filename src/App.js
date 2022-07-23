import logo from './logo.svg';
import './App.css';
import Allroutes from './routes/Allroutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/TopBannerL';
import AppStoreBox from './components/appStoreBoxL';
import WrittenL from './components/writtenOverFooterL';
import BelowBannerL from './components/belowbannerL';
import FeturedBrandSection from './components/FeaturedBrandSection';
import WhatCustomerSay from './components/whatCustomerSay';
import NavbarB from './components/Navbar2';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <NavbarB/>
     {/* <Banner/>
     <BelowBannerL/> */}
    <Allroutes/>
    {/* <FeturedBrandSection/>
    <WhatCustomerSay/>
    <AppStoreBox/> 
    <WrittenL/> */}
    <Footer/>
    </div>
  );
}

export default App;
