import { NextPage} from "next";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { BsBagPlus } from "react-icons/bs";

interface  propValue{
    status: string
}

const BottomButton: NextPage<propValue> = ({status}) => {
    return (
        <div className="bottomButton">
            <ul>
                <li className={status === 'menu' ? "active" : "okay"}>
                    <span><img src="img/drawable/icon_all.svg" alt="" /></span>
                    <p>전체</p>
                </li>
                <li className={status === 'home' ? "active" : "okay"}>
                    <span><img src="img/drawable/icon_town.svg" alt="" /></span>
                    <p>실버타운</p>
                </li>
                <li className={status === 'add' ? "active" : "okay"}>
                    <span><img src="img/drawable/icon_hospital.svg" alt="" /></span>
                    <p>병원</p>
                </li>
            </ul>
        </div>
    );
};

export default BottomButton;