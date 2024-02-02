export default function BigNav(props){
    return <>
        <div id="navbar" className="navbar" style={{backgroundColor:"rgb(255, 174, 0)"}}>
    <div className="navbar-left">
      <a href='https://mme.iitj.ac.in/index'><img src="MME logo.png" alt="Logo" /></a>
      <span>MatRS-2024</span>
    </div>
    <div className="navbar-right">
        <a href="/home">Home</a>
        <a href="/registration">Registration</a>
        <a href="/speakers">Invited Speakers</a>
        <a href="/map">How to Reach</a>
        <a href="/accommodation">Accommodation</a>
        <a href="/contact">Contact Us</a>
    </div>
</div>
<div className="navdrop" >
    <div className="br"></div>
    <section>{props.topic}</section>
    <div className="br"></div>
    <p style={{paddingBottom:"20px"}}></p>
</div>
    </>
}