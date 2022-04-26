import Navbar from "../components/Navbar";
import PostReviewCard from "../components/PostReviewCard";

const silver_information_page_details = () => {
  const reviews = [
    {
      id: 1,
      name: "홍길동",
      img: "./img/drawable-hdpi/img_user.png",
      reviews: 4,
      date: `2022.03.15`,
      description: `오랜만에 40년 지기 친구들과 여행을 기획했는데 
    청산도 여행 적극 추천 합니다.`,
    },
    {
      id: 1,
      name: "김철수",
      img: "./img/drawable-hdpi/img_user_02.png",
      reviews: 4,
      date: `2022.03.15`,
      description: `오랜만에 40년 지기 친구들과 여행을 기획했는데 
    청산도 여행 적극 추천 합니다.`,
    },
  ];
  return (
    <div className="silver_travel_package_details">
      <Navbar />
      <div className="package-details">
        <img src="./img/drawable-hdpi/img_08.png" alt="" />
        <div className="container">
          <h3>건강상식</h3>
          <h1>1일 1식 올바른 방법 알아보기</h1>
          <p>
            최근에 1일 1식에 많은 분들이 관심이 있고 또 1일 1식을 통하여
            다이어트나 건강회복에 도움이 되신 분들이 많아 인기를 끌고있습니다.
          </p>
        </div>
      </div>
      <div className="container">
        <h1>여행정보</h1>
        <ul>
          <li>
            <p>여행일정</p>
            <span>2022.01.01~2022.01.02</span>
          </li>
          <li>
            <p>여행지 주소</p>
            <span>00시 00동</span>
          </li>
          <li>
            <p>여행비용</p>
            <span>성인 기준 200,000원</span>
          </li>
          <li>
            <p>추가정보</p>
            <span>해당 정보 입력</span>
          </li>
        </ul>
      </div>
      <div className="container">
        <h1>여행 일정표</h1>
        <div className="mobile-img">
          <img src="./img/drawable-hdpi/img_detail.png" alt="" />
          <p>이미지 영역</p>
        </div>
        <h1>여행후기</h1>
        <div className="post_review">
          {reviews.map((review) => (
            <PostReviewCard review={review} key={review.id} />
          ))}
        </div>
      </div>
      <div className="container text-right my-4">
        <button className="trans-btn" >건강 BIO 후기작성</button>
      </div>
    </div>
  );
};

export default silver_information_page_details;