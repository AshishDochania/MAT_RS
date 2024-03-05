import { Fragment } from "react";
import RealFoot from "../components/foot";
import BigNav from "../components/othernav";
// import SpeakersCC from "../components/speakerCard";
import "../cssfolder/timeline.css"

function Timeline(){
    const Circle=()=>{
        return <div className="circle">

        </div>
    }
    const Piller=()=>{
        return <div className="piller">

        </div>
    }
    const Timecard=({heading,time})=>{
        return<div className="timecard">
            <div style={{color:"#404040",fontSize:"large"}}>
                {heading}
            </div>
            <div style={{color:"GrayText"}}>
                {time}
            </div>
        </div>
    }
    const Time=({events})=>{
        return <div style={{display:"flex",flexDirection:"column",marginTop:"1rem",marginBottom:"1rem",width:"100%",gap:"0.75rem"}}> 
            <Circle />
            {events.map((event,key)=>{
                return <Fragment key={key}>
                    <div className="timespace">
                    {event.dir==="left" ? (
                        <Timecard heading={event.heading} time={event.time}></Timecard>
                    ):(
                        <div style={{margin:"0",padding:"0"}}></div>
                    )}
                    <Piller />
                    {event.dir==="right" ? (
                        <Timecard heading={event.heading} time={event.time}></Timecard>
                    ):(
                        <div></div>
                    )}

                    </div>
                    {key <(events.length-1) && <Circle />}
                </Fragment>
            })}
            <Circle />
        </div>
    }

    const events=[
        {key:1,heading:"Inauguration of symposium",time:"9:30 AM",dir:"left"},
        {key:2,heading:"Invited Speakers ",time:"9:30 AM - 10:30 AM",dir:"right"},
        {key:11,heading:"Tea Break",time:"10:30 AM - 11 AM",dir:"left"},
        {key:3,heading:"Research Cookies Competition ",time:"11:00 AM - 12:30PM",dir:"right"},
        {key:4,heading:"Science-in-3 minutes",time:"11:00 AM",dir:"left"},
        {key:5,heading:"Quiz Competition on Materials Science",time:"12:00 PM",dir:"right"},
        {key:6,heading:"Visualize your science ",time:"12:30 PM",dir:"left"},
        {key:7,heading:"Microscopic image Competition ",time:"12:30 PM",dir:"right"},
        {key:8,heading:"Lunch Break ",time:"12:30 PM - 2:00 PM",dir:"left"},
        {key:9,heading:"IITJ & Department’s overview/facilities",time:"2:00 PM",dir:"right"},
        {key:10,heading:"Lab-visit and Demonstration Session ",time:"2:15 PM",dir:"left"}

    ]
    const events1=[
        {key:1,heading:"UG and PG Oral/Poster Presentation ",time:"10 AM - 1 PM",dir:"right"}
        // {key:2,heading:"Closing of the Symposium",time:"1:00 AM",dir:"left"}
    ]


    return (
        <div className="page">
        <BigNav topic="Program Details" />
                <div className="container-rot base-time " style={{textAlign:"center"}}>
                    {/* <div className="soon">
                        <p>Will be updated soon !!</p>
                    </div> */}
                    <h2 style={{}}>16th March</h2>
                    <Time events={events}/>
                    <h2 style={{}}>17th March</h2>
                    <Time events={events1}/>
                </div>
                <RealFoot />
        </div>
    );
}
export default Timeline;