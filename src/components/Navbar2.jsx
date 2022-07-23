import {Box,Flex,Spacer,Link} from "@chakra-ui/react"
import { Link as link } from "react-router-dom"

const stl ={
    lineHeight:"21px",
    color:"#ffffff",
    fontFamily:"Open Sans, sans-serif",
    fontSize:"16px",
    fontWeight:"400"

}

function NavbarB(){
    return(
       
        

            <Flex  style={{stl}} p="1rem" bg="#10847e" color="#ffffff"  gap="3rem">
                <Spacer/>
                <Link>Order Medicines</Link>
                <Link as={link}  to="/healthcare">Healthcare Products</Link>
                <Link>Lab Tests</Link>
                 <Link>RTPCR</Link>
                 <Spacer/>
            </Flex>

        
    )
}

export default NavbarB;