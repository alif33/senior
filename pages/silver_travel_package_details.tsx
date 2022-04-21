import Navbar from "../components/Navbar";
import PostReviewCard from "../components/PostReviewCard";

const silver_travel_package_details = () => {
  return (
    <div className="silver_travel_package_details">
      <Navbar />
      <div className="package-details">
        <img src="./img/package.png" alt="" />
        <div className="container">
          <h3>Ipsum</h3>
          <h1>Lorem Ipsum is</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            consequuntur Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
      <div className="container">
        <h1>Lorem Ipsum is</h1>
        <ul>
          <li>
            <p>Date</p>
            <span>2022.01.01~2022.01.02</span>
          </li>
          <li>
            <p>Lorem Ip</p>
            <span>2022.01.01~2022.01.02</span>
          </li>
          <li>
            <p>Date</p>
            <span>2022.01.01~2022.01.02</span>
          </li>
          <li>
            <p>Lorem Ip</p>
            <span>2022.01.01~2022.01.02</span>
          </li>
        </ul>
      </div>
      <div className="container">
        <h1>Lorem Ipsum</h1>
        <div className="mobile-img">
          <img src="./img/mobile.png" alt="" />
        </div>
        <h1>Lorem Ipsum</h1>
        <div className="post_review">
          <PostReviewCard />
          <PostReviewCard />
        </div>
      </div>
      <div className="container text-right my-4">
        <button className="trans-btn">Next one</button>
      </div>
    </div>
  );
};

export default silver_travel_package_details;
