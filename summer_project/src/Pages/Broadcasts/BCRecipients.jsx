import TopNav from "../../Components/Layouts/TopNav";
import Sidebar from "../../Components/Layouts/Sidebar";
import { useState } from "react";
import { IoPencil } from "react-icons/io5";


const BCRecipients = () => {

    const [broadcastName, setBroadcastName] = useState("Name of Broadcast"); // State to store the broadcast name
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal open/close

    // Function to handle opening modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // Function to handle closing modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Function to handle changing broadcast name
    const handleChangeBroadcastName = (newName) => {
        setBroadcastName(newName);
        setIsModalOpen(false); // Close modal after changing the name
    };

    const [showMatchConditions, setShowMatchConditions] = useState(false);

    const toggleMatchConditions = () => {
        setShowMatchConditions(!showMatchConditions);
    };

    const showMatchConditionsOnClick = () => {
        setShowMatchConditions(true);
    };

    

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
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded-l text-sm">
                                    Prev
                                </button>
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded-r text-sm">
                                    Next
                                </button>
                            </div>
                        </div>
                    </header>
                    <hr />
                    {/* Content */}
                    <div className="mx-4 my-4">
                        <div className="container mx-auto p-4 border border-gray-300 rounded-md">
                            <h1 className="font-medium">Who should receive this newsletter?</h1>
                            <div className="grid grid-cols-2 gap-2 my-4 items-center">
                                <button className="border p-2 hover:text-[#2C6F84] hover:border-[#2C6F84] font-medium" onClick={showMatchConditionsOnClick}>
                                    People matching conditions
                                </button>
                                {/* When click Every customer btn i need to hide div MatchCon */}
                                <button className="border p-2 hover:text-[#2C6F84] hover:border-[#2C6F84] font-medium" onClick={toggleMatchConditions}>
                                    Every customer
                                </button>
                            </div>
                            {showMatchConditions && (
                                <div id="MatchCon">
                                    <p className="text-xs italic">Use conditions to target the people who should receive this newsletter</p>
                                    <div className="flex-inline my-2">
                                        <button className="border-2 font-medium rounded-md bg-gray-200 hover:bg-gray-400 hover:text-white px-3 py-2 mx-3 my-2 text-sm">Send by Email</button>
                                        <button className="border-2 font-medium rounded-md bg-gray-200 hover:bg-gray-400 hover:text-white px-3 py-2 mx-3 my-2 text-sm">Send by level</button>
                                    </div>
                                    <div>
                                        <input type="email" name="" id="" placeholder="Customer Email" className="border border-gray-300 rounded-md p-2 my-3 w-1/4" />
                                    </div>
                                </div>
                            )}
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

            {/* Change Name modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-lg font-bold mb-4">Rename Broadcast</h2>
                        <input
                            type="text"
                            value={broadcastName}
                            onChange={(e) => setBroadcastName(e.target.value)}
                            className="border border-gray-300 p-2 rounded-md w-full"
                        />
                        <div className="mt-4 flex justify-end">
                            <button onClick={handleCloseModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                                Cancel
                            </button>
                            <button onClick={() => handleChangeBroadcastName(broadcastName)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );  
};

export default BCRecipients;