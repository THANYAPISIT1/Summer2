import React, { useState } from "react";

const Navbar = ({ onDataChange, onPost }) => {
  const [TName, setTName] = useState(""); 

  const handleChange = (event) => {
    const newValue = event.target.value;
    setTName(newValue);
  };

  const handleSave = () => {
    
    onDataChange(TName); 
    onPost();
  };

  return (
    <div className="p-2 mt-10">
      <div className="text-black flex flex-row">
        <div className="basis-5/6 pl-8 p-2 ml-64">
          <input type="text" value={TName} onChange={handleChange} />
        </div>
        <div className="flex content-center mt-2">
          <div className="">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-2 mr-10" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
