import RealFoot from "../components/foot";
import BigNav from "../components/othernav";

function Reach() {
  return (
    <div className="page">
      <BigNav topic="How to Reach" />
      <div className="container-rot base">
        <div className="map_cont">
          <h2>Railway Station</h2>
          <div className="rail">
            <div className="frame">
              <p>Jodhpur Junction</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d114383.60343185769!2d72.98619775093877!3d26.375430016722447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3943df84be1ca079%3A0x2c0e018dbdd1247!2sJodhpur%20junction%2C%20Ratanada%2C%20Thob%2C%20Rajasthan!3m2!1d26.283546599999998!2d73.0225567!4m5!1s0x3941eb503dfe3405%3A0xaf4fefb973fa386d!2sIIT%20Jodhpur%2C%20Service%20Road%2C%20Mandore%2C%20Jheepasani%2C%20Rajasthan!3m2!1d26.4668454!2d73.1147996!5e0!3m2!1sen!2sin!4v1706877597922!5m2!1sen!2sin"
                style={{ border: "0px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="junction"
              ></iframe>
            </div>
            <div className="frame">
              <p>Bhagat ki Kothi</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d228799.69267464313!2d72.90014757480256!3d26.359017307671028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39418d96b07e5ca9%3A0x509d84019a4f6457!2sBhagat%20Ki%20Kothi%20Railway%20Station%2C%20Heavy%20Industrial%20Area%20Phase%20II%2C%20Basni%2C%20Jodhpur%2C%20Rajasthan!3m2!1d26.2508365!2d73.014544!4m5!1s0x3941eb503dfe3405%3A0xaf4fefb973fa386d!2sIIT%20Jodhpur%2C%20Service%20Road%2C%20Mandore%2C%20Jheepasani%2C%20Rajasthan!3m2!1d26.4668454!2d73.1147996!5e0!3m2!1sen!2sin!4v1706877780243!5m2!1sen!2sin"
                style={{ border: "0px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="bhagat ki kothi"
              ></iframe>
            </div>
            {/* <div className="frame">
                            <p>Mandor</p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d114349.90810225939!2d72.99667325216377!3d26.40944740013649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3941931a32bfe3d7%3A0xd7b017566e85fffb!2sMandore%20Railway%20Station%2C%20Mandore%2C%20Jodhpur%2C%20Rajasthan!3m2!1d26.351710399999998!2d73.0427728!4m5!1s0x3941eb503dfe3405%3A0xaf4fefb973fa386d!2sIIT%20Jodhpur%2C%20Service%20Road%2C%20Mandore%2C%20Jheepasani%2C%20Rajasthan!3m2!1d26.4668454!2d73.1147996!5e0!3m2!1sen!2sin!4v1706878029011!5m2!1sen!2sin" width="400" height="300" style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="mandor"></iframe>
                            </div> */}
          </div>
          <h2>Airport</h2>
          <div className="rail">
            <div className="frame">
              <p>Jodhpur Airport</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d228788.99674083447!2d72.93654232560591!3d26.364422229744253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39418c6024cd835f%3A0xa859c32205060b6c!2sJodhpur%20Airport%2C%20Ratanada%2C%20Jodhpur%2C%20Rajasthan!3m2!1d26.264439499999998!2d73.0505398!4m5!1s0x3941eb503dfe3405%3A0xaf4fefb973fa386d!2sIIT%20Jodhpur%2C%20Service%20Road%2C%20Mandore%2C%20Jheepasani%2C%20Rajasthan!3m2!1d26.4668454!2d73.1147996!5e0!3m2!1sen!2sin!4v1706879451108!5m2!1sen!2sin"
                style={{ border: "0px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="airport"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <RealFoot />
    </div>
  );
}
export default Reach;
