import chair1 from "./Images/chair1.png";
import chair2 from "./Images/chair2.png";
import chair3 from "./Images/chair3.png";
import chair4 from "./Images/chair4.png";
import "./style.css";
export default function Topcategories() {
    return (
        <>
            <div className="Topcategories">
                <div className="Topcategories_header">
                    <label>Top Categories</label>
                </div>
                <div className="Topcategories_cont">
                    <div className="Topcategories_cont_cont1">
                        <div className="Topcategories_cont_cont1_image1">
                            <img src={chair1}></img>
                            <div className="Topcategories_cont_cont1_image1_button">
                                <button>view shop</button>
                            </div>
                        </div>
                        <div className="Topcategories_cont_cont1_label">
                            <div className="Topcategories_cont_cont1_label_label1">
                                <label>Mini LCW chair</label>
                            </div>
                            <div className="Topcategories_cont_cont1_label_label2">
                                <label> $56.00</label>
                            </div>
                        </div>
                    </div>
                    <div className="Topcategories_cont_cont2">
                        <div className="Topcategories_cont_cont2_image">
                            <img src={chair2}></img>
                        </div>
                        <div className="Topcategories_cont_cont2_label">
                            <div className="Topcategories_cont_cont2_label_label1">
                                <label>Mini LCW chair</label>
                            </div>
                            <div className="Topcategories_cont_cont2_label_label2">
                                <label> $56.00</label>
                            </div>
                        </div>
                    </div>
                    <div className="Topcategories_cont_cont3">
                        <div className="Topcategories_cont_cont3_image">
                            <img src={chair3}></img>
                        </div>
                        <div className="Topcategories_cont_cont3_label">
                            <div className="Topcategories_cont_cont3_label_label1">
                                <label>Mini LCW chair</label>
                            </div>
                            <div className="Topcategories_cont_cont3_label_label2">
                                <label> $56.00</label>
                            </div>
                        </div>
                    </div>
                    <div className="Topcategories_cont_cont4">
                        <div className="Topcategories_cont_cont4_image">
                            <img src={chair4}></img>
                        </div>
                        <div className="Topcategories_cont_cont4_label">
                            <div className="Topcategories_cont_cont4_label_label1">
                                <label>Mini LCW chair</label>
                            </div>
                            <div className="Topcategories_cont_cont4_label_label2">
                                <label> $56.00</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}