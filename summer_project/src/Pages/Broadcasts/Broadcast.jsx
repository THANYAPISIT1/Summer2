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
                <section className="ml-64">
                    <div className='flex justify-between'>
                        <div className="text-xl p-8 font-bold">BroadCast</div>
                        <button className='mr-4 border mt-8 h-10 items-center w-40 p-2 rounded-md text-blue-600 hover:bg-blue-500 hover:text-white'>Create BroadCast</button>
                    </div>
                    <hr />
                    <Filter />
                    <hr />
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center w-full my-4 p-3 border-solid border-2 rounded-md border-gray-200 relative">
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
                            <button className="box-border rounded-md h-8 text-sm p-2 bg-teal-500 text-white absolute top-1/2 transform -translate-y-1/2 right-4">
                                Massage has been sent 
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
};

export default Broadcast;
