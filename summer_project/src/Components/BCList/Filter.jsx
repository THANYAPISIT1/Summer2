import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker"; 


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
        
        const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
        } 


    const tags = [
        {label:'Silver', value:'silver'},
        {label:'Gold', value:'Gold'},
        {label:'Platinum', value:'Platinum'},
        {label:'Diamond', value:'Diamond'}
    ];

    const AllNewsletter = [
        {label:'All newsletter', value:'All newsletter'},
        {label:'Draft', value:'Draft'},
        {label:'Sent', value:'Sent'},
        {label:'Scheduled', value:'Scheduled'}
    ];

    const LastUpdate = [
        {label:'Last Updated', value:'All newsletter'},
        {label:'Email Sent', value:'Draft'},
        {label:'Date Sent', value:'Sent'},
        {label:'Name', value:'Scheduled'},
        {label:'Date Created', value:'Scheduled'},
        {label:'Last Updated', value:'Scheduled'}
    ];
    console.log(LastUpdate);
      

    
    return(

        <div>
            <div className="flex flex-row">

                <CreatableSelect  placeholder={<div>Type</div>} isClearable styles={customStyles} className="my-4 w-full max-w-64 mx-4" options={AllNewsletter} />
                
                <Datepicker 
                    value={value} 
                    onChange={handleValueChange} 
                /> 

                <Select 
                     placeholder={<div>Select Tags</div>}

                    options={tags} 
                    isMulti 
                    className="basic-multi-select my-4 w-full max-w-64"
                    styles={customStyles} // Apply custom styles
                />


                <CreatableSelect  placeholder={<div>Filter</div>} isClearable styles={customStyles} className="my-4 w-full max-w-64 mx-4" options={LastUpdate} />

            </div>
        </div>
        
    );
};

export default Filter;
