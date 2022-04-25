import { BiWorld } from "react-icons/bi";

const Brands = () => {
  return (
    <div className="brands">
      <h3>카테고리</h3>
      <div className="brand-items">
        <div className="item">
          <span>
            <img src="img/drawable/icon_01.svg" alt="" />
          </span>
          <p>실버 여행</p>
        </div>
        <div className="item">
          <span>
            <img src="img/drawable/icon_02.svg" alt="" />
          </span>
          <p>건강 BIO</p>
        </div>
        <div className="item">
          <span>
            <img src="img/drawable/icon_03.svg" alt="" />
          </span>
          <p>실버정보</p>
        </div>
        <div className="item">
          <span>
            <img src="img/drawable/icon_04.svg" alt="" />
          </span>
          <p>실버 시설</p>
        </div>
        <div className="item">
          <span>
            <img src="img/drawable/icon_05.svg" alt="" />
          </span>
          <p>아름다운 준비</p>
        </div>
        <div className="item">
          <span>
            <img src="img/drawable/icon_06.svg" alt="" />
          </span>
          <p>마이페이지</p>
        </div>
      </div>
    </div>
  );
};

export default Brands;
