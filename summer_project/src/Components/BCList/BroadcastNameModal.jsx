import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BroadcastNameModal = ({ broadcastName, isModalOpen, handleCloseModal, handleChangeBroadcastName }) => {

    BroadcastNameModal.propTypes = {
        broadcastName: PropTypes.string.isRequired,
        isModalOpen: PropTypes.bool.isRequired,
        handleCloseModal: PropTypes.func.isRequired,
        handleChangeBroadcastName: PropTypes.func.isRequired
    };

    const [localBroadcastName, setLocalBroadcastName] = useState(broadcastName);
    const [modalIsOpen, setModalIsOpen] = useState(isModalOpen);

    useEffect(() => {
        setLocalBroadcastName(broadcastName);
        setModalIsOpen(isModalOpen);
    }, [broadcastName, isModalOpen]);

    return (
        modalIsOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
                <div className="bg-white p-6 rounded-lg">
                    <h2 className="text-lg font-bold mb-4">Rename Broadcast</h2>
                    <input
                        type="text"
                        value={localBroadcastName}
                        onChange={(e) => setLocalBroadcastName(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md w-full"
                    />
                    <div className="mt-4 flex justify-end">
                        <button onClick={handleCloseModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                            Cancel
                        </button>
                        <button onClick={() => { handleChangeBroadcastName(localBroadcastName); handleCloseModal(); }} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};


export default BroadcastNameModal;
