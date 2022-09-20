import {render} from "react-dom";
import { HashRouter,Route,Router,Routes } from "react-router-dom";
import InBetweenBanner2 from "./InBetweenBanner2";
import Mainbanner from "./Mainbanner";
import  Topcategories from "./Topcategories";
import Checkout from "./Checkout";
import Relatedproducts from "./Relatedproducts";
import  Adminsubtitle from "./Adminsubtitle";
import Shippingaddress from "./Shippingaddress";
import Adminlinegraph from "./Adminlinegraph";
import Adminlogstatistics from "./Adminlogstatistics";
import Adminloginbottom from "./Adminloginbottom";
export default function Navigation(){
    return(
        <>
        <HashRouter>
            <Routes>
                <Route path="/InBetweenBanner2" element={<InBetweenBanner2/>}></Route>
                <Route path="/Mainbanner" element={<Mainbanner/>}></Route>
                <Route path="/Topcategories" element={<Topcategories/>}></Route>
                <Route path="/Checkout" element={<Checkout/>}></Route>
                <Route path="/Relatedproducts" element={<Relatedproducts/>}></Route>
                <Route path="/Adminsubtitle" element={<Adminsubtitle/>}></Route>
                <Route path="/Shippingaddress" element={<Shippingaddress/>}></Route>
                <Route path="/Adminlinegraph" element={<Adminlinegraph/>}></Route>
                <Route path="/Adminlogstatistics" element={<Adminlogstatistics/>}></Route>
                <Route path="/Adminloginbottom" element={<Adminloginbottom/>}></Route>
            </Routes> 
        </HashRouter>

        </>
    )
}