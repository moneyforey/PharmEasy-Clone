import {Box,Image} from "@chakra-ui/react";
import {useState,useEffect} from "react";

const bannerImg = 
[
    "https://cms-contents.pharmeasy.in/banner/c1642e659f5-BeautyLauch-SB-June22.jpg?dim=700x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/3bdb0db12e1-ABZORB-JUL.jpg",
    "https://cms-contents.pharmeasy.in/banner/33ce2b5ba8b-Friends-CB-May22.jpg",
    "https://cms-contents.pharmeasy.in/banner/c4d259a9077-OneTouchSPS-CB-July22.png",
    "https://cms-contents.pharmeasy.in/banner/b1cd3f940f5-Evion-CB.jpg",
    "https://cms-contents.pharmeasy.in/banner/a86af72f350-Huggies-CB-May22.jpg"
]

 const BannerH =()=>{
    
    const [image,setImage] = useState(0)
    
    function imageManager(){

        setInterval(()=>{
           


            setImage(image+1);

            if(image === bannerImg.length-1){
                setImage(0)
            }

        },2000)}

    
    
        useEffect(()=>{
        imageManager();
    },[0])


    return(
       <>
        <Box  mx="15rem" p="5rem">
          <Image src={bannerImg[image]} alt="bannerimg" />
        </Box>
        </>
    )
 } 

 export default BannerH;