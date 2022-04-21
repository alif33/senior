import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { BsBagPlus } from "react-icons/bs";

const BottomButton = () => {
    return (
        <div className="bottomButton">
            <ul>
                <li className="active">
                    <span><MdOutlineDashboard/></span>
                    <p>Menu</p>
                </li>
                <li>
                    <span><AiOutlineHome/></span>
                    <p>Home</p>
                </li>
                <li>
                    <span><BsBagPlus /></span>
                    <p>Add</p>
                </li>
            </ul>
        </div>
    );
};

export default BottomButton;