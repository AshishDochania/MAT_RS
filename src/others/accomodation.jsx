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
                            <li>₹ 350 - Accommodation on sharing basis</li>
                            <li>₹ 450 - Single, subject to availability</li>
                        </ul>
                    </div>
                    <div className="photo">

                    </div>
                    <div className="payment">
                        <h2>Details of the contact person for accommodation:</h2>
                        <p style={{margin:"0"}}>Ms. Aiswarya Sahu</p>
                            <p>Email: sahu.16@iitj.ac.in</p>
                        <p style={{margin:"0"}}>Mr. Mohit Singh</p><p>Email: singh.110@iitj.ac.in </p>
                    </div>
                </div>
                </div>
                <RealFoot />
        </div>
    );
}
export default Accomodation;