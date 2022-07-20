import {Box, 
       IconButton, 
       Heading, 
       Input,
       Flex,
       Image,
       ButtonGroup,
       Button,
       Spacer,
       InputLeftAddon,
       InputRightAddon, 
       InputGroup} from"@chakra-ui/react"
import { Link } from "react-router-dom"
import {Search2Icon} from "@chakra-ui/icons"
import PincodeDrawer from "./PincodeDrawer"


const Navbar =()=>{
    return(
        <Flex p="2" bg="#10847e" minWidth='max-content' alignItems='center' gap='2'>
        <Box p='2'>
        <Image height="50px"  bg="#10847e " src='https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png' alt='brandlolgo' />
        </Box>
        <Spacer />
        <InputGroup borderRadius="1rem"  size='sm'>
        <InputLeftAddon height="50px" children={<Button size="100%" />} />
       <Input bg="white" height="50px" placeholder='Search Medicines/Healthcare Products' />
       <InputRightAddon height="50px" children={<IconButton size="100%" aria-label='Search database' icon={<Search2Icon />} />} />
      </InputGroup>
      <Spacer/>
      <Box></Box>
      </Flex>

 )
}

export default Navbar;