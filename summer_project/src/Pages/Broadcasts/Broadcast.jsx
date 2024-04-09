import Sidebar from "../../Components/Layouts/Sidebar";
import BroadCastList from "./BroadcastList";

const Broadcast = () =>{
    return(
        <div className="flex ">
            <Sidebar />
            <BroadCastList />
        </div>
    );
};

export default Broadcast;