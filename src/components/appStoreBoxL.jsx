import {Box,Flex,Heading,Image,Spacer} from"@chakra-ui/react"
const headStl={
    textAlign:"left",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "26px",
    lineHeight: "39px",
    fontWeight: "700",
    color: "#4f585e"
}
function AppStoreBox(){
    return(
         <Box px="1rem" bg="#f2f5f5 ">
            <Flex>
                <Box gap="1rem">
                  <Heading style={headStl}  mt="2rem">Simplifying Healthcare, Impacting Lives</Heading>
                  <Heading style={headStl}  mt="2rem">Download the App for free</Heading>

                  <Flex gap="1rem" pl=".5rem" mt="1rem">
                    <Image height="50px" src="https://assets.pharmeasy.in/web-assets/dist/4e4f1cab.png"/>
                    <Image height="50px" src="https://assets.pharmeasy.in/web-assets/dist/83095c03.png"/>
                  </Flex>

                </Box>

                <Spacer/>

                <Box>
                   <Image height="300px" src="https://assets.pharmeasy.in/web-assets/dist/1d1ccea7.jpg"/>
                </Box>
            </Flex>
         </Box>
    )
}

export default AppStoreBox;