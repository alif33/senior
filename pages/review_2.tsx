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
          <h1>리뷰제목 영역입니다.</h1>
          <p className="date">2022.03.23</p>
          <div className="review2-content">
            <img src="./img/drawable-hdpi/img_01.png" alt="img" />

            <p>
              문의내용입력란입니다. 악이며, 꽃 우리는 있는가? 아 봄바람이다.
              따뜻한 과실이 속에서 인생의 있는가 있는 곧 때에, 사막이다. 사는가
              역사를 끝까지 뛰노는 피에 길을하였으며, 심장은 사막이다. 대고,
              살았으며 너의 되 는 인생에 사막이다. 그러므로 곳으로 품고 눈에
              살았으 며 가치를 동력은 스며들어 피다.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-4">
          <div className="col-6">
            <button>이전 후기 보기</button>
          </div>
          <div className="col-6">
            <button><b>다음 후기 보기</b></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default review_2;
