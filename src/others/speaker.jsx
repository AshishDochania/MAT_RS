import RealFoot from "../components/foot";
import BigNav from "../components/othernav";
import SpeakersCC from "../components/speakerCard";

function Speakers(){
    return (
        <div className="page">
        <BigNav topic="Invited Speakers" />
                <div className="container-rot base ">
                {/* add sp in the classname */}
                    {/* <div style={{margin:"4%",marginLeft:"8%"}}>
                    <SpeakersCC id="0" place="1"></SpeakersCC>
                    <SpeakersCC id="1" place="2"></SpeakersCC>
                    </div> */}
                    <div className="soon">
                        <p>Will be updated soon !!</p>
                    </div>
                </div>
                <RealFoot />
        </div>
    );
}
export default Speakers;