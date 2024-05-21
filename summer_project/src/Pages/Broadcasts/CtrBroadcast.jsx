import { useState } from "react";
import Sidebar from "../../Components/Layouts/Sidebar";
import TopNav from "../../Components/Layouts/TopNav";
import BroadcastNameModal from "../../Components/BCList/BroadcastNameModal";
import { IoPencil } from "react-icons/io5";
import BCRecipients from "./BCRecipients";
import BCContent from "./BCContent";
import BCReview from "./BCReview";
import Btn from "../../Components/Input_btn/Btn";

const CtrBroadcast = () => {

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

    const components = [<BCRecipients />, <BCContent />, <BCReview />];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, components.length - 1));
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    return (
        <div>
            <Sidebar />
            <TopNav />
            <div className="mt-16 ">
                <section className="ml-64 max-w-full">
                    <header className="flex justify-between items-center py-8 px-6 border-b-2">
                        <div className="flex items-center cursor-pointer" onClick={handleOpenModal}>
                            <span className="text-base font-medium">{broadcastName}</span>
                            <IoPencil className='w-6 h-6 ml-2' />
                        </div>
                        {/* Stepper */}
                        <div className="flex items-center">
                            <ol className="flex items-center w-full space-x-4">
                                {components.map((_, index) => {
                                    const isActive = index === currentIndex;
                                    return (
                                        <li key={index} className={`flex items-center space-x-1.5 ${isActive ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}>
                                            <span className={`flex items-center justify-center w-6 h-6 border ${isActive ? 'border-blue-600 dark:border-blue-500' : 'border-gray-500 dark:border-gray-400'} rounded-full text-sm`}>
                                                {index + 1}
                                            </span>
                                            <span>
                                                <h3 className="font-medium leading-tight text-sm">{['Recipients', 'Content', 'Review'][index]}</h3>
                                            </span>
                                        </li>
                                    );
                                })}
                            </ol>

                            <Btn handleNext={handleNext} handlePrevious={handlePrevious} currentIndex={currentIndex} />
                        </div>
                    </header>
                    <hr />
                    {components[currentIndex]}
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

export default CtrBroadcast;
