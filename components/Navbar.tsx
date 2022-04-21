import { AiOutlineMenu } from "react-icons/ai";
import { RiArrowLeftSLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand-icon">
        <RiArrowLeftSLine />
        <a href="#">
          Yolod <span>active</span> senior
        </a>
      </div>
      <div className="menu-icon">
        <p>menu</p>
        <span>
          <AiOutlineMenu />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
