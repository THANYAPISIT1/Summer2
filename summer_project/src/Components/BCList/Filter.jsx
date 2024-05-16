import { useState, useEffect } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import {DateRangePicker} from "@nextui-org/react";


const customStyles = {
  control: base => ({
    ...base,
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem', 
    minHeight: 'calc(2.25rem + 2px)', 
    boxShadow: 'none', 

  }),
};

const Filter = () => {

    const [value, setValue] = useState({ 
        startDate: new Date(), 
        endDate: new Date().setMonth(11) 
    }); 
    
    const [filterByTags, setFilterByTags] = useState([
        {label:'Silver', value:'silver'},
        {label:'Gold', value:'Gold'},
        {label:'Platinum', value:'Platinum'},
        {label:'Diamond', value:'Diamond'}
    ]);

    const [filterByStatus, setFilterByStatus] = useState([
        {label:'All newsletter', value:'All newsletter'},
        {label:'Draft', value:'Draft'},
        {label:'Sent', value:'Sent'},
        {label:'Scheduled', value:'Scheduled'}
    ]);

    const [filterByLastUpdate, setFilterByLastUpdate] = useState([
        {label:'Last Updated', value:'Last Updated'},
        {label:'Email Sent', value:'Email Sent'},
        {label:'Date Sent', value:'Date Sent'},
        {label:'Name', value:'Name'},
        {label:'Date Created', value:'Date Created'},
    ]);

    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedLastUpdate, setSelectedLastUpdate] = useState(null);

    const handleValueChange = (newValue) => {
        console.log("Selected Date:", newValue.startDate,newValue.endDate)
        setValue(newValue); 
    } 

    const handleTagsChange = (newValue) => {
        setSelectedTags(newValue);
    }

    const handleStatusChange = (newValue) => {
        setSelectedStatus(newValue);
    }

    const handleLastUpdateChange = (newValue) => {
        setSelectedLastUpdate(newValue);
    }

    useEffect(() => {
        console.log("Selected Tags:", selectedTags);
    }, [selectedTags]);

    useEffect(() => {
        console.log("Selected Status:", selectedStatus);
    }, [selectedStatus]);

    useEffect(() => {
        console.log("Selected Last Update:", selectedLastUpdate);
    }, [selectedLastUpdate]);
      

    
    return(

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
                    value={value} 
                    onChange={handleValueChange}
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
                    options={filterByLastUpdate}
                    value={selectedLastUpdate}
                    onChange={handleLastUpdateChange}
                />

            </div>
        </div>
        
    );
};

export default Filter;
