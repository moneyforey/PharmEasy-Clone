import {Route, Routes} from"react-router-dom"
import HealthCareProducts from "./HealthCareProduct";
import Home from "./Home";
import Cart from "../components/Cart";

const Allroutes =()=>{
    return(
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/healthcare" element={<HealthCareProducts/>}/>
         <Route path="/cart" element={<Cart/>}/>
        </Routes>

    )
}

export default Allroutes;