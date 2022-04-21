import Navbar from "../components/Navbar";
import ReviewCard from "../components/ReviewCard";

const review = () => {
  return (
    <div>
      <Navbar />
      <h1 className="review-title">Lmj</h1>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
     <div className="container">
     <button className="normal">Ipsum is simply</button>
      <button className="main-btn red-btn">Ipsum is simply</button>
     </div>
    </div>
  );
};

export default review;
