import bag1 from "./Images/checkout_bag1.png";
import bag2 from "./Images/checkout_bag2.png";
import bag3 from "./Images/checkout_bag3.png";
import bag4 from "./Images/checkout_bag4.png";
import bag5 from "./Images/checkout_bag5.png";
export default function Checkout()
{
    return(
        <>
          <div className="checkout_right">
            <div className="checkout_right_cont" >

            </div>
          </div>
          <div className="checkout_left"></div>
        </>
    )
}
function Checkout_cont(){
    return(
        <>
          <div className="checkout_cont_product">
             <img src={image}></img>
             <div className="checkout_cont_product_label">
                <label className="checkout_cont_product_label_l1">{label}</label>
                <label className="checkout_cont_product_label_l2">Color:Brown</label>
                <label className="checkout_cont_product_label_l3">Size:XL</label>
             </div>
          </div>
          <div className="checkout_cont_price">
            <label>$32.00</label>
          </div>
          <div className="checkout_cont_quantity"></div>
          <div className="checkout_cont_total"></div>
        </>
    )
}