import Navbar from "../components/Navbar";

const member_registration_03_01 = () => {
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
            <label htmlFor="id">아이디</label>
            <input type="text" id="id" placeholder="abcd1234" />
          </div>
          <div className="input-group">
            <label htmlFor="name">이름</label>
            <input type="text" id="name" placeholder="홍길동." />
          </div>
          <div className="input-group">
            <label htmlFor="phoneNumber">휴대전화번호</label>
            <input type="tel" id="phoneNumber" placeholder="010-1234-5678" />
          </div>
          <div className="input-group">
            <label htmlFor="birth_date">생년월일</label>
            <input type="date" id="birth_date" placeholder="010-1234-5678" />
          </div>
  
          <button className="main-btn red-btn">정보 확인 완료</button>
        </div>
      </div>
    );
};

export default member_registration_03_01;