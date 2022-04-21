import { GrSearch } from "react-icons/gr";
import Navbar from "../components/Navbar";

const search_another = () => {
  return (
    <div className="announcement">
      <Navbar />
      <div className="announcement-search">
        <h3>announcement</h3>
        <div className="search-form">
          <input type="text" placeholder="announcement search" />
          <span>
            <GrSearch />
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
            <p>Lorem Ipsum is simply dummy</p>
          </li>
          <li>
            <div>
              <span>20</span>
              <small>2022.03</small>
            </div>
            <p>Lorem Ipsum is simply dummy</p>
          </li>
          <li>
            <div>
              <span>20</span>
              <small>2022.03</small>
            </div>
            <p>Lorem Ipsum is simply dummy</p>
          </li>
          <li>
            <div>
              <span>20</span>
              <small>2022.03</small>
            </div>
            <p>Lorem Ipsum is simply dummy</p>
          </li>
          <button>Ipsum is simply</button>
          <button className="main-btn red-btn">Ipsum is simply</button>
        </ul>
      </div>
    </div>
  );
};

export default search_another;
