import {Box,Image,Flex,Heading} from"@chakra-ui/react"

const data = [
    { "id": 1, "name": "Sugar Free", "image": "https://cms-contents.pharmeasy.in/carousel_item/d5f9240e29a-SUGARFREE.png?dim=146x0&dpr=1.5&q=100" },
    { "id": 2, "name": "Glucon-D", "image": "https://cms-contents.pharmeasy.in/carousel_item/9e6244f6cab-Featured-web_Glucon-D.jpg?dim=146x0&dpr=1.5&q=100" },
    { "id": 3, "name": "Himalaya Wellness", "image": "https://cms-contents.pharmeasy.in/carousel_item/7326ee948ff-web_Himalaya.jpg?dim=146x0&dpr=1.5&q=100" },
    { "id": 4, "name": "Liveasy", "image": "https://cms-contents.pharmeasy.in/carousel_item/c572570b5ce-Liveasy.jpg?dim=146x0&dpr=1.5&q=100" },
    { "id": 5, "name": "Huggies", "image": "https://cms-contents.pharmeasy.in/carousel_item/c72feb4bd7a-web_Huggies.jpg?dim=146x0&dpr=1.5&q=100" },
    { "id": 6, "name": "Wellbeing Nutritions", "image": "https://cms-contents.pharmeasy.in/carousel_item/729f07d6c49-04.jpg?dim=146x0&dpr=1.5&q=100" },
    { "id": 7, "name": "Revital", "image": "https://cms-contents.pharmeasy.in/carousel_item/2d987111a15-Featured-banner_Revital.png?dim=146x0&dpr=1.5&q=100" },
    { "id": 8, "name": "Volini", "image": "https://cms-contents.pharmeasy.in/carousel_item/ac01791d842-Featured-banner_Volini.png?dim=146x0&dpr=1.5&q=100" },
    { "id": 9, "name": "Pentasure", "image": "https://cms-contents.pharmeasy.in/carousel_item/1faa7b6995e-Pentasure_Dweb.jpg?dim=146x0&dpr=1.5&q=100" },
    { "id": 10, "name": "Sirona", "image": "https://cms-contents.pharmeasy.in/carousel_item/760a5f6f612-web_sirona.jpg?dim=146x0&dpr=1.5&q=100" },
    { "id": 11, "name": "Abzorb", "image": "https://cms-contents.pharmeasy.in/carousel_item/6d5f3f3a89b-web_Abzrob.jpg?dim=146x0&dpr=1.5&q=100" },
    { "id": 12, "name": "EverHerb", "image": "https://cms-contents.pharmeasy.in/carousel_item/0845572266f-Everherb.jpg?dim=146x0&dpr=1.5&q=100" },
    { "id": 13, "name": "PharmEasy", "image": "https://cms-contents.pharmeasy.in/carousel_item/f4d69f8837a-Pharmeasy-Web.jpg?dim=146x0&dpr=1.5&q=100" }
    
  ];


const FeturedBrandSection =()=>{
    return(
        <Box>
            <Heading 
            style={{textAlign:"left",
                    fontSize:"20px",
                    lineHeight:"30px",
                    fontWeight:"700",
                    color:"#4f585e",
                    marginLeft:"2rem"}}>
            Featured Brands
            </Heading>
            <Flex m="2rem" gap="2rem" overflow="auto">
            
            {
                data.map((elem)=>(
                    <Image height="200px" src={elem.image} alt="fbimage" />
                    
                ))
            }
            </Flex>
        </Box>
    )

}

export default FeturedBrandSection;