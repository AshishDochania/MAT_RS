export default function Header(){
    return <>
        <div className="logo-holder">
            <img src="IITJ Logo__Small.jpg" alt="college-logo"></img>
            <img src="MME logo.png" alt="deparmenet-logo"></img>
          </div>
          <div className="header" style={{color:"#404040"}}>
          {/* ,backgroundColor: "#f5a80ecb" */}
            <section style={{padding:"20px"}}><h2>Departement of Metallurgical and Materials Enginnering</h2><h2>Indian Institute of Technology Jodhpur</h2></section>
            <section className="bold" style={{paddingTop:"0px",marginTop:"-10px"}}>MatRS-2024</section>
            <section className="bold">Materials Research Symposium</section>
            <section className="bold">16th & 17th March 2024</section>
          </div>
    </>
}