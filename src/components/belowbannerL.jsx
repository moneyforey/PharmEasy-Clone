import {Flex,Box,Image,Heading} from"@chakra-ui/react"
function BelowBannerL(){
    return(
        <Flex>
         <Box border="1px solid gray">
            <Flex>
                <Box bg="skyblue">
                    <Heading>Order Medicines</Heading>
                   
                </Box>
                <Image  src="https://assets.pharmeasy.in/web-assets/dist/7c645a8d.png?dim=186x0&dpr=1.5&q=100"/>

                <Box></Box>
            </Flex>
            
            
         </Box>


         <Box>
            <Image src="https://assets.pharmeasy.in/web-assets/dist/c7c7095b.png?dim=186x0&dpr=1.5&q=100"/>
         </Box>


         <Box>
            <Image src="https://assets.pharmeasy.in/web-assets/dist/e1d3ac1c.png?dim=186x0&dpr=1.5&q=100"/>
         </Box>
        </Flex>
    )
}

export default BelowBannerL;