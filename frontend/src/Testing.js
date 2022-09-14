import chair1 from "./Images/topcategories_chair1.png";
import chair2 from "./Images/topcategories_chair2.png"
export default function Testing() {
    return (
        <> 
          <div className="testing">
            <List>
                image1={chair1};
            </List>
            <List>
                image1={chair2};
            </List>
          </div>

        </>
    )
}
function List({image1}) {
    return (
        <>
            <div className="list_outer">
                <div className="list_outer_img">
                    <img src={image1}></img>
                    <button>View Shop</button>
                </div>
                <div className="list_outer_label">
                    <label className="list_outer_label_l1">Mini LCW Chair</label>
                    <label className="list_outer_label_l2">$56.00</label>
                </div>
            </div>
        </>
    )
}