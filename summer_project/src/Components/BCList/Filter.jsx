import Select from 'react-select'
// import handleChange from 

// const handleChange = (selectOption) =>{
//     console.log("handleChange",)
// }

const Filter = () => {
    const tags = [
        {label:'Silver', value:'silver'},
        {label:'Gold', value:'Gold'},
        {label:'Platinum', value:'Platinum'}

    ];
    
    return(
        <div>
            <div className="flex flex-row">
                <select className="select select-bordered w-full max-w-xs my-4 mx-4">
                    <option>Who shot first?</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                
                <Select options={tags} isMulti className="basic-multi-select my-4 h-12 min-h-12 w-full max-w-xs"/>

                <select className="select select-bordered w-full max-w-xs my-4 mx-4">
                    <option>Who shot first?</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;