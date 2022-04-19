import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand-icon">
        <a href="#">Yolod <span>active</span> senior</a>
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
