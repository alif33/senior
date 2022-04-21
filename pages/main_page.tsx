import Header2 from "../components/Header2";
import Navbar from "../components/Navbar";
import Main_page_menu from "../components/Main_page_menu";

const main_page = () => {
  return (
    <div className="mian-page">
      <Navbar />
      <Header2 />
      <Main_page_menu />
    </div>
  );
};

export default main_page;
