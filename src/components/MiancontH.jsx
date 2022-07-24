import {Box, Flex,Image,Text,Grid, GridItem} from"@chakra-ui/react";
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";


const data = [
    {
      "id":"01",
      "image":"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png",
      "name":"Covid Essentials",
      "discount":"77"
    },
    {
        "id":"02",
        "image":"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b4a3a67a59783e0ca738884c9acc8e7b.png",
        "name":"Personal Care",
        "discount":"80"
    },
    {
        "id":"03",
        "image":"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/62e6d7551ecf3a5da1d2336c41cc0549.png",
        "name":"Health Food & Drinks",
        "discount":"57"
    },
    {
        "id":"04",
        "image":"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/8a45f5baa68e3b72ae631003faa97bdb.png",
        "name":"Beauty",
        "discount":"35"
    },
    {
        "id":"05",
        "image":"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ff5aaa03881e3016bf409f85b4e328aa.png",
        "name":"Skin Care",
        "discount":"50"
    },
    {
        "id":"06",
        "image":"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/68ae87e29f4a3abbb8ed69fe7ecf057c.png",
        "name":"Home Care",
        "discount":"35"
    },
    {
        "id":"07",
        "image":"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/4209e1d247cd30fca1f619786fa3e9c1.png",
        "name":"Ayurvedic Care",
        "discount":"70"
    },
    {
        "id":"08",
        "image":"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/7e509ee2f5413b0483d00c0b30067ee0.png",
        "name":"Sexual Wellness",
        "discount":"53"
    },
    {
        "id":"09",
        "image":"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/0e9613b95131376b95bcbf92c48149b5.png",
        "name":"Fitness & Suppliments",
        "discount":"80"
    },
    {
        "id":"10",
        "image":"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/af8d32e30757338787ca3e9267865d4f.png",
        "name":"Mother & Baby Care",
        "discount":"50"
    },
    {
        "id":"11",
        "image":"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/e17c6d96de443b65988f5b2366b6ebb1.png",
        "name":"Health Care Devices",
        "discount":"65"
    },
    {
        "id":"12",
        "image":"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/14bac4e33b11338299d8d6c1d905ca8f.png",
        "name":"Health conditionds",
        "discount":"65"
    },
    {
        "id":"13",
        "image":"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ec716b08ac643f88971944792e2c5549.png",
        "name":"Diabatic Care",
        "discount":"65"
    },
    {
        "id":"14",
        "image":"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/292b08b6deab3ba9bd76d3a6ed4d71e0.png",
        "name":"Elderly Care",
        "discount":"45"
    },
    {
        "id":"15",
        "image":"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/236fc993bd00381fb7061ee2333ad0e3.png",
        "name":"Accessories & Wearables",
        "discount":"35"
    },
    {
        "id":"16",
        "image":"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/7967589fcc513f348de4c1069c04ea38.png",
        "name":"Value Store",
        "discount":"10"
    }
]


const nmstl =
{  lineHeight:"20px",
    fontWeight:"500",
    color:"#4a4a4a",
    fontSize:"16px",
    fontFamily:"Open Sans, sans-serif"
}

const dsstl ={
    lineHeight:"18px",
    fontWeight:"400",
    color:"#16876e",
    fontSize:"14px",
    fontFamily:"Open Sans, sans-serif"
}

const gdIstl ={
    border: "1px solid gray",
    borderRadius: ".5rem",
    
}

function MainContH(){

    // const [data,setData] = useState();


    //   function getData(){
    //     axios.get("http://localhost:3000/Products")
    //     .then((res)=>setData(res))
    //     .catch((err)=>console.log(err))
    //   }

    //   useEffect(()=>{
    //     getData()
    //   })
    
    
    return(
        <Grid templateColumns='repeat(3, 1fr)' gap={6}  mx="5rem">

         {
            data.map((elem)=>(
              <GridItem p="2rem" style={gdIstl} >
                 <Flex gap="2rem">
                <Image height="50px" src={elem.image}/>
                <Text style={nmstl}>{elem.name}</Text>
                <Text style={dsstl}>Upto {elem.discount}% off</Text>
                </Flex>
              </GridItem>
            ))
         }
        </Grid>
    )
}

export default MainContH;