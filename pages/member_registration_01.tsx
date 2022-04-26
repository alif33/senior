import Navbar from "../components/Navbar";

const member_registration_01 = () => {
  return (
    <div className="member_registration_01">
      <Navbar />
      <div className="container">
        <h1>회원가입</h1>
      </div>
      <div className="navigation-line">
        <div className="nav-option">
          <span>01</span>
          <p>약관동의</p>
        </div>
        <span></span>
        <span></span>
      </div>
      <div className="container">
        <div className="registration-selector">
          <select>
            <option value="">이용 약관</option>
            <option value="">Ipsum is</option>
            <option value="">Ipsum is</option>
          </select>
          <select>
            <option value="">개인정보 수집 및 동의</option>
            <option value="">Ipsum is</option>
            <option value="">Ipsum is</option>
          </select>
        </div>

        <button className="main-btn red-btn">동의하고 다음단계로</button>
        <button className="main-btn trans-btn p-bottom">로그인 페이지로 이동</button>
      </div>
    </div>
  );
};

export default member_registration_01;
