import { useState, useEffect } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { DateRangePicker } from "@nextui-org/react";
import axios from 'axios';

const customStyles = {
  control: base => ({
    ...base,
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem', 
    minHeight: 'calc(2.25rem + 2px)', 
    boxShadow: 'none', 
  }),
};

const Filter = ({ onStatusChange, onDateRangeChange, onTagChange, onFilterChange }) => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedDateRange, setSelectedDateRange] = useState([new Date(), new Date().setMonth(11)]);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [filterByTags, setFilterByTags] = useState([]);

    const fetchTags = async () => {
        try {
            const response = await axios.get('http://localhost:8000/broadcasts');
            const tags = response.data.map(broadcasts => ({ label: broadcasts.BTag, value: broadcasts.BTag }));
            setFilterByTags(tags);
        } catch (error) {
            console.error('Error fetching tags:', error);
        }
    };

    useEffect(() => {
        fetchTags();
    }, []);

    const filterByStatus = [
        {label:'Draft', value:'Draft'},
        {label:'Sent', value:'Sent'},
        {label:'Schedule', value:'Schedule'}
    ];

    const filterByFilter = [
        {label:'Last Updated', value:'Last Updated'},
        {label:'Email Sent', value:'Email Sent'},
        {label:'Name', value:'Name'}
    ];

    const handleDateRangeChange = (newValue) => {
        setSelectedDateRange([newValue.startDate, newValue.endDate]);
        onDateRangeChange([newValue.startDate, newValue.endDate]);
    };

    const handleTagsChange = (newValue) => {
        setSelectedTags(newValue);
        onTagChange(newValue);
    };

    const handleStatusChange = (newValue) => {
        setSelectedStatus(newValue);
        onStatusChange(newValue);
    };

    const handleFilterChange = (newValue) => {
        setSelectedFilter(newValue);
        onFilterChange(newValue);
    };



    useEffect(() => {
        console.log("Selected Status:", selectedStatus);
    }, [selectedStatus]);

    useEffect(() => {
        console.log("Selected Filter:", selectedFilter);
    }, [selectedFilter]);

    useEffect(() => {
        console.log("Selected Date Range:", selectedDateRange);
    }, [selectedDateRange]);

    return (
        <div className='z-50'>
            <div className="flex flex-row">
                <CreatableSelect  
                    placeholder={<div>Type</div>}
                    isClearable
                    styles={customStyles}
                    className="my-4 w-full max-w-64 mx-4"
                    options={filterByStatus}
                    value={selectedStatus}
                    onChange={handleStatusChange}
                />
                
                <DateRangePicker 
                    className="my-4 w-full max-w-64 mx-4" 
                    styles={customStyles}
                    value={{ startDate: selectedDateRange[0], endDate: selectedDateRange[1] }}
                    onChange={handleDateRangeChange}
                />

                <Select 
                    placeholder={<div>Select Tags</div>}
                    options={filterByTags} 
                    isMulti 
                    className="basic-multi-select my-4 w-full max-w-64"
                    styles={customStyles}
                    value={selectedTags}
                    onChange={handleTagsChange}
                />

                <CreatableSelect  
                    placeholder={<div>Filter</div>}
                    isClearable 
                    styles={customStyles} 
                    className="my-4 w-full max-w-64 mx-4" 
                    options={filterByFilter}
                    value={selectedFilter}
                    onChange={handleFilterChange}
                />
            </div>
        </div>
    );
};

export default Filter;