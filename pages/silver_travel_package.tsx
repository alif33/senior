import { GrSearch } from "react-icons/gr";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

const silver_travel_package = () => {
  const data = [
    {
      id: 1,
      img: "./img/package.png",
      title: "Possimus eaque quas, vero",
      description:
        "dolor sit amet consectetur adipisicing elit.  maxime soluta dolorum aperiam laboriosam ",
    },
    {
      id: 2,
      img: "./img/package.png",
      title: "Possimus eaque quas, vero",
      description:
        "dolor sit amet consectetur adipisicing elit.  maxime soluta dolorum aperiam laboriosam ",
    },
  ];
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
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          </div>
    </div>
  );
};

export default silver_travel_package;
