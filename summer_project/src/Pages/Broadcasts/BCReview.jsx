import TopNav from "../../Components/Layouts/TopNav";
import Sidebar from "../../Components/Layouts/Sidebar";
import { useState } from "react";
import { IoPencil } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { IoDocumentSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import BroadcastNameModal from "../../Components/BCList/BroadcastNameModal";
import Btn from "../../Components/Input_btn/Btn";
// import { Link } from "react-router-dom";
// import { Link, Button } from "@nextui-org/react";



const BCReview = () =>{
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

    return(
        <div>
            <TopNav/>
            <Sidebar />
            <div className="mt-16 ">
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
                                <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-1.5 rtl:space-x-reverse">
                                    <span className="flex items-center justify-center w-6 h-6 border border-gray-500 rounded-full shrink-0 dark:border-gray-400 text-sm">
                                        2
                                    </span>
                                    <span>
                                        <h3 className="font-medium leading-tight text-sm">Content</h3>
                                    </span>
                                </li>
                                <li className="flex items-center text-blue-600 dark:text-blue-500 space-x-1.5 rtl:space-x-reverse">
                                    <span className="flex items-center justify-center w-6 h-6 border border-blue-600 rounded-full shrink-0 dark:border-blue-500 text-sm">
                                        3
                                    </span>
                                    <span>
                                        <h3 className="font-medium leading-tight text-sm">Review</h3>
                                    </span>
                                </li>
                            </ol>

                            {/* ---------------------------------- */}

                            <Btn/>
                            {/* <div className="inline-flex">
                                <Link to='/broadcast/content'>
                                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded-l text-sm">
                                        Prev
                                    </button>
                                </Link>
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded-r text-sm cursor-not-allowed">
                                    Next
                                </button>

                            </div> */}
                        </div>
                    </header>
                    <hr />
                    {/* Content */}
                    <div className="mx-4 my-4">
                        <div className="container mx-auto p-4 border border-gray-300 rounded-md">
                            <div>
                                <div className="flex items-center">
                                    <IoPeople size='30px'/>
                                    <h1 className="text-xm font-bold ml-2">Recipients</h1>
                                </div>
                                <div className="flex items-center my-3">
                                    <div className="flex items-center my-4 w-full max-w-auto border p-4 rounded-md">
                                        <h2 className="font-semibold">Select</h2>
                                        <span className="ml-4 bg-gray-300 hover:bg-gray-400 bg-transparent hover: border p-2 rounded-lg underline underline-offset-4">
                                            Get from Recipients
                                        </span>
                                    </div>
                                    {/* <Button
                                        className="ml-4 hover:bg-gray-600 hover:text-white"
                                        href="https://github.com/nextui-org/nextui"
                                        as={Link}
                                        showAnchorIcon
                                        variant="solid"
                                        underline='always'
                                        >
                                        Button Link
                                    </Button> */}
                                </div>
                            </div>
                        <hr />

                        <div className="mt-4">
                            <div className="flex items-center">
                                <IoDocumentSharp size='30px'/>
                                <h1 className="text-xm font-bold ml-2">Content</h1>
                            </div>
                            <p className="text-xs my-4 font-normal">The following email will send to the above recipients:</p>
                            <div className="flex items-center my-4 w-full max-w-auto border p-4 rounded-md">
                                <div className=" flex items-center ml-4 p-2 underline underline-offset-4">
                                    <HiOutlineMail size='30px'/>
                                    <span className="ml-3">
                                        Get from Content
                                    </span>
                                </div>
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

export default BCReview;