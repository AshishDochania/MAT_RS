import {useState} from "react";
import Des from "../description";
import Header from "../components/Header";
import CardEl from "../components/cardElement"
import Foot from "../components/foooter";
import Read from "../components/towdes";
import NavBar from "../components/nav";
import RealFoot from "../components/foot";

import "../cssfolder/homepage.css";


function HomePage() {
  const [isCardExpanded, setCardExpanded] = useState(0);
  const [content,Change]=useState([]);
  const [two,changetwo]=useState(true);
  const [twoPro,changePro]=useState(false);

  // const handleClick = (event) => {
  //   // Handle the click to toggle the visibility of the expanded card
  //   if(isCardExpanded===0){
  //     setCardExpanded(1);
  //     }
  //     else{
  //       setCardExpanded(0);
  //     }
  //   if(event){
  //     Change(()=>Des[event-1].describe);
  //   }
  // };

  function handleClick0(event){
    changetwo(true);
    if(isCardExpanded===0){
      setCardExpanded(1);
      }
      else{
        setCardExpanded(0);
      }
    if(event){
      Change(()=>Des[event-1].describe);
    }
  }

  function handleClick1(event){
    if(isCardExpanded===1){
      setCardExpanded(2);
      changetwo(true);
      }
      else{
        setCardExpanded(1);
        changetwo(false);
      }
    changePro(!twoPro);
    if(event){
      Change(()=>Read[event-1].descibe);
    }
  }

  function handleClick2(event){
    if(isCardExpanded===0){
      setCardExpanded(1);
      }
      else{
        setCardExpanded(0);
      }
    changetwo(false);
  }



  return (
    <div className="page">
      {/* <div className="container px-4 py-5 color" style={{color:"#404040"}}>
        <h2>Info</h2>
        <h3>
          Date: 2nd March & 3rd March
        </h3>
        <h3>
          Prize: Presentation will recieve one month paid internship, also they will get free mentorship dor their career.
        </h3>
      </div> */}
      
      <div className="body">
      <NavBar />
        <div className="container-rot">
          
          <Header></Header>

          <div className="bb">
            <div className="about">
              <h2>About MatRS-2024</h2>
              <p style={{fontSize:"large"}}>MatRS (Materials Research Symposium, 2024) is a dedicated student symposium organized by the department of Metallurgical and Materials Engineering at Indian Institute of Technology Jodhpur (IITJ). The symposium provides a unique opportunity for students to present their research, broadening their expertise and preparing them for careers in science and nontechnical fields. It is an excellent forum for students to network and make professional contacts and opportunities to build their career under mentorship of the departments’ faculties.  MatRS is an open platform for UG and PG students only to nurture their thoughts and showcase their research in various non-traditional ways. MatRS focuses on structural, functional, computational materials and process metallurgy.</p>
            </div>
            <div className="key">
              <h2>Key heighlights</h2>
              <ul>
                <li>You can get an exposure of research on Metallurgical and Materials Engineering.</li>
                <li>You can see the tools used to perform Metallurgical and Materials Engineering research through an interactive lab visit. </li>
                <li>You will get an opportunity to see the demonstration with the lab instructors.</li>
                <li>Chance to win the paid internship</li>
                <li>Dedicated Mentors for your career</li>
                <li>MatRS competition winner certificate</li>
              </ul>
        </div>
        </div>




          <div className="container px-4 py-5 color" id="custom-cards">
            <h2 className="pb-2" style={{color:"#404040",textAlign:"center",fontSize:"400%"}}>Events</h2>

            <div className={`expanded-card ${isCardExpanded===1 ? 'visible' : ''}`}>
              
              {two? 
                <div className="row row-cols-1 row-cols-lg-1 align-items-stretch g-2 py-5 cust"><div className="col red">
                  <div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg" style={{backgroundImage:"url()",backgroundRepeat:"no-repeat",backgroundColor:"#FFFC9B"}}>
                    <button onClick={()=>handleClick0(0)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg></button>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                      <h3 className="pt-5 pb-5 mt-0 mb-4 display-6 lh-1 fw-bold text">{content.map((res)=><p>{res}</p>)}</h3>
                    </div>
                  </div>
                </div></div> : 
                <div className="row row-cols-1 row-cols-lg-1 align-items-stretch g-2 py-5 cust">
                <div className="col red">
                  <div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg" style={{backgroundImage:"url()",backgroundRepeat:"no-repeat",backgroundColor:"#FFFC9B"}}>
                    <button onClick={()=>handleClick0(0)} style={{height:"7vh",marginBottom:"-5%"}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg></button>
                    <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5" style={{margin:"0% 5% 0% 5%"}}>
                      <CardEl val="1" des="Science-in-3 minutes" handle={handleClick1}></CardEl>
                      <CardEl val="2" des="Quiz Competition" handle={handleClick1}></CardEl>
                      <CardEl val="3" des="Visualize your science" handle={handleClick1}></CardEl>
                      <CardEl val="4" des="Microscopic image Competition" handle={handleClick1}></CardEl>
                    </div>
                  </div>
                </div></div>}
                
            </div>

            <div className={`expanded-card ${isCardExpanded===2 ? 'visible' : ''}`}>
            <div className="row row-cols-1 row-cols-lg-1 align-items-stretch g-2 py-5 cust"><div className="col red">
                  <div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg" style={{backgroundImage:"url()",backgroundRepeat:"no-repeat",backgroundColor:"#FFFC9B"}}>
                    <button onClick={()=>handleClick1(0)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg></button>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                      <h3 className="pt-5 pb-5 mt-0 mb-4 display-6 lh-1 fw-bold text">{content.map((res)=><p>{res}</p>)}</h3>
                    </div>
                  </div>
                </div></div>
                </div>


            <div className={`expanded-card ${isCardExpanded===0 ? 'visible' : ''}`}>
              <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">


                <CardEl val="1" des="Lab-visit & Demonstration Session" handle={handleClick0}></CardEl>
                <CardEl val="2" des="Research Cookies Competition" handle={handleClick2}></CardEl>
                <CardEl val="3" des="UG and PG Oral/Poster Presentation" handle={handleClick0}></CardEl>

              </div>
            </div>
          </div>
        </div>

      <Foot></Foot>

      <div className="fire" style={{marginBottom:"30px"}}>
            <h2>About The Departement</h2>
            <p>The Department of Metallurgical and Materials Engineering at IIT Jodhpur was established in 2017, and the Department is committed to high-quality education and research in the broad area of Materials Engineering. The Department continuously strives for excellence in teaching and research through innovative pedagogy and curriculum, by undertaking interdisciplinary projects, and through active collaborations with industries, R&D labs, and academia.</p>
        </div>
      </div>

      {/* <div className="last">
      <div class="social-links d-none d-md-flex">
        <a href="https://twitter.com/DeptIit" class="twitter" style={{color: "#CCCCCC", padding: "4px 12px", display: "inline-block", lineHeight: "1px", transition:" 0.3s"}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg></a><span className="slash">/</span>
        <a href="https://www.facebook.com/MTIITJofficial" class="facebook" style={{color: "#CCCCCC", padding: "4px 12px", display: "inline-block", lineHeight: "1px", transition: "0.3s"}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg></a><span className="slash">/</span> */}
        {/* <a href="#" class="instagram" style={{color: "#CCCCCC", padding:" 4px 12px", display: "inline-block", lineHeight: "1px", transition: "0.3s"}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></a><span className="slash">/</span> */}
        {/* <a href="https://www.linkedin.com/in/mme-iit-jodhpur-935703295/" class="linkedin" style={{color: "#CCCCCC", padding: "4px 12px", display: "inline-block", lineHeight: "1px", transition: "0.3s"}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg></a>
      </div> */}
      <RealFoot />

      
    </div>
  );
}

export default HomePage;
