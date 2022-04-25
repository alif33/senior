const Header = () => {
  return (
    <div
      className="header"
      style={{ backgroundImage: "url(img/drawable/bg_img.svg)" }}
    >
      <div className="container">
        <div className="left-part">
          <h3>나를 위한 <span>건강정보를</span> 지금 만나보세요</h3>
          <button>자세히 보기</button>
        </div>
        <div className="right-part"></div>
      </div>
    </div>
  );
};

export default Header;
