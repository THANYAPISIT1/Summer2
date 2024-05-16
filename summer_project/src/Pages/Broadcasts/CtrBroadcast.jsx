import { useState } from "react";
import Sidebar from "../../Components/Layouts/Sidebar";
import TopNav from "../../Components/Layouts/TopNav";
import BroadcastNameModal from "../../Components/BCList/BroadcastNameModal";
import { IoPencil } from "react-icons/io5";
import BCRecipients from "./BCRecipients";
import BCContent from "./BCContent";
import BCReview from "./BCReview";
import Btn from "../../Components/Input_btn/Btn";



const CtrBroadcast = () =>{

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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    };
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
    };


    
    return(
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
                            <Btn handleNext={handleNext} handlePrevious={handlePrevious} currentIndex={currentIndex}/>
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