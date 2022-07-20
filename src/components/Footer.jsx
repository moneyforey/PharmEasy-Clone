import { Box , Flex, Heading,Image, Spacer} from "@chakra-ui/react"

const Footer =()=> {
    return(
        <Box  bg="#f4f7fb " pt="8" pb="8">
            <Flex color="#6d7479"  justifyContent="space-between" align="left">
              <Box>
                <Box>
                    <Heading as="h3" size="md">Company</Heading>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Partner with PharmEasy</p>
                    <p>Sell at PharmEasy</p>
                </Box>
                <Box> 
                    <Heading as="h3" size="md">Our Services</Heading>
                    <p>Order Medicine</p>
                    <p>Healthcare Products</p>
                    <p>Lab Tests</p>
                    <p>Find Nearest Collecton Center</p>
                    
                </Box>
              </Box>
              <Box>
              <Heading as="h3" size="md">Featured Categories</Heading>
               <p>Covid Essentials</p>
               <p>Personal care</p>
               <p>Health Food and Drinks</p>
               <p>Beauty</p>
               <p>Skin Care</p>
               <p>Home Care</p>
               <p>Ayurvedic Care</p>
               <p>Sexual Wellness</p>
               <p>Fitness & Suppliments</p>
               <p>Mother and Baby Care</p>
               <p>Healthcare Devices</p>
               <p>Health Conditions</p>
               <p> Diabetic Care</p>
               <p>Elderly Care</p>
               <p>Accessories And Wearables</p>
               <p>Value Store</p>
              </Box>
              <Box>
                <Box>
                <Heading as="h3" size="md">Need Help</Heading>
                <p>Browse All Medicines</p>
                <p>Browse All Molecules</p>
                <p>Browse All Cities & Areas</p>
                <p>Browse All Stores</p>
                <p>FAQs</p>
                </Box>
                <Box>
                <Heading as="h3" size="md">Policy Info</Heading>  
                <p>Editoral Policy</p>
                <p>Privacy Policy</p>
                <p>Vulnerability Disclosure Policy</p>
                <p>Terms and Conditions</p>
                <p>Customers Support Policy</p>
                <p>Return Policy</p>
                </Box>
              </Box>
              <Box>
              <Heading as="h2" size="md">FOLLOW US</Heading> 
              <Flex>

              </Flex>
              </Box>
            </Flex>



            <Box mt="3rem">
                <Heading  as='h4' size='md'>Our Payment Partners</Heading>
                
                <Flex gap="2" p="2">
                    <Image height="30px" src='https://assets.pharmeasy.in/web-assets/dist/af0c6812.svg'/>
                    <Image height="30px" src="https://assets.pharmeasy.in/web-assets/dist/0e010044.svg"/>
                    <Image height="30px" src="https://assets.pharmeasy.in/web-assets/dist/1066bb1f.svg"/>
                    <Image height="30px" src="https://assets.pharmeasy.in/web-assets/dist/3a1a533d.svg"/>
                    <Image height="30px" src="https://assets.pharmeasy.in/web-assets/dist/fbea1701.svg"/>
                    <Image height="30px" src="https://assets.pharmeasy.in/web-assets/dist/4733a49d.svg"/>
                    <Image height="30px" src="https://assets.pharmeasy.in/web-assets/dist/b278e536.svg"/>
                    <Image height="30px" src="https://assets.pharmeasy.in/web-assets/dist/0aca2077.svg"/>
                    <Image height="30px" src="https://assets.pharmeasy.in/web-assets/dist/44a51ca5.svg"/>
                    <Image height="30px" src="https://assets.pharmeasy.in/web-assets/dist/d058b00d.svg"/>
                    <Image height="30px" src="https://assets.pharmeasy.in/web-assets/dist/e9445364.svg"/>
                    <Image height="30px" src="https://assets.pharmeasy.in/web-assets/dist/6e09c713.svg"/>
                    <Spacer/>
                    <p>© 2022 PharmEasy. All Rights Reserved</p>
                </Flex>
            </Box>
        </Box>
    )
}

export default Footer;