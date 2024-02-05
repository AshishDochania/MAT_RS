import RealFoot from "../components/foot";
import BigNav from "../components/othernav";


function Contact(){
    return (
        <div className="page">
        <BigNav topic="Contact Us" />

                <div className="container-rot base">
                    <div className="contacts">
                    <div className="c-one">
                        <ul>
                            {/* <li><span className="dark">Location :</span>
                                <ul><li>Department of Metallurgical and Materials Engineering</li>
                                        <li>Indian Institute of Technology Jodhpur</li>
                                        <li>NH 65 Nagaur Road</li>
                                        <li>Karwar 342037</li>
                                        <li>Jodhpur District</li></ul>
                            </li> */}
                            <li><p><span className="dark">Emails:</span> <ul><li>office_materials@iitj.ac.in</li><li>head_mt@iitj.ac.in</li></ul></p></li>
                            <li><p><span className="dark">Call :</span> (0291) 280 1552</p></li>
                        </ul>
                    </div>
                    {/* <div className="c-two">
                        <h2></h2>
                    </div> */}
                    </div>
                </div>
                <RealFoot />
        </div>
    );
}
export default Contact;