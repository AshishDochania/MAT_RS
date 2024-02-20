import RealFoot from "../components/foot";
import BigNav from "../components/othernav";


function Accomodation(){
    return (
        <div className="page">
        <BigNav topic="Accommodation"/>
                <div className="container-rot base">
                <div style={{height:"100%"}}>
                    <div className="details">
                        <h2>Accommodation Details :</h2>
                        <p>Rent of hostel room along with bedding-set & meal can be paid as follows :</p>
                        <ul>
                            <li>350 - Accommodation on sharing basis</li>
                            <li>450 - Single, subject to availability</li>
                        </ul>
                    </div>
                    <div className="photo">

                    </div>
                    <div className="payment">
                        <h2>Payment Details :</h2>
                        <p>If you need accommodation, please pay directly here :</p>
                        <ul style={{listStyle:"none"}}>
                            <li>Account Name : IIT Jodhpur Hostel Receipts and Fine Accounts</li>
                            <li>Account No : 38448045180</li>
                            <li>Bank details : SBI IIT Jodhpur</li>
                            <li>IFSC Code : SBIN0014892</li>
                        </ul>
                        <p>Also fill up the form and upload the payment receipt.</p>
                    </div>
                </div>
                </div>
                <RealFoot />
        </div>
    );
}
export default Accomodation;