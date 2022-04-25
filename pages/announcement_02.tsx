import Navbar from "../components/Navbar";

const announcement_02 = () => {
  return (
    <div>
      <Navbar />
      <div className="search-title container">
        <h1>공지사항 제목 영역입니다.</h1>
        <p>2022.03.23</p>
      </div>
      <div className="description">
        <p className="container">
          관현악이며, 꽃 우리는 있는가? 인간의 들어 품으며, 붙잡 아 봄바람이다.
          따뜻한 과실이 속에서 인생의 있는가 있는 곧 때에, 사막이다. 사는가
          역사를 끝까지 뛰노는 피에 길을하였으며, 심장은 사막이다. 대고,
          살았으며 너의 되 는 인생에 사막이다. 그러므로 곳으로 품고 눈에 살았으
          며 가치를 동력은 스며들어 피다.
        </p>
      </div>
      <div className="container">
        <div className="row my-4">
          <div className="col-6">
            <button>이전 공지 보기</button>
          </div>
          <div className="col-6">
            <button>다음 공지 보기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default announcement_02;
