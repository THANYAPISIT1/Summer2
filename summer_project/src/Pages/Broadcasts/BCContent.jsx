import { useState } from "react";
import Sidebar from "../../Components/Layouts/Sidebar";
import TopNav from "../../Components/Layouts/TopNav";
import BroadcastNameModal from "../../Components/BCList/BroadcastNameModal";
import { Link } from "react-router-dom";
import { IoPencil } from "react-icons/io5";


const BCContent = () =>{

    const [broadcastName, setBroadcastName] = useState("Name of Broadcast");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleChangeBroadcastName = (newName) => {
        setBroadcastName(newName);
        setIsModalOpen(false);
    };

    return (
        <div>
            <Sidebar />
            <TopNav />
            <div className=" mt-16">
            <section className="ml-64 max-w-full">
                    <header className="flex justify-between items-center py-8 px-6 border-b-2">
                        <div className="flex items-center cursor-pointer" onClick={handleOpenModal}>
                            <span className="text-base font-medium">{broadcastName}</span>
                            <IoPencil className='w-6 h-6 ml-2' />
                        </div>
                        {/* stepper */}
                        <div className="flex items-center">
                            <ol className="items-center w-full space-y-2 sm:flex sm:space-x-4 sm:space-y-0 rtl:space-x-reverse mr-4">
                                <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-1.5 rtl:space-x-reverse">
                                    <span className="flex items-center justify-center w-6 h-6 border border-gray-500 rounded-full shrink-0 dark:border-gray-400 text-sm">
                                        1
                                    </span>
                                    <span>
                                        <h3 className="font-medium leading-tight text-sm">Recipients</h3>
                                    </span>
                                </li>
                                <li className="flex items-center text-blue-600 dark:text-blue-500 space-x-1.5 rtl:space-x-reverse">
                                    <span className="flex items-center justify-center w-6 h-6 border border-blue-600 rounded-full shrink-0 dark:border-blue-500 text-sm">
                                        2
                                    </span>
                                    <span>
                                        <h3 className="font-medium leading-tight text-sm">Content</h3>
                                    </span>
                                </li>
                                <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-1.5 rtl:space-x-reverse">
                                    <span className="flex items-center justify-center w-6 h-6 border border-gray-500 rounded-full shrink-0 dark:border-gray-400 text-sm">
                                        3
                                    </span>
                                    <span>
                                        <h3 className="font-medium leading-tight text-sm">Review</h3>
                                    </span>
                                </li>
                            </ol>

                            {/* ---------------------------------- */}
                            <div className="inline-flex">
                                <Link to='/broadcast/recipients'>
                                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded-l text-sm">
                                        Prev
                                    </button>
                                </Link>
                                <Link to='/broadcast/review'>
                                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded-r text-sm">
                                        Next
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </header>
                    <hr />
                <div className="p-6">
                <h1>Let’s create your template</h1>
                </div>
                <div>
                <div className="border-2 text-black flex flex-row">
                    <div className="basis-5/6 pl-8 p-2 ">Your template</div>
                    <div className="flex content-center mt-2 ">
                    <div className="">
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-2 mr-10">
                        <Link to="/broadcast/content/create">Create new template</Link>
                        </button>
                        <div></div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
            <BroadcastNameModal
                broadcastName={broadcastName}
                isModalOpen={isModalOpen}
                handleCloseModal={handleCloseModal}
                handleChangeBroadcastName={handleChangeBroadcastName}
            />
        </div>

        
    );
};

export default BCContent;