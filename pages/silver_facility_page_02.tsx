import { NextPage } from "next";
import BottomButton from "../components/BottomButton";
import Navbar from "../components/Navbar";

const silver_facility_page_02 = () => {
  return (
    <div className="silver_facility_page">
      <Navbar />

      <iframe
        src="https://my.atlistmaps.com/map/d5144ddd-dd58-4892-9619-cad6f1955964?share=true"
        allow="geolocation"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        style={{ border: 0, width: "100%", height: "100vh" }}
      ></iframe>
      <div className="bottom-menu">
        <div className="preparation-card">
          <div className="card-header">
            <div className="price">
              <h2>
                노블카운티 <span>실버타운</span>
              </h2>
              <h5>서울특별시 영등포구 대림동</h5>
              <p>
                09:00~18:00<span>900,000원~</span>
              </p>
            </div>
            <img src="img/drawable-hdpi/img_card.png" alt="" />
          </div>
          <button>buy</button>
        </div>
        <BottomButton status={"menu"} silver_facility={true} />
      </div>
    </div>
  );
};

export default silver_facility_page_02;
