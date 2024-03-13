import Info from "./SpeakerInfo";
export default function SpeakersCC({id,place}){
    var text="col-md-7 order-md-2";
    var photo="col-md-5 order-md-1";

    // if(place==="1"){
    //     text="col-md-7 order-md-1";
    //     photo="col-md-5 order-md-2";
    // }else{
    //     text="col-md-7 order-md-2";
    //     photo="col-md-5 order-md-1";
    // }

    return  <div class="row featurette" style={{marginBottom:"10%"}}>
              <div class={text}>
                <h2 class="featurette-heading fw-normal lh-1">{Info[id].name} <span class="text-body-secondary"></span></h2>
                <p class="lead" style={{marginTop:"2rem"}}>{Info[id].description}</p>
                <p class="lead">{Info[id].des5}</p>
                <p class="lead">{Info[id].des2}</p>
                <p class="lead">{Info[id].des3}</p>
                <p class="lead">{Info[id].des4}</p>
              </div>
              <div class={photo}>
                <img alt="not" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" src={Info[id].photo} preserveAspectRatio="xMidYMid slice" focusable="false"></img>
              </div>
            </div>
}