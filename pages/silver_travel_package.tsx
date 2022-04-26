import { NextPage } from "next";
import { GrSearch } from "react-icons/gr";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

const silver_travel_package: NextPage = () => {
  const allpost = [
    {
      id: 1,
      img: "./img/drawable-hdpi/img_02.png",
      title: "봄이 아름다운 섬, 청산도",
      description: `청산도는 우리나라 최초의 슬로시티로 지정된 고장으로 
          아름다운 바다와 옛 섬문화를 고스란히 간직하고 있...`,
    },
    {
      id: 2,
      img: "./img/drawable-hdpi/img_03.png",
      title: "봄이 아름다운 섬, 청산도",
      description: `청산도는 우리나라 최초의 슬로시티로 지정된 고장으로 
          아름다운 바다와 옛 섬문화를 고스란히 간직하고 있...`,
    },
    {
      id: 3,
      img: "./img/drawable-hdpi/img_04.png",
      title: "봄이 아름다운 섬, 청산도",
      description: `청산도는 우리나라 최초의 슬로시티로 지정된 고장으로 
          아름다운 바다와 옛 섬문화를 고스란히 간직하고 있...`,
    },
  ];
  return (
    <div className="package">
      <Navbar />
      <div className="container">
        <h1>실버여행</h1>
        <div className="search-box">
          <div className="search-form">
            <input type="text" placeholder="검색어를 입력해주세요." />
            <span>
              <GrSearch />
            </span>
          </div>
          <ul>
            <li className="active">전체</li>
            <li>추천 여행지</li>
            <li>여행정보</li>
          </ul>
        </div>
      </div>
      <div className="travel-post">
        {allpost.map((data) => (
          <PostCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default silver_travel_package;
