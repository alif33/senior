import { NextPage } from "next";
import { GoStar } from "react-icons/go";
import { MdArrowForwardIos } from "react-icons/md";

interface allReviews {
  review: {
    id: number;
    name: string;
    img: string;
    reviews: number;
    date: string;
    description: string;
  };
}

const PostReviewCard: NextPage<allReviews> = ({ review }) => {
  const { name, img, reviews, date, description } = review;
  return (
    <div className="postReviewCard">
      <div className="review-header">
        <img src={img} alt="" />
        <div className="name-review">
          <h5>{name}</h5>
          <div className="star ">
            <GoStar className="view" />
            <GoStar className="view" />
            <GoStar className="view" />
            <GoStar className="view" />
            <GoStar className="view" />
            <span>{date}</span>
          </div>
        </div>
        <span>
          <MdArrowForwardIos />
        </span>
      </div>
      <div className="review-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PostReviewCard;
