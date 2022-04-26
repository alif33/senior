import { NextPage } from "next";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { BsBagPlus } from "react-icons/bs";
import Icon_all from "./svgIcon/icon_all";
import Icon_town from "./svgIcon/icon_town";
import Icon_hospital from "./svgIcon/icon_hospital";
import Icon_facil from "./svgIcon/icon_facil";
import Icon_owner from "./svgIcon/icon_owner";

interface propValue {
  status: string;
  silver_facility: boolean;
}

const BottomButton: NextPage<propValue> = ({ status, silver_facility }) => {
  return (
    <div className="bottomButton">
      <ul>
        <li className={status === "menu" ? "active" : "okay"}>
          <span>
            <Icon_all />
          </span>
          <p>전체</p>
        </li>
        {silver_facility ? (
          <>
            <li className={status === "home" ? "active" : "okay"}>
              <span>
                <Icon_town />
              </span>
              <p>실버타운</p>
            </li>
            <li className={status === "add" ? "active" : "okay"}>
              <span>
                <Icon_hospital />
              </span>
              <p>병원</p>
            </li>
          </>
        ) : (
          <>
            {" "}
            <li className={status === "home" ? "active" : "okay"}>
              <span>
                <Icon_facil />
              </span>
              <p>안치시설</p>
            </li>
            <li className={status === "user" ? "active" : "okay"}>
              <span>
                <Icon_owner />
              </span>
              <p>운영주체</p>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default BottomButton;
