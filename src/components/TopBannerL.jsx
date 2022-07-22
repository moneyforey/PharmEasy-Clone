import {Box,Image} from "@chakra-ui/react";
import {useState,useEffect} from "react";

const bannerImg = 
[
    "https://cms-contents.pharmeasy.in/banner/c414a98e027-dwebjpg.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/31e6940d27f-WP.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/3f636edf697-GRAND1000_Dweb.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/4a92d1f76bf-Get_end_to_end.jpg?dim=1440x0&dpr=1&q=100"
]

 const Banner =()=>{
    
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
        <Box>
          <Image src={bannerImg[image]} alt="bannerimg" />
        </Box>
        </>
    )
 } 

 export default Banner;