import Navbar from "../components/Navbar";
import PostReviewCard from "../components/PostReviewCard";

const silver_travel_package_details = () => {
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
        <img src="img/drawable-hdpi/img_02.png" alt="" />
        <div className="container">
          <h3>청산도</h3>
          <h1>봄이 아름다운 섬, 청산도</h1>
          <p>
            청산도는 우리나라 최초의 슬로시티로 지정된 고장으로 아 름다운 바다와
            옛 섬문화를 고스란히 간직하고 있다. 영화 서편제와 드라마 봄의 왈츠
            촬영지로 잘 알려져 있다.
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
        <button className="trans-btn">여행 후기작성</button>
      </div>
    </div>
  );
};

export default silver_travel_package_details;
