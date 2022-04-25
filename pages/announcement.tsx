import Navbar from "../components/Navbar";
import { GrSearch } from "react-icons/gr";

const announcement = () => {
  return (
    <div className="announcement">
      <Navbar />
      <div className="announcement-search">
        <h3>공지사항</h3>
        <div className="search-form">
          <input type="text" placeholder="검색어를 입력하세요." />
          <span>
            <img src="img/drawable/search_icon.svg" alt="" />
          </span>
        </div>
      </div>
      <div className="search-content">
        <ul>
          <li>
            <div>
              <span>20</span>
              <small>2022.03</small>
            </div>
            <p>욜드액티브 시니어 앱 출시 공지사 항 입니다.</p>
          </li>
          <li>
            <div>
              <span>20</span>
              <small>2022.03</small>
            </div>
            <p>욜드액티브 시니어 앱 출시 공지사 항 입니다.</p>
          </li>
          <li>
            <div>
              <span>20</span>
              <small>2022.03</small>
            </div>
            <p>욜드액티브 시니어 앱 출시 공지사 항 입니다.</p>
          </li>
          <li>
            <div>
              <span>20</span>
              <small>2022.03</small>
            </div>
            <p>욜드액티브 시니어 앱 출시 공지사 항 입니다.</p>
          </li>
          <li>
            <div>
              <span>20</span>
              <small>2022.03</small>
            </div>
            <p>욜드액티브 시니어 앱 출시 공지사 항 입니다.</p>
          </li>
          <button>공지사항 더보기</button>
        </ul>
      </div>
    </div>
  );
};

export default announcement;
