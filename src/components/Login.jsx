import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Button,
    useDisclosure,
    Text,
    Flex,
    Image,
    Heading,
    InputLeftAddon,
    InputGroup,
    VStack
    
  } from '@chakra-ui/react';

  import React from "react";

  const hdstl={
    lineHeight:"24px",
    fontSize:"16px",
    fontWeight:"700",
    color:"#4f585e",
    fontFamily:"Open Sans, sans-serif",
    textAlign: "left"
  }

  const txstl={
    lineHeight:"15px",
    fontSize:"12px",
    fontWeight:"400",
    color:"#4f585e",
    fontFamily:"Open Sans, sans-serif"
  }

function  LogIn() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Text ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Login/Signup
        </Text>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color="white" />
            <DrawerHeader bg="#10847e">
                <Flex gap="1rem">
                    <Image height="60px" src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"/>
                    <Image src="https://assets.pharmeasy.in/web-assets/dist/1fe1322a.svg"/>
                </Flex>
            </DrawerHeader>
  
            <DrawerBody>
                <VStack>
                <Heading style={hdstl}>Quick Login / Register</Heading>
                <InputGroup>
               <InputLeftAddon children='+91' />
               <Input type='tel' placeholder='Enter your phone number' />
            </InputGroup>
            <Button width="100%" bg="#10847e" color="white">Send OTP</Button>
            <Text style={txstl}>By clicking continue, you agree with our Privacy Policy</Text>
                </VStack>
            </DrawerBody>
  
           
          </DrawerContent>
        </Drawer>
      </>
    )
  }


  export  default LogIn;