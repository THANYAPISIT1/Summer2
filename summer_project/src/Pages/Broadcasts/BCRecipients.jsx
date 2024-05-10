import TopNav from "../../Components/Layouts/TopNav";
import Sidebar from "../../Components/Layouts/Sidebar";
import React ,{ useState } from "react";
import { IoPencil } from "react-icons/io5";
import BroadcastNameModal from "../../Components/BCList/BroadcastNameModal";
import { Link } from "react-router-dom";
import {Popover, PopoverTrigger, Button} from "@nextui-org/react";

const BCRecipients = () => {

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

    const [isOpen, setIsOpen] = React.useState(false);

    

return (
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
                                <li className="flex items-center text-blue-600 dark:text-blue-500 space-x-1.5 rtl:space-x-reverse">
                                    <span className="flex items-center justify-center w-6 h-6 border border-blue-600 rounded-full shrink-0 dark:border-blue-500 text-sm">
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
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded-l text-sm cursor-not-allowed">
                                    Prev
                                </button>
                                <Link to='/broadcast/content'>
                                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded-r text-sm">
                                        Next
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </header>
                    <hr />
                    {/* Content */}
                    <div className="mx-4 my-4">
                        <div className="container mx-auto p-4 border border-gray-300 rounded-md">
                            <h1 className="font-medium">Who should receive this newsletter?</h1>
                            <div className="grid grid-cols-2 gap-2 my-4 items-center">
                                <Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
                                    <PopoverTrigger>
                                        <Button className="border p-2 hover:text-[#2C6F84] hover:border-[#2C6F84] font-medium">
                                            People matching conditions
                                        </Button>
                                    </PopoverTrigger>
                                </Popover>
                                <Popover>
                                    <PopoverTrigger>
                                        <Button className="border p-2 hover:text-[#2C6F84] hover:border-[#2C6F84] font-medium">
                                            Every customer
                                        </Button>
                                    </PopoverTrigger>
                                </Popover>
                            </div>
                            {/* Show function */}
                            <div id="MatchCon" style={{ display: isOpen ? 'block' : 'none' }}>
                                <p className="text-xs italic">Use conditions to target the people who should receive this newsletter</p>
                                <div className="flex-inline my-2">
                                    <button className="border-2 font-medium rounded-md bg-gray-200 hover:bg-gray-400 hover:text-white px-3 py-2 mx-3 my-2 text-sm">Send by Email</button>
                                    <button className="border-2 font-medium rounded-md bg-gray-200 hover:bg-gray-400 hover:text-white px-3 py-2 mx-3 my-2 text-sm">Send by level</button>
                                </div>
                                <div>
                                    <input type="email" name="" id="" placeholder="Customer Email" className="border border-gray-300 rounded-md p-2 my-3 w-1/4" />
                                </div>
                            </div>

                            <div className="mt-4">
                                <h1 className="font-medium">
                                    Conditions blacklist
                                </h1>
                                <input type="text" name="" id="" placeholder="Add customer name" className="border border-gray-300 rounded-md p-2 my-3 w-1/4" />
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

export default BCRecipients;