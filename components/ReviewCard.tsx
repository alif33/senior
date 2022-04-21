import { GoStar } from "react-icons/go";

const ReviewCard = () => {
  return (
    <div className="review-card">
      <div className="review-date">
        <div className="star ">
          <GoStar className="view" />
          <GoStar className="view" />
          <GoStar className="view" />
          <GoStar className="view" />
          <GoStar />
        </div>
        <div className="date">2021.05.04</div>
      </div>
      <h2 className="review-card-title">sit amet</h2>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odit odi
      </p>
    </div>
  );
};

export default ReviewCard;
