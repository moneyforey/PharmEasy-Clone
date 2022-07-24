import {Box,Flex,Spacer,Link} from "@chakra-ui/react"
import { Link as link } from "react-router-dom"
import OfferIcon from "../icons/OfferIcon";
import AvtarIcon from "../icons/AvtarIcon";
import CartIcon from "../icons/CartIcon";
import LogIn from "./Login";

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
                 <Link>
                 <OfferIcon/>
                 Offers
                 </Link>
                 <Link >
                 <Flex style={{alignItem:"center",
                alignContent:"center",
                textAlign:"center"}}>
                 <AvtarIcon/>
                 <LogIn/>
                 </Flex>
                 
                 </Link>
                 <Link as={link} to="/cart">
                 <CartIcon/>
                 Cart
                 </Link>
            </Flex>

        
    )
}

export default NavbarB;