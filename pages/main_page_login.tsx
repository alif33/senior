import Header2 from "../components/Header2";
import Main_page_menu from "../components/Main_page_menu";
import Navbar from "../components/Navbar";

const MainPageAfterLogin = () => {
    return (
        <div className="mian-page">
        <Navbar />
        <Header2 />
        <Main_page_menu />
      </div>
    );
};

export default MainPageAfterLogin;