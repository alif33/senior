import { GrSearch } from "react-icons/gr";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

const health_bio_page = () => {
  return (
    <div className="package">
      <Navbar />
      <div className="container">
        <h1>Package</h1>
        <div className="search-box">
          <div className="search-form">
            <input type="text" placeholder="package search" />
            <span>
              <GrSearch />
            </span>
          </div>
          <ul>
            <li className="active">room</li>
            <li>room</li>
            <li>room</li>
          </ul>
        </div>
      </div>
      <div className="travel-post">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default health_bio_page;
