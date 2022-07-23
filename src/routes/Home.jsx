import Banner from "../components/TopBannerL"
import BelowBannerL from "../components/belowbannerL"
import FeturedBrandSection from "../components/FeaturedBrandSection"
import WhatCustomerSay from "../components/whatCustomerSay"
import AppStoreBox from "../components/appStoreBoxL"
import WrittenL from "../components/writtenOverFooterL"

function Home(){
 return(
    <>
    <Banner/>
    <BelowBannerL/>
    <FeturedBrandSection/>
    <WhatCustomerSay/>
    <AppStoreBox/>
    <WrittenL/>
    </>
 )
}

export default Home;