import { useState } from "react";
import Sidebar from "../../Components/Layouts/Sidebar";
import TopNav from "../../Components/Layouts/TopNav";
import BroadcastNameModal from "../../Components/BCList/BroadcastNameModal";
import { IoPencil } from "react-icons/io5";
import BCRecipients from "./Recipient/BCRecipients";
import BCContent from "./Content/BCContent";
import BCReview from "./Review/BCReview";
import Btn from "../../Components/Input_btn/Btn";

const CtrBroadcast = () => {
    const [broadcastName, setBroadcastName] = useState("Name of Broadcast");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [recipientTitle, setRecipientTitle] = useState("Example");
    const [selectedLevel, setSelectedLevel] = useState("");
    const [email, setEmail] = useState("");
    const [blacklist, setBlacklist] = useState("");
    const [tag, setTag] = useState("");
    const [contentName, setContentName] = useState("Example");
    const [selectedTID, setSelectedTID] = useState(null);
    const [selectedTName, setSelectedTName] = useState(null);
    const [sqlDate, setSqlDate] = useState("");
    const [fromName, setFromName] = useState("");
    const [recipientEveryone, setRecipientEveryone] = useState("");

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

    const setSelectedTemplate = ({ TID, TName }) => {
        setSelectedTID(TID);
        setSelectedTName(TName);
    };

    const handleDateChange = (date) => {
        setSqlDate(date);
    };

    const handleFromNameChange = (event) => { // Function to handle changes in fromName input
        setFromName(event.target.value);
    };

    const components = [
        <BCRecipients
          setRecipientTitle={setRecipientTitle}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          email={email}
          setTag={setTag}
          setEmail={setEmail}
          blacklist={blacklist}
          setBlacklist={setBlacklist}
          setRecipientEveryone={setRecipientEveryone}
        />,
        <BCContent 
            setContentName={setContentName} 
            setSelectedTemplate={setSelectedTemplate} 
            email={email}
            tag={tag}
            blacklist={blacklist}
            selectedLevel={selectedLevel}
            broadcastName={broadcastName}
            sqlDate={sqlDate}
            fromName={fromName}
            recipientEveryone={recipientEveryone}
        />,
        <BCReview
            recipientTitle={recipientTitle}
            selectedLevel={selectedLevel}
            email={email}
            contentName={contentName}
            selectedTID={selectedTID}
            selectedTName={selectedTName}
            onDateChange={handleDateChange}
            recipientEveryone={recipientEveryone}
        />,      
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, components.length - 1));
        console.log("Email:", email);
        console.log("Blacklist:", blacklist);
    };
    
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        console.log("Email:", email);
        console.log("Blacklist:", blacklist);
    };


    return (
        <div>
            <Sidebar />
            <TopNav />
            <div className="mt-16 ">
                <section className="ml-64 max-w-full">
                <header className="flex justify-between items-center py-8 px-6 border-b-2">
                    <div className="flex">
                        <div className="flex items-center cursor-pointer" onClick={handleOpenModal}>
                            <span className="text-base font-medium">{broadcastName}</span>
                            <IoPencil className='w-6 h-6 ml-2' />
                        </div>
                        <input value={fromName} onChange={handleFromNameChange} placeholder="From Email:" className="p-1 border mx-2 rounded-md"/>
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
                    <Btn handleNext={handleNext} 
                        handlePrevious={handlePrevious} 
                        currentIndex={currentIndex} 
                        totalSteps={components.length} 
                        selectedTID={selectedTID}
                        email={email}
                        tag={tag}
                        blacklist={blacklist}
                        selectedLevel={selectedLevel}
                        broadcastName={broadcastName}
                        sqlDate={sqlDate}
                        fromName={fromName}
                        recipientEveryone={recipientEveryone}
                    />
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
