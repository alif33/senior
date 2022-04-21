import { AiTwotoneSound} from "react-icons/ai";
import {MdArrowForwardIos} from "react-icons/md";
const InputSearch = () => {
    return (
        <div className="inputSearch">
            <AiTwotoneSound/>
            <input type="text" placeholder=" dummy text of the" />
            <MdArrowForwardIos/>
        </div>
    );
};

export default InputSearch;