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
              <img src="img/drawable/icon_info.svg" alt="" />
              </span>
              <p>나의 프로필</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div>
              <span>
              <img src="img/drawable/icon_bell.svg" alt="" />
              </span>
              <p>알림 설정</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div>
              <span>
              <img src="img/drawable/icon_q.svg" alt="" />
              </span>
              <p>1:1 문의</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div>
              <span>
              <img src="img/drawable/icon_notice.svg" alt="" />
              </span>
              <p>공지사항</p>
            </div>
          </a>
        </li>
      </ul>
      <div className="container">
          <button>
          로그아웃
          </button>
      </div>
    </div>
  );
};

export default my_page;
