import TopNav from "../../Components/Layouts/TopNav";
import Sidebar from "../../Components/Layouts/Sidebar";
import { RiBroadcastLine } from "react-icons/ri";
import { useState } from "react";

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

return (
        <div>
            <TopNav/>
            <Sidebar />
            <div className="mt-16 ">
                <section className="ml-64 max-w-full">
                    <header className="flex justify-between items-center py-8 px-6 border-b-2">
                        <div className="flex items-center cursor-pointer" onClick={handleOpenModal}>
                            <RiBroadcastLine className='w-8 h-8 mr-2' />
                            <span className="text-lg font-bold">{broadcastName}</span>
                        </div>
                        {/* stepper */}
                        <div className="flex items-center">
                            
                            <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse mr-4">
                                <li className="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 rtl:space-x-reverse">
                                    <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                                        1
                                    </span>
                                    <span>
                                        <h3 className="font-medium leading-tight">Recipients</h3>
                                    </span>
                                </li>
                                <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
                                    <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                                        2
                                    </span>
                                    <span>
                                        <h3 className="font-medium leading-tight">Content</h3>
                                    </span>
                                </li>
                                <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
                                    <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                                        3
                                    </span>
                                    <span>
                                        <h3 className="font-medium leading-tight">Review</h3>
                                    </span>
                                </li>
                            </ol>

                            {/* ---------------------------------- */}
                            <div className="inline-flex">
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </div>
                        </div>
                    </header>
                    <hr />
                    {/* Content */}
                    <div className="mx-4 my-4">
                        <div className="container mx-auto p-4 border border-gray-300 rounded-md">
                            <h2>Who should receive this newsletter?</h2>
                            <div className="grid grid-cols-2 gap-2 my-4 items-center">
                                <button className="border p-2">People matching conditions</button>
                                <button className="border p-2 hover:text-blue-600 hover:border-blue-600">Every customer</button>
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