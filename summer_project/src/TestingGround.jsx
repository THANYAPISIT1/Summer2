import {DateRangePicker} from "@nextui-org/react";
import Btn from "./Components/Input_btn/Btn";


const TestingGround = () =>{

    return (
        <div>
            <DateRangePicker 
            label="Stay duration" 
            className="max-w-xs" 
            />
            <Btn/>
        </div>
    );
};

export default TestingGround;