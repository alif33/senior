import Navbar from "../components/Navbar";
import ReviewCard from "../components/ReviewCard";

const review = () => {
  return (
    <div>
      <Navbar />
      <h1 className="review-title">리뷰</h1>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
     <div className="container">
     <button className="normal">후기 더보기</button>
      <button className="main-btn red-btn">후기 작성하기</button>
     </div>
    </div>
  );
};

export default review;
