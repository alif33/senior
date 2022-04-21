import Navbar from "../components/Navbar";

const member_registration_03_01 = () => {
    return (
        <div className="member_registration_01">
        <Navbar />
        <div className="container">
          <h1>Membership</h1>
        </div>
        <div className="navigation-line">
          <span className="done"></span>
          <span className="done"></span>
          <div className="nav-option">
            <span>01</span>
            <p>2nd page</p>
          </div>
        </div>
        <div className="container">
  
          <div className="input-group">
            <label htmlFor="name">name</label>
            <input type="text" id="name" placeholder="enter your name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="enter your name" />
          </div>
          <div className="input-group">
            <label htmlFor="name">name</label>
            <input type="text" id="name" placeholder="enter your name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="enter your name" />
          </div>
          <div className="input-group">
            <label htmlFor="name">name</label>
            <input type="text" id="name" placeholder="enter your name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="enter your name" />
          </div>
  
          <button className="main-btn red-btn">Login</button>
        </div>
      </div>
    );
};

export default member_registration_03_01;