import {Flex,Box,Image,Heading,Button, VStack} from"@chakra-ui/react"

const hdStl ={
    lineHeight:"30px",
    fontSize:"20px",
    fontWeight: "700",
    fontFamily: "Open Sans, sans-serif"
}
function BelowBannerL(){
    return(
        <Flex my="5rem" justifyContent="space-around">
         <VStack height="200px" border="1px solid gray" borderRadius=".5rem">
            <Flex borderRadius=".5rem" height="90px" bg="#cff0ea" >
               
               <Box>
               <Heading  style={hdStl}>Order Medicines</Heading>
               <Button color="white" bg="#3bb896" my="5rem" >Order Now</Button>
               </Box>
                
                <Image height="180px" src="https://assets.pharmeasy.in/web-assets/dist/7c645a8d.png?dim=186x0&dpr=1.5&q=100"/>
            </Flex>
         </VStack>


         <VStack height="200px" border="1px solid gray" borderRadius=".5rem">
         <Flex borderRadius=".5rem" height="90px" bg="#fdf2d2" >
              <Box>
               <Heading  style={hdStl}>Healthcare Products</Heading>
               <Button color="white" bg="#fc8019" my="5rem" >Order Now</Button>
               </Box>
            <Image height="180px"  src="https://assets.pharmeasy.in/web-assets/dist/c7c7095b.png?dim=186x0&dpr=1.5&q=100"/>
            </Flex>
            </VStack>


         <VStack height="200px" border="1px solid gray" borderRadius=".5rem">
         <Flex borderRadius=".5rem" height="90px" bg="#cff0ea" >
              <Box>
               <Heading  style={hdStl}>Lab Tests</Heading>
               <Button color="white" bg="#00b9e1" my="5rem" >Order Now</Button>
               </Box>
            <Image height="180px"  src="https://assets.pharmeasy.in/web-assets/dist/e1d3ac1c.png?dim=186x0&dpr=1.5&q=100"/>
            </Flex>
            </VStack>
        </Flex>
    )
}

export default BelowBannerL;