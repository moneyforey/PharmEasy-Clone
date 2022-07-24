import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Text,
    Flex,
    Box,
    Image,
    Link,
    VStack
  } from '@chakra-ui/react';

  import {TriangleDownIcon} from "@chakra-ui/icons";
  
  import React from"react";

function PincodeDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Text ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Select Pincode
          <TriangleDownIcon color="gray"/>
        </Text>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Choose Your Location</DrawerHeader>
  
            <DrawerBody>
              <Flex>
              <Input placeholder='Enter Pin Code' />
               <Button color="white" bg="#10847e">Check</Button> 
              </Flex>
              <Flex bg="#f3f6fa" p=".5rem" gap="1rem" my="2rem">
               <Image src="https://assets.pharmeasy.in/web-assets/dist/90ee736b.svg"/>
               <Text>Serving more than 1,000 towns and cities in India.</Text>
              </Flex>


              <Flex bg="#f3f6fa" p=".5rem" gap="1rem" my="2rem">
               <Image src="https://assets.pharmeasy.in/web-assets/dist/0c22e009.svg?dim=0x32&dpr=1.5&q=100"/>
               <VStack style={
                {
                  textAlign:"left"
                }
               }>

               <Text>Over 30,00,000 orders safely delivered</Text>
               <Link color="skyblue">Know more</Link>
               </VStack>
               
              </Flex>
            </DrawerBody>
  
            
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export  default PincodeDrawer;