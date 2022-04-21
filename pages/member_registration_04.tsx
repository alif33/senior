import Navbar from "../components/Navbar";
import {CgCheck} from "react-icons/cg";

const member_registration_04 = () => {
  return (
    <div className="member_registration_01">
      <Navbar />
      <div className="container">
        <h1>Membership</h1>
      </div>
      <div className="navigation-line">
        <span className="done"></span>
        <span className="done"></span>
        <div className="nav-option">
          <span>04</span>
          <p>2nd page</p>
        </div>
      </div>

      <div className="member-reg-done">
          <div className="icon">
              <CgCheck/>
          </div>
          <h1>Lorem Ipsum is</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
      </div>

      <button className="main-btn trans-btn p-bottom">Login</button>
    </div>
  );
};

export default member_registration_04;
