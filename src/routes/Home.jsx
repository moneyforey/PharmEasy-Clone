import Banner from "../components/TopBannerL"
import BelowBannerL from "../components/belowbannerL"
import FeturedBrandSection from "../components/FeaturedBrandSection"
import WhatCustomerSay from "../components/whatCustomerSay"
import AppStoreBox from "../components/appStoreBoxL"
import WrittenL from "../components/writtenOverFooterL";
import WhyChooseUs from "../components/WhyChooseUs"

function Home(){
 return(
    <>
    <Banner/>
    <BelowBannerL/>
    <FeturedBrandSection/>
    <WhyChooseUs/>
    <WhatCustomerSay/>
    <AppStoreBox/>
    <WrittenL/>
    </>
 )
}

export default Home;