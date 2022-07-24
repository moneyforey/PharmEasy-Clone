import {Heading,Text,Image, VStack} from "@chakra-ui/react"

function MainCart(){
    return(
        <VStack m="2rem">
         <Heading>Cart</Heading>
         <Text>Your Cart is Empty</Text>
         <Image mx="35rem" src="https://assets.pharmeasy.in/web-assets/dist/bb14593e.svg"/>
        </VStack>
    )
}
export default MainCart;