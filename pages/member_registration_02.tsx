import Navbar from "../components/Navbar";

const member_registration_02 = () => {
  return (
    <div className="member_registration_01">
      <Navbar />
      <div className="container">
        <h1>회원가입</h1>
      </div>
      <div className="navigation-line">
        <span className="done"></span>
        <div className="nav-option">
          <span>01</span>
          <p>본인 인증</p>
        </div>

        <span></span>
      </div>
      <div className="container">
          <div className="input-group">
              <label htmlFor="number">휴대전화 번호</label>
              <input type="tel" id="number"  placeholder="아이디를 입력하세요." />
          </div>

        <button className="main-btn red-btn">휴대전화 본인 인증</button>
        <button className="main-btn trans-btn p-bottom">로그인 페이지로 이동</button>
      </div>
    </div>
  );
};

export default member_registration_02;
