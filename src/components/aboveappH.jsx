import {Flex,Box,Heading,Text,Spacer} from "@chakra-ui/react"
import AwardIcon from "../icons/AwardIcon"
import SecurityIcon from "../icons/SecurityIcon";
import CalenderIcon from "../icons/CalenderIcon";


const hdstl ={
    fontSize: "16px",
    lineHeight : "24px",
    fontWeight: "700",
    textAlign : "left",
    fontFamily: "Open Sans, sans-serif",
    color: "#4f585e",
    padding:".5rem"
}

const txstl ={
    fontSize: "16px",
    lineHeight : "24px",
    fontWeight: "400",
    textAlign : "left",
    fontFamily: "Open Sans, sans-serif",
    color: "#8897a2",
    padding:".5rem"
}
function AboveAppstoreH(){
    return(
           <Box>
            <hr />
            <Flex gap="2rem" p="3rem">
            <Spacer/>
            <Box width="200px" textAlign="left">
               
               <AwardIcon p=".5rem"/>

               <Heading style={hdstl}>1 Lakh+ Products</Heading>
               <Text style={txstl}>
               We maintain strict quality controls on all our partner retailers, so that you always get standard quality products.
               </Text>
            </Box>
            <Box width="200px" textAlign="left">
                <SecurityIcon bg="#f4f7fb"/>
                <Heading style={hdstl}>Secure Payment</Heading>
                <Text style={txstl}>100% secure and trusted payment protection</Text>
            </Box>
            <Box width="200px" textAlign="left">
               <CalenderIcon bg="green"/>               
               <Heading style={hdstl}>Easy Return</Heading>
               <Text style={txstl}>We have a new and dynamic return window policy for medicines and healthcare items. Refer FAQs section for more details.</Text>
            </Box>
            <Spacer/>
           </Flex>
            <hr />
           </Box>
        )
}

export default AboveAppstoreH;