import Navbar from "../components/Navbar";
import { CgCheck } from "react-icons/cg";

const member_registration_04 = () => {
  return (
    <div className="member_registration_01">
      <Navbar />
      <div className="container">
        <h1>회원가입</h1>
      </div>
      <div className="navigation-line">
        <span className="done"></span>
        <span className="done"></span>
        <div className="nav-option">
          <span>04</span>
          <p>가입완료</p>
        </div>
      </div>

      <div className="member-reg-done">
        <div className="icon">
          <img src="img/drawable/icon_check.svg" alt="" />
        </div>
        <h1>가입을 축하합니다</h1>
        <p>로그인 하신 후 다양한 혜택 및 정보를 만나보세요.</p>
      </div>

     <div className="container">
     <button className="main-btn trans-btn ">로그인 페이지로 이동</button>
     </div>
    </div>
  );
};

export default member_registration_04;
