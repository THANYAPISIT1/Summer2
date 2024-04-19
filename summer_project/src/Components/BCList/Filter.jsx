import Select from 'react-select';
import React from 'react';
// import handleChange from 

// const handleChange = (selectOption) =>{
//     console.log("handleChange",)
// }

const Filter = () => {
    const tags = [
        {label:'Silver', value:'silver'}

    ];
    
    return(
        <div>
            testttttttttttt
                <div className="flex flex-row">
                    <select name="" id="" className="w-64 mx-4 my-6 text-center border-solid border-2 border-gray-900 p-3 rounded-md">
                        <option value="Test1">All Newsletter</option>
                        <option value="Test2">Test2</option>
                        <option value="Test3">Test3</option>
                        <option value="Test4">Test4</option>
                    </select>
                    
                    
                    <Select options={tags} onChange={handleChange} isMulti className="w-64 mx-4 my-6 text-center border-solid border-2 border-gray-900 p-3 rounded-md"/>
                    <select name="" id="" className="w-64 mx-4 my-6 text-center border-solid border-2 border-gray-900 p-3 rounded-md">
                        <option value="Test1">Last updated</option>
                        <option value="Test2">Test2</option>
                        <option value="Test3">Test3</option>
                        <option value="Test4">Test4</option>
                    </select>
            </div>
        </div>
    );
};

export default Filter;