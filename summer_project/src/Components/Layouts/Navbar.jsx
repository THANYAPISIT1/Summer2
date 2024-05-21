import React, { useState } from "react";

const Navbar = ({ defaultName, onDataChange, onPost }) => {
  const [TName, setTName] = useState(defaultName || ""); // Initialize with defaultName if provided

  const handleChange = (event) => {
    const newValue = event.target.value;
    setTName(newValue);
    onDataChange(newValue); // Pass the updated value to the parent component
  };

  const handleSave = () => {
    onPost(); // Trigger the post action in the parent component
  };

  return (
    <div className="p-2 mt-10">
      <div className="text-black flex flex-row">
        <div className="basis-5/6 pl-8 p-2 ml-64">
          <input type="text" value={defaultName} placeholder="Name" onChange={handleChange} />
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