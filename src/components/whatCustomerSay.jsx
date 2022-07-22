import {Box,Flex,Heading,Text} from "@chakra-ui/react"


const data = [
    {
        name:"Rohini Sarkar",
        date:"April 21, 2020" ,
        msg:"Very helpful and friendly app in terms of uasability, customer support & money saving from the point of medical necessity of every person"},
    {
        name:"Varun Sonagra",
        date:"April 23, 2020",
        msg:"I've had a good experience. The Consultaion with a doctor feature works well to. The price and discounts are great too. Overall the simplecity of the app is plus too. I recommened this app. Will always be a customer/user now! Genuinely!"
    },
    {
        name:"Rajarashi Sarkar",
        date:"April 22, 2020",
        msg:"I've had a good experience. The Consultaion with a doctor feature works well to. The price and discounts are great too. Overall the simplecity of the app is plus too. I recommened this app. Will always be a customer/user now! Genuinely!"
    },
    {
        name:"Darpan Dholakia",
        date:"April 23, 2020",
        msg:"I've had a good experience. The Consultaion with a doctor feature works well to. The price and discounts are great too. Overall the simplecity of the app is plus too. I recommened this app. Will always be a customer/user now! Genuinely!"
    },
    {
        name:"Lipi Chaudhari",
        date:"April 15, 2020",
        msg:"I've had a good experience. The Consultaion with a doctor feature works well to. The price and discounts are great too. Overall the simplecity of the app is plus too. I recommened this app. Will always be a customer/user now! Genuinely!"
    },
    {
        name:"Tirthankar Das Purkaystha",
        date:"April 23, 2020",
        msg:"I've had a good experience. The Consultaion with a doctor feature works well to. The price and discounts are great too. Overall the simplecity of the app is plus too. I recommened this app. Will always be a customer/user now! Genuinely!"
    },
    {
        name:"Debanjan Roy",
        date:"April 18, 2020",
        msg:"I've had a good experience. The Consultaion with a doctor feature works well to. The price and discounts are great too. Overall the simplecity of the app is plus too. I recommened this app. Will always be a customer/user now! Genuinely!"
    }
]


function WhatCustomerSay(){
    return(
        <Box>
             <Heading style={{
                textAlign:"left",
                fontFamily:"Open Sans, sans-serif",
                fontSize:"20px",
                fontWeight:"700",
                lineHeight:"30px",
                color:"#4f585e"
             }}>
                What our customers have to say</Heading>
           <Flex gap="2rem">
          { data.map((elem)=>(
              <Box >
              
              <Box>
              <Heading
               style={{
                textAlign:"left",
                fontFamily:"Open Sans, sans-serif",
                fontSize:"14px",
                fontWeight:"700",
                lineHeight:"18px",
                color:"#4f585e"
             }}>{elem.name}</Heading>
              <Heading
               style={{
                textAlign:"left",
                fontFamily:"Open Sans, sans-serif",
                fontSize:"14px",
                fontWeight:"400",
                lineHeight:"18px",
                color:"#4f585e"
             }}>{elem.date}</Heading>
              </Box >
             <Box  p="2rem" bg="#f2fff8">
              <Text
               style={{
                textAlign:"left",
                fontFamily:"Open Sans, sans-serif",
                fontSize:"12px",
                fontWeight:"400",
                lineHeight:"15px",
                color:"#4f585e"
             }}>
                {elem.msg}
             </Text>
              </Box>
              </Box>
           
))}
           </Flex>
        </Box>
    )
}

export default WhatCustomerSay;