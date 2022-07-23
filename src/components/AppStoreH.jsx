import {Flex, Image,Box,Heading,Button} from "@chakra-ui/react"

import GooglePlayIcon from "../icons/GooglePlayIcon"
import AppleStoreIcon from "../icons/AppleStoreIcon"
const AppStoreH =()=>{
    return(
        <Flex gap="5rem" p="5rem">
         <Image pl="5rem" height="400px" src="https://assets.pharmeasy.in/web-assets/_next/icons/footerMobile.jpg"/>
         <Box >
           <Heading style={{
            lineHeight:"24px",
            fontSize:"19px",
            fontWeight:"400",
            color:"#4f585e",
            textAlign:"left"
           }}>Download the App for Free</Heading>
           <Flex gap="2rem" pt="2rem">
            <Button size="lg" color="white" bg="#586166 " leftIcon={<GooglePlayIcon />} variant='solid'>Google Play</Button>
            <Button size="lg" color="white" bg="#586166 " leftIcon={<AppleStoreIcon  />} variant='solid'>App Store</Button>
           </Flex>
         </Box>
        </Flex>
    )
}

export default AppStoreH;