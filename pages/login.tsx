import Navbar from "../components/Navbar";

const login = () => {
  return (
    <div className="login">
      <Navbar />
      <div className="login-form">
        <h3>로그인</h3>
        <div className="input-group">
          <label htmlFor="id">아이디</label>
          <input type="text" id="id" placeholder="아이디를 입력하세요." />
        </div>
        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" placeholder="비밀번호를 입력하세요." />
        </div>
        <button className="main-btn red-btn">로그인 하기</button>
        <button className="main-btn yellow-btn"> <img src="img/drawable/icon_kakao.svg" alt="" />카카오 로그인 하기</button>
        <button className="main-btn trans-btn">회원가입 하기</button>
      </div>
      <p>아이디/비밀번호 찾기</p>
    </div>
  );
};

export default login;
