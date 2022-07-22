import { Box , Flex, Heading,Image, Spacer} from "@chakra-ui/react"
const hdStl={
    textAlign:"left",
    fontSize:"16px",
    lineHeight:"20px",
    fontWeight:"700",
    fontFamily:"Open Sans, sans-serif",
    color:"#4f585e",
    marginTop:"1rem"
}

const txtStl={
    textAlign:"left",
    fontSize:"16px",
    lineHeight:"24px",
    fontWeight:"400",
    fontFamily:"Open Sans, sans-serif",
    color:"#4f585e",
    marginTop:"1rem"
}

const Footer =()=> {
    return(
        <Box   bg="#f4f7fb " pt="8" pb="8">
            <Flex   justifyContent="space-between">
              <Box ml="1rem">
                <Box>
                    <Heading style={hdStl} as="h3" size="md">Company</Heading>
                    <p style={txtStl}>About Us</p>
                    <p style={txtStl}>Careers</p>
                    <p style={txtStl}>Blog</p>
                    <p style={txtStl}>Partner with PharmEasy</p>
                    <p style={txtStl}>Sell at PharmEasy</p>
                </Box>
                <Box> 
                    <Heading style={hdStl} as="h3" size="md">Our Services</Heading>
                    <p style={txtStl}>Order Medicine</p>
                    <p style={txtStl}>Healthcare Products</p>
                    <p style={txtStl}>Lab Tests</p>
                    <p style={txtStl}>Find Nearest Collecton Center</p>
                    
                </Box>
              </Box>
              <Box>
              <Heading style={hdStl} as="h3" size="md">Featured Categories</Heading>
               <p style={txtStl}>Covid Essentials</p>
               <p style={txtStl}>Personal care</p>
               <p style={txtStl}>Health Food and Drinks</p>
               <p style={txtStl}>Beauty</p>
               <p style={txtStl}>Skin Care</p>
               <p style={txtStl}>Home Care</p>
               <p style={txtStl}>Ayurvedic Care</p>
               <p style={txtStl}>Sexual Wellness</p>
               <p style={txtStl}>Fitness & Suppliments</p>
               <p style={txtStl}>Mother and Baby Care</p>
               <p style={txtStl}>Healthcare Devices</p>
               <p style={txtStl}>Health Conditions</p>
               <p style={txtStl}> Diabetic Care</p>
               <p style={txtStl}>Elderly Care</p>
               <p style={txtStl}>Accessories And Wearables</p>
               <p style={txtStl}>Value Store</p>
              </Box>
              <Box>
                <Box>
                <Heading style={hdStl} as="h3" size="md">Need Help</Heading>
                <p style={txtStl}>Browse All Medicines</p>
                <p style={txtStl}>Browse All Molecules</p>
                <p style={txtStl}>Browse All Cities & Areas</p>
                <p style={txtStl}>Browse All Stores</p>
                <p style={txtStl}>FAQs</p>
                </Box>
                <Box>
                <Heading  style={hdStl} as="h3" size="md">Policy Info</Heading>  
                <p style={txtStl}>Editoral Policy</p>
                <p style={txtStl}>Privacy Policy</p>
                <p style={txtStl}>Vulnerability Disclosure Policy</p>
                <p style={txtStl}>Terms and Conditions</p>
                <p style={txtStl}>Customers Support Policy</p>
                <p style={txtStl}>Return Policy</p>
                </Box>
              </Box>
              <Box pr="2rem">
              <Heading style={hdStl} as="h2" size="md">FOLLOW US</Heading> 
              <Flex>

              </Flex>
              </Box>
            </Flex>



            <Box mx="1rem" mt="3rem">
                <Heading style={hdStl}  as='h4' size='md'>Our Payment Partners</Heading>
                
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