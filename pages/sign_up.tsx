import Navbar from "../components/Navbar";

const sign_up = () => {
    return (
        <div className="sign-up">
            <Navbar/>
            <div className="container">
                <h1>회원가입</h1>
        <button className="main-btn red-btn">일반 회원가입</button>
        <button className="main-btn yellow-btn"><img src="img/drawable/icon_kakao.svg" alt="" />카카오 회원가입</button>
        <button className="main-btn trans-btn">로그인 페이지로 이동</button>
            </div>
        </div>
    );
};

export default sign_up;