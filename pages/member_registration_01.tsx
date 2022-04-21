import Navbar from "../components/Navbar";

const member_registration_01 = () => {
  return (
    <div className="member_registration_01">
      <Navbar />
      <div className="container">
        <h1>Membership</h1>
      </div>
      <div className="navigation-line">
        <div className="nav-option">
          <span>01</span>
          <p>frist page</p>
        </div>
        <span></span>
        <span></span>
      </div>
      <div className="container">
        <div className="registration-selector">
          <select>
            <option value="">Ipsum is</option>
            <option value="">Ipsum is</option>
            <option value="">Ipsum is</option>
          </select>
          <select>
            <option value="">Ipsum is</option>
            <option value="">Ipsum is</option>
            <option value="">Ipsum is</option>
          </select>
        </div>

        <button className="main-btn red-btn">Login</button>
        <button className="main-btn trans-btn p-bottom">Login</button>
      </div>
    </div>
  );
};

export default member_registration_01;
