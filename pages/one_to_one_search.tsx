import Navbar from "../components/Navbar";

const one_to_one_search = () => {
  return (
    <div>
      <Navbar />
      <div className="search-title container">
        <h1>문의 제목영역입니다.</h1>
        <p>2022.03.23</p>
      </div>
      <div className="description">
        <p className="container">
        문의내용입력란입니다. 악이며, 꽃 우리는 있는가?
아 봄바람이다. 따뜻한 과실이 속에서 인생의 있는가 있는 
곧 때에, 사막이다. 사는가 역사를 끝까지 뛰노는 피에
길을하였으며, 심장은 사막이다. 대고, 살았으며 너의 되
는 인생에 사막이다. 그러므로 곳으로 품고 눈에 살았으
며 가치를 동력은 스며들어 피다. 
        </p>
      </div>
      <div className="container">
        <div className="description-card">
          <div className="heading">
            <h2>관리자</h2>
            <span>2021.03.23</span>
          </div>
          <p>
          안녕하세요 고객님 문의에 대한 답변드립니다. 답변 입
력란 입니다. 더욱 친절한 서비스로 보답하겠습니다.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row my-4">
          <div className="col-6">
            <button>이전 문의 보기</button>
          </div>
          <div className="col-6">
            <button>다음 문의 보기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default one_to_one_search;
