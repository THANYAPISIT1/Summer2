import Select from 'react-select';
import { useState } from 'react';
import DatePicker from 'react-datepicker'


const customStyles = {
  control: base => ({
    ...base,
    border: '1px solid #d1d5db', // Add border color
    borderRadius: '0.375rem', // Match border-radius with other selects
    minHeight: 'calc(2.25rem + 2px)', // Match height with other selects
    boxShadow: 'none', // Remove default box shadow
  }),
};

const Filter = () => {
    const tags = [
        {label:'Silver', value:'silver'},
        {label:'Gold', value:'Gold'},
        {label:'Platinum', value:'Platinum'}
    ];
        const [startDate, setStartDate] = useState(new Date());
    
    return(

        <div>
            <div className="flex flex-row">
                <select className="select select-bordered w-full max-w-fit my-4 mx-4 px-2 border border-#d1d5db rounded-md">
                    <option>All Newsletter</option>
                    <option>Draft</option>
                    <option>Sent</option>
                    <option>Scheduled</option>
                </select>
                
                <Select 
                    options={tags} 
                    isMulti 
                    className="basic-multi-select my-4 w-full max-w-64"
                    styles={customStyles} // Apply custom styles
                />

                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

                <select className="select select-bordered w-full max-w-fit my-4 mx-4 px-2 border border-#d1d5db rounded-md">
                    <option>Last updated</option>
                    <option>Email Sent</option>
                    <option>Date Sent</option>
                    <option>Name</option>
                    <option>Date Created</option>
                    <option>Last Updated</option>
                </select>
            </div>
        </div>
        
    );
};

export default Filter;
