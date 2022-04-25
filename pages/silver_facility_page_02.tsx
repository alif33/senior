import { NextPage } from "next";
import BottomButton from "../components/BottomButton";
import Navbar from "../components/Navbar";

const silver_facility_page_02 = () => {
  return (
    <div className="silver_facility_page">
      <Navbar />

      <iframe src="https://my.atlistmaps.com/map/d5144ddd-dd58-4892-9619-cad6f1955964?share=true" allow="geolocation"frameBorder="0" scrolling="no" allowFullScreen  style={{ border: 0, width: "100%", height: "100vh" }}></iframe>
      <div className="bottom-menu">
        <div className="preparation-card">
          <div className="card-header">
            <div className="price">
              <h2>Lorem <span>ipsum</span></h2>
              <h5>Lorem ipsum dolor</h5>
              <p>09:00~18:00 <span>900,000tk</span></p>
            </div>
            <img src="img/card-img.png" alt="" />
          </div>
          <button>buy</button>
        </div>
        <BottomButton status={true} />
      </div>
    </div>
  );
}; 

export default silver_facility_page_02;
