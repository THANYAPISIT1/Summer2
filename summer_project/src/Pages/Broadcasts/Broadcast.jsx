import Sidebar from "../../Components/Layouts/Sidebar";
import TopNav from "../../Components/Layouts/TopNav";

const Broadcast = () =>{
    return(
        <div className="flex ">
            <TopNav className="width-full"/>
            <Sidebar />
        </div>
    );
};

export default Broadcast;