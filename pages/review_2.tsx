import Image from "next/image";
import { GoStar } from "react-icons/go";
import Navbar from "../components/Navbar";

const review_2 = () => {
  return (
    <div>
      <Navbar />
      <div className="review-2">
        <div className="container">
          <div className="review">
            <div className="star ">
              <GoStar className="view" />
              <GoStar className="view" />
              <GoStar className="view" />
              <GoStar className="view" />
              <GoStar className="view" />
            </div>
          </div>
          <h1>Lorem Ipsum is</h1>
          <p className="date">2022.03.23</p>
          <div className="review2-content">
            <img src="./img/review-img.png" alt="img" />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, ipsa
              pariatur. Totam labore corporis facere, repudiandae aspernatur vel
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-4">
          <div className="col-6">
            <button>Start</button>
          </div>
          <div className="col-6">
            <button>Start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default review_2;
