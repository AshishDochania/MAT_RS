import RealFoot from "../components/foot";
import BigNav from "../components/othernav";


function Registration(){
    return (
        <div className="page">
        <BigNav topic="Registration" />
            
                <div className="container-rot base">
                    <div>
                        Registration Fees : ₹ 300
                    </div>
                    <div className="soon">
                        <p>Will be updated soon !!</p>
                    </div>
                </div>
            <RealFoot />
        </div>
    );
}

export default Registration;