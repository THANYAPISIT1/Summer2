import Sidebar from '../../Components/Layouts/Sidebar';
import TopNav from '../../Components/Layouts/TopNav';
import { FaFileAlt } from "react-icons/fa";
import Filter from '../../Components/BCList/Filter';
import Createbtn from '../../Components/BCList/Createbtn';
import { Link } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";




const Broadcast = () => {

    return (
        <div>
            <TopNav/>
            <Sidebar/>  
            <div className='mt-16'>
                <section className="ml-64">
                    <div className='flex justify-between'>
                        <div className="text-xl p-8 font-bold ">BroadCast</div>
                        <Link to='/broadcast/recipients' className='mt-4'>
                            <Createbtn className='mr-4 border mt-8 h-10 items-center w-40 p-2 rounded-md text-blue-600 hover:bg-blue-500 hover:text-white' />
                        </Link>
                    </div>
                    <hr />
                    <Filter />
                    <hr />
                    {/* content */}

                    <div className="mx-4 my-4">
                        <div className="flex justify-between mx-auto p-4 border border-gray-300 rounded-md">
                            <div className='flex'>
                                <FaFileAlt className="h-8 my-3 ml-2 mr-4"/>
                                <div>
                                    <h2 className="font-bold text-violet-700">TestBoard 1</h2>
                                    <p>
                                        letter has sended <br />
                                        Create by 3/5/2024
                                    </p>
                                </div>
                            </div>
                            <div>
                                <span className='bg-gray-200 py-2 px-3 rounded-lg text-xs'>Draft</span>
                            </div>
                            <div>
                                <button className="rounded-md h-10 text-sm p-2 bg-teal-500 hover:bg-teal-700 text-white items-center">
                                    Massage has been sent 
                                </button>
                                <button className="rounded-md h-10 text-sm p-2 border-2 mx-2 items-center">
                                    <BsThreeDots />
                                </button>
                            </div>

                        </div>
                    </div>
                    {/* ---------------------- */}
                </section>
            </div>
        </div>

    );
};

export default Broadcast;
