import {Route, Routes} from"react-router-dom"
import HealthCareProducts from "./HealthCareProduct";
import Home from "./Home";

const Allroutes =()=>{
    return(
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/healthcare" element={<HealthCareProducts/>}/>
        </Routes>
    )
}

export default Allroutes;