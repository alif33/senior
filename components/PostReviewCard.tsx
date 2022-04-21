import { GoStar } from "react-icons/go";
import { MdArrowForwardIos } from "react-icons/md";

const PostReviewCard = () => {
  return (
    <div className="postReviewCard">
      <div className="review-header">
        <img src="./img/review-card.jpg" alt="" />
        <div className="name-review">
          <h5>yeaisn</h5>
          <div className="star ">
            <GoStar className="view" />
            <GoStar className="view" />
            <GoStar className="view" />
            <GoStar className="view" />
            <GoStar className="view" />
            <span>2022.01.01</span>
          </div>
        </div>
        <span>
          <MdArrowForwardIos />
        </span>
      </div>
      <div className="review-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
          repellendus
        </p>
      </div>
    </div>
  );
};

export default PostReviewCard;
