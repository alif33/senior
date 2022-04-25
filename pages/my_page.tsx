import { FaPencilAlt, FaRegUser, FaUserAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";

const my_page = () => {
  return (
    <div className="my-page">
      <Navbar />
      <div className="container">
        <div className="my-card">
          <div className="my-name">
            <h2>마이페이지</h2>
            <h3><b>홍길동</b>님 환영합니다.</h3>
          </div>
          <div className="my-pic">
          <img src="img/drawable/icon_profile.svg" alt="" />
            <span>
          <img src="img/drawable/edir_icon.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
      <ul className="main-page-menu">
        <li>
          <a href="#">
            <div>
              <span>
                <FaRegUser />
              </span>
              <p>sitamet</p>
            </div>
          </a>
        </li>
      </ul>
      <div className="container">
          <button>
              lorem ipsum
          </button>
      </div>
    </div>
  );
};

export default my_page;
