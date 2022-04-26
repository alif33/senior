import Navbar from "../components/Navbar";

const member_registration_03 = () => {
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
        <span>03</span>
        <p>정보입력</p>
      </div>
    </div>
    <div className="container">

      <div className="input-group">
        <label htmlFor="newPassword">아이디</label>
        <input type="password" id="newPassword" placeholder="아이디를 입력해주세요." />
      </div>
      <div className="input-group">
        <label htmlFor="비밀번호">비밀번호</label>
        <input type="비밀번호" id="비밀번호" placeholder="비밀번호를 입력해주세요." />
      </div>
      <div className="input-group">
        <label htmlFor="repassword">비밀번호 재입력</label>
        <input type="password" id="repassword" placeholder="비밀번호를 다시 한번 입력해주세요." />
      </div>
      <div className="input-group">
        <label htmlFor="name">이름</label>
        <input type="text" id="name" placeholder="홍길동" />
      </div>
      <div className="input-group">
        <label htmlFor="phoneNumber">휴대전화번호</label>
        <input type="tel" id="phoneNumber" placeholder="010-1234-5678" />
      </div>
      <div className="input-group">
        <label htmlFor="birth_date">생년월일</label>
        <input type="date" id="birth_date" placeholder="010-1234-5678" />
      </div>

      <button className="main-btn red-btn">정보 입력 완료</button>
    </div>
  </div>
  );
};

export default member_registration_03;
