import Navbar from "../components/Navbar";

const sign_up = () => {
    return (
        <div className="sign-up">
            <Navbar/>
            <div className="container">
                <h1>Sign up</h1>
        <button className="main-btn red-btn">Login</button>
        <button className="main-btn yellow-btn">Login</button>
        <button className="main-btn trans-btn">Login</button>
            </div>
        </div>
    );
};

export default sign_up;