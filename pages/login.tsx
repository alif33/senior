import Navbar from "../components/Navbar";

const login = () => {
  return (
    <div className="login">
      <Navbar />
      <div className="login-form">
        <h3>Login</h3>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="enter your email" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Password</label>
          <input type="email" placeholder="enter your Password" />
        </div>
        <button className="main-btn red-btn">Login</button>
        <button className="main-btn yellow-btn">Login</button>
        <button className="main-btn trans-btn">Login</button>
      </div>
      <p>Lorem Ipsum is simply dummy</p>
    </div>
  );
};

export default login;
