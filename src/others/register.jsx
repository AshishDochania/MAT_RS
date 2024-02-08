import RealFoot from "../components/foot";
import BigNav from "../components/othernav";


function Registration(){
    return (
        <div className="page">
        <BigNav topic="Registration" />
            
                <div className="container-rot base">
                    <div style={{height:"50vh"}}>
                        Registration Fees : ₹ 300
                        <p style={{fontSize:"larger"}}>
                    Register now by filling out the <a style={{textDecoration:"none"}} href="https://docs.google.com/forms/d/e/1FAIpQLSdiO-8Fi7kYWQIgYkJ-XpQvlONlvHz6nBINUgpsKlwWYz2J3w/viewform?usp=pp_url" target="blank">Registration form</a>.
                    </p>
                    </div>
                    {/* <div className="soon">
                        <p>Will be updated soon !!</p>
                    </div> */}
                </div>
            <RealFoot />
        </div>
    );
}

export default Registration;