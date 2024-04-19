import Sidebar from '../../Components/Layouts/Sidebar';
import TopNav from '../../Components/Layouts/TopNav';
import { FaFileAlt } from "react-icons/fa";
import Filter from '../../Components/BCList/Filter';


const Broadcast = () => {

    return (
        <div>
            <TopNav/>
            <Sidebar/>  
            <div className='mt-16'>
                <section className="ml-64 ">
                    <div className="text-xl p-8 font-bold">BroadCast</div>
                        <hr />
                        <Filter/>
                        <hr />
                        <container className="flex justify-between w-full my-4 p-3 border-solid border-2 rounded-md border-gray-800">
                            <div className="flex">
                                <FaFileAlt className="h-8 my-3 ml-2 mr-4"/>
                                <div>
                                    <h2 className="font-bold text-violet-700">TestBoard 1</h2>
                                    <p>
                                        letter has sended <br />
                                        Create by 3/5/2024
                                    </p>
                                </div>
                            </div>
                            <div className="box-border rounded-md h-12 p-2 bg-green-500">
                                <h2 className="text-white">Successfully</h2>
                            </div>
                        </container>
                </section>
            </div>
        </div>

    );
};

export default Broadcast;