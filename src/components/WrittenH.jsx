import {Heading,Text,Box} from"@chakra-ui/react";

const hdstl ={
    textAlign: "left",
    fontSize:"16px",
    lineHeight:"24px",
    fontFamily:"Open Sans, sans-serif",
    color:"#4f585e",
    fontWeight:"600",
    padding:".5rem"
}

const txstl ={
    textAlign: "left",
    fontSize:"16px",
    lineHeight:"24px",
    fontFamily:"Open Sans, sans-serif",
    color:"#4f585e",
    fontWeight:"400",
    padding:".5rem"
}

function WrittenH(){
   return(
    <Box p="5rem">
      
      <Heading style={hdstl}>Shop Safely And Worry-Free On PharmEasy</Heading>
      <Text style={txstl}>PharmEasy is a renowned name in the online shopping of Over The Counter or healthcare products and other daily essentials. Ordering online on PharmEasy is convenient, fast and hassle-free; you can avoid the annoyance of queuing up at your local pharmacy and also avail of huge discounts of up to 80% OFF. Purchasing the healthcare requirements such as medical devices and nutritional supplements that you need will no longer burn a hole in your pocket. At PharmEasy, you are sure to find everything that you need because we have products across all healthcare categories.</Text>



      <Heading style={hdstl}>Why choose PharmEasy?</Heading>
      <Text style={txstl}>
        <ul >
            <li>8400+ Brands</li>
            <li>35K products in our stock</li>
            <li>Delivery to 22000+ pin codes</li>
            <li>Delivered to 50 lakh+ families</li>
            <li>Over 2M customers served</li>
        </ul>
      </Text>



      <Heading style={hdstl}>Our most popular categories:</Heading>
      <Text style={txstl}>We have a range of categories and products, some which are:</Text>


      <Heading style={hdstl}>Devices</Heading>
      <Text style={txstl}>With the pandemic upending our lives, we have all realized that there are some medical devices that we need to keep in our homes such as Oximeter, Thermometer, Inhaler, Blood pressure monitor, Glucometer.</Text>


      <Heading style={hdstl}>Personal care</Heading>
      <Text style={txstl}>Personal care products can include a wide range of products such as Bath products, , Skincare essentials, Razor blades, Toothpaste and toothbrush, Wet wipes, Lip balm, Face masks, Hand sanitizer, etc.</Text>


      <Heading style={hdstl}>Nutrition and fitness supplements</Heading>
      <Text style={txstl}>To give your health a helping hand, you can order a wide variety of health supplements including Health drinks, Nutritional powder, Nutrition tablets/capsules.</Text>


      <Heading style={hdstl}>Ayurvedic care</Heading>
      <Text style={txstl}>Place your trust in the goodness of natural and organic ayurvedic products for an all-around healthy mind and body. There’s plenty to choose from such as Aloe vera juice, Moringa capsules, Garlic capsules.</Text>

      <Heading style={hdstl}>Home care</Heading>
      <Text style={txstl}>Home care products are things you need every day such as disinfectant spray, phenyl, dishwashing liquid, etc. Get them all at spectacular discounts on PharmEasy.</Text>

      <Heading style={hdstl}>Baby and mom care</Heading>
      <Text style={txstl}>PharmEasy also has an impressive range of baby and mom care products including Diapers, Baby bath products, Infant formula food, Mother’s health drinks, Diaper rash creams, Baby wipes.</Text>




      <Heading style={hdstl}>Our top brands:</Heading>
      <Text style={txstl}>Get products from the most famous and trusted brands including Accu-chek, Dettol, Horlicks, Baidyanath, Sebamed.</Text>

      <Heading style={hdstl}>You are safe with PharmEasy:</Heading>
      <Text style={txstl}>Given the times, we are taking all precautions to ensure that we keep everyone safe - our customers and the people we work with.</Text>


      <Heading style={hdstl}>We ensure</Heading>
      <Text style={txstl}>
        <ul>
            <li>Regular sanitization of our premises and warehouses</li>
            <li>Temperature checks of our employees and delivery partners</li>
            <li>No-contact door-step delivery</li>
            <li>Sanitized packaging</li>
        </ul>
      </Text>



      <Heading style={hdstl}>Youe safety is our priority</Heading>
      <Text style={txstl}>Stay safe at home and shop at your convenience from PharmEasy. All you have to do is place your order and we will try to deliver it at the earliest.</Text>
      </Box>
   )
}


export default WrittenH;