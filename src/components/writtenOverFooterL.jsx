import {Box,Heading,Text} from"@chakra-ui/react"

const headStl ={
    fontWeight: "700",
    fontSize: "12px",
    lineHeight:"18px",
    fontFamily: "Open Sans, sans-serif",
    color:"#4f585e",
    marginTop:"1rem",
    textAlign:"left"
}

const txtStl ={
    fontWeight: "400",
    fontSize: "12px",
    lineHeight:"18px",
    fontFamily: "Open Sans, sans-serif",
    color:"#4f585e",
    marginTop:"1rem",
    textAlign:"left"
}
const WrittenL =()=>{
    return(
        <Box my="3rem" mx="1rem"  > 
          <Box>
            <Box>
            <Text style={txtStl}>
                <span style={headStl}>Top-Selling Healthcare Products:</span>
Accu-Chek Active - 100 Strips |
Supradyn Multivitamin Tablets |
DR Morepen BG 03 - 50 Strips |
Dettol Antiseptic Liquid |
Ensure Diabetes Care Vanilla Sugar Free Jar |
Dettol Instant Hand Sanitizer |
Everherb Shilajit |
Softovac SF Powder |
Pediasure Premium Chocolate Refill</Text>
            </Box>
            <Box>
           <Text style={txtStl}>
           <span style={headStl}>Top-Selling Medicines:</span>
Dolovera Gel |
Neurobion Forte |
Chymoral Forte |
Crocin Advance |
Soframycin |
Dexorange |
Becadexamin |
Folvite |
Livogen |
Becosules |
Fourderm |
Nurokind Plus |
Burnol |
Crocin 650 |
Mintop 5 |
Thrombophob |
Evion 600
           </Text>
            </Box>
            <Box>
          <Text style={txtStl}>
          <span style={headStl}>COVID-19 Preventatives:</span>
N95 Masks |
Hand Sanitizers |
Hand Gloves, Disinfectants, Thermometers & more!
          </Text>
            </Box>
          </Box>



          <Box>
           <Heading style={{ fontWeight: "700",
    fontSize: "14px",
    lineHeight:"21px",
    fontFamily: "Open Sans, sans-serif",
    color:"#4f585e",
    marginTop:"1rem",
    textAlign:"left"}}> 
    Your One-Stop Online Pharmacy - PharmEasy
    </Heading>


           <Heading style={headStl}>We've got India Covered!</Heading>
           <Text style={txtStl}>We now deliver in 1000+ cities and towns across 22000+ pin codes. We thereby cover every nook and corner of the country! The major cities in which we deliver include Mumbai, Kolkata, Delhi, Bengaluru, Ahmedabad, Hyderabad, Chennai, Thane, Howrah, Pune, Gurgaon, Navi Mumbai, Jaipur, Noida, Lucknow, Ghaziabad & Vadodara.</Text>

           <Heading style={headStl}>Say Goodbye to All Your Healthcare Worries With PharmEasy!</Heading>
           <Text style={txtStl} >PharmEasy is here to help you take it easy! We are amongst one of India's top online pharmacy and medical care platforms. It enables you to order pharmaceutical and healthcare products online by connecting you to registered retail pharmacies and get them delivered to your home. We are an online medical store, making your purchase easy, simple, and affordable!</Text>

           <Heading style={headStl}>How Are We Making Lives Simpler With Our Online Medical Store?</Heading>
           <Text style={txtStl}>Our doorstep delivery service is available in PAN-India across top cities like Bangalore, Delhi, Mumbai, Kolkata, Hyderabad, Gurgaon, Noida, Pune, etc. Our online medical store also allows you to choose from 1 lakh+ products incl. OTC products and medical equipment. PharmEasy is a one-stop online medical platform where you can also book diagnostic tests including blood tests, full-body checkups, and other preventive health check-ups at an affordable cost, right from the comfort of your home. We have partnered with trusted & certified labs that arrange for a sample pick-up from the convenience of your home. They also provide you with timely reports.</Text>

           <Heading style={headStl}>Why Are We The Most Preferred Online Pharmacy?</Heading>
           <Text style={txtStl}>Lucrative offers on our platform allow you to make payment online and via various payment wallets at a discounted price. Alternatively, you can also choose to pay cash on delivery as we deliver the products at your doorstep. We cater to all your pharmaceutical needs and also make ordering medicines online a hassle-free experience for you. We connect you only with registered retail pharmacies & certified diagnostic labs. We ensure that healthcare is affordable to all and make the process of ordering online simple.</Text>

           <Heading style={headStl}>Sit Back & Relax While You Get Your Essentials Delivered Every Month!</Heading>
           <Text style={txtStl}>It’s tough to remember to refill every month, especially in the case of chronic diseases. PharmEasy’s subscription service not only ensures that you are reminded of your refills but also makes sure that you are never out on your medical essentials. You will get a reminder every month and your order will be delivered at your convenience!</Text>

           <Heading style={headStl}>Access medical and health information:</Heading>
           <Text style={txtStl}>PharmEasy delivers reliable and accurate medical information that has been carefully written, vetted and validated by our health experts. Our specialists curate high-quality and most reliable literature about medicines, illnesses, lab tests, Ayurvedic and over the counter health products.</Text>

           <Heading style={headStl}>We Believe in ‘Simplifying Healthcare, Impacting Lives!’</Heading>
          </Box>
        </Box>
    )
}

export default WrittenL;