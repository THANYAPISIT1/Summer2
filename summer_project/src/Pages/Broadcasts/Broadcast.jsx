import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../Components/Layouts/Sidebar';
import TopNav from '../../Components/Layouts/TopNav';
import { FaFileAlt } from "react-icons/fa";
import Filter from '../../Components/BCList/Filter';
import Createbtn from '../../Components/BCList/Createbtn';
import { Link } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";
import { Pagination } from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";

const Broadcast = () => {
    const [broadcasts, setBroadcasts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [selectedDateRange, setSelectedDateRange] = useState({
        startDate: new Date(2000, 0, 1), // Set start date to January 1, 2000
        endDate: new Date()
    });
    useEffect(() => {
        fetchBroadcasts(currentPage);
    }, [currentPage, selectedTags, selectedStatus, selectedFilter, selectedDateRange]);

    const fetchBroadcasts = async (page) => {
        setLoading(true);
        try {
            const authToken = localStorage.getItem('token');

            const params = {
                page,
            };

            if (selectedStatus) {
                params.status = selectedStatus.value;
            }

            if ( selectedDateRange.startDate && selectedDateRange.endDate) {
                params.daterange = `${selectedDateRange.startDate.toISOString()},${selectedDateRange.endDate.toISOString()}`;
            }

            if (selectedTags.length > 0) {
                params.tag = selectedTags.map(tag => tag.value).join(',');
            }

            if (selectedFilter) {
                params.filter = selectedFilter.value;
            }

            const response = await axios.get('http://localhost:8000/broadcasts', {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                },
                params: params
            });

            const data = response.data;

            // Format BUpdate date before setting the broadcasts state
            const formattedBroadcasts = data.broadcasts.map(broadcast => ({
                ...broadcast,
                BUpdate: formatDate(broadcast.BUpdate)
            }));

            setBroadcasts(formattedBroadcasts);
            setCurrentPage(page);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.log('Error fetching broadcasts:', error);
        } finally {
            setLoading(false);
        }
    };

    // Function to format date to "dd/mm/yyyy hh:mm"
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };
    
    const handlePaginationChange = async (page) => {
        fetchBroadcasts(page);
    };

    const handleStatusChange = (status) => {
        setSelectedStatus(status);
    };

    const handleDateRangeChange = (dateRange) => {
        setSelectedDateRange(dateRange);
    };

    const handleTagChange = (tags) => {
        setSelectedTags(tags);
    };

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    useEffect(() => {
        console.log("Selected Tags:", selectedTags);
        console.log("Selected Status:", selectedStatus);
        console.log("Selected Filter:", selectedFilter);
        console.log("Selected Date Range:", selectedDateRange);
    }, [selectedTags, selectedStatus, selectedFilter, selectedDateRange]);

    return (
        <div className='relative'>
            <TopNav />
            <Sidebar />  
            <div className='mt-16'>
                <section className="ml-64">
                    <header className='flex justify-between static'>
                        <div className="text-xl p-8 font-bold">Broadcast</div>
                        <Link to='/create-broadcast' className='mt-4'>
                            <Createbtn className='mr-4 border mt-8 h-10 items-center w-40 p-2 rounded-md text-blue-600 hover:bg-blue-500 hover:text-white' />
                        </Link>
                    </header>
                    <hr />
                    <Filter onStatusChange={handleStatusChange}
                        onDateRangeChange={handleDateRangeChange}
                        onTagChange={handleTagChange}
                        onFilterChange={handleFilterChange} />
                    <hr />

                    {loading ? (
                        <></>
                    ) : (
                        broadcasts.map(broadcast => (
                            <div key={broadcast.BID} className="mx-4 my-4">
                                <div className="flex justify-between mx-auto p-4 border border-gray-300 rounded-md">
                                    <div className='flex'>
                                        <FaFileAlt className="h-8 my-3 ml-2 mr-4"/>
                                        <div>
                                            <h2 className="font-bold text-violet-700">{broadcast.BName}</h2>
                                            <p>
                                                Tag: {broadcast.BTag}<br />
                                                Created by: {broadcast.BUpdate}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='absolute left-1/2'>
                                        <span className='bg-gray-200 py-2 px-3 rounded-lg text-xs'>{broadcast.BStatus}</span>
                                    </div>
                                    <div>
                                        {broadcast.BStatus === 'Draft' ? (
                                            <button className="rounded-md h-10 text-sm p-2 bg-teal-500 hover:bg-teal-700 text-white items-center">
                                                Continue editing {`>`}
                                            </button>
                                        ) : (
                                            <button className="rounded-md h-10 text-sm p-2 bg-teal-500 hover:bg-teal-700 text-white items-center">
                                                Message has been sent 
                                            </button>
                                        )}
                                        <Dropdown>
                                            <DropdownTrigger>
                                                <button className="rounded-md h-10 text-sm p-2 border-2 mx-2 items-center">
                                                    <BsThreeDots />
                                                </button>
                                            </DropdownTrigger>
                                            <DropdownMenu aria-label="Static Actions">
                                                <DropdownItem key="duplicate">Duplicate</DropdownItem>
                                                <DropdownItem key="copy to">Copy to</DropdownItem>
                                                <DropdownItem key="delete" className="text-danger" color="danger">
                                                    Delete broadcast
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </section>
                <footer className='ml-64 flex justify-center mt-8 my-8'>
                    <Pagination
                        isCompact 
                        showControls 
                        className=''
                        total={totalPages}
                        initialPage={currentPage}
                        onChange={handlePaginationChange}
                    />
                </footer>

            </div>
        </div>
    );
};

export default Broadcast;