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
      <h2 className="review-card-title">한마음 내과 병원 추천합니다.</h2>
      <p className="description">
      직원분들도 친절하시고 병원시설도 깔끔하여 아주 만
였습니다. 다음에 또 방문하겠습니다 최고입니...
      </p>
    </div>
  );
};

export default ReviewCard;
