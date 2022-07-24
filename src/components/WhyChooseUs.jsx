import {Box,Flex,Heading,Image,Text} from "@chakra-ui/react";

const hdstl ={
    textAlign: "left",
    fontSize:"20px",
    lineHeight:"30px",
    color:"#4f585e",
    fontWeight:"700",
    fontFamily:"Open Sans, sans-serif"
}


const txstl ={
    textAlign: "left",
    fontSize:"18px",
    lineHeight:"23px",
    color:"#4f585e",
    fontWeight:"600",
    fontFamily:"Open Sans, sans-serif"
}
function WhyChooseUs(){
  return(
       <Box>
        <Heading style={hdstl}>Why Choose Us?</Heading>
        <Flex gap="2rem">
            <Box>
             <Image src="https://assets.pharmeasy.in/web-assets/dist/4d2f7c48.svg"/>

             <Heading style={hdstl}>32 Million+</Heading>

             <Text style={txstl}>Registered Users as of Mar 31, 2022</Text>

            </Box>



            <Box>
             <Image src="https://assets.pharmeasy.in/web-assets/dist/92c372bb.svg"/>

             <Heading style={hdstl}>36 Million+</Heading>

             <Text style={txstl}>Orders on PharmEasy till date</Text>

            </Box>
           


            <Box>
             <Image src="https://assets.pharmeasy.in/web-assets/dist/773ae9c5.svg"/>

             <Heading style={hdstl}>99000+</Heading>

             <Text style={txstl}>Unique items sold last 3 months</Text>

            </Box>



            <Box>
             <Image src="https://assets.pharmeasy.in/web-assets/dist/f2d557d3.svg"/>

             <Heading style={hdstl}>19500+</Heading>

             <Text style={txstl}>Pin Code Serviced last 3 months</Text>

            </Box>



            
        </Flex>
       </Box>
  )
}


export default WhyChooseUs;