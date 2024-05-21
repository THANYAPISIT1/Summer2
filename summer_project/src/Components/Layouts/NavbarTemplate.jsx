import React, { useState } from "react";

const NavbarTemplate = ({ defaultName, onDataChange, onPost }) => {

  const handleChange = (event) => {
    const newValue = event.target.value;
    setTName(newValue);
    onDataChange(newValue); // Pass the updated value to the parent component
  };

  const handleSave = () => {
    onPost(); // Trigger the post action in the parent component
  };

  return (
    <div class="  mt-10 pt-8 pb-4">
      <div className=" text-black flex flex-row">
        <div className="basis-5/6 pl-8  ml-64">
          <input type="text" value={stringValue} onChange={handleChange} />
        </div>
        <div className="flex content-center ">
          <div className=" ">
            <button className="mr-2 text-blue-700">
              <Link to="/Template" className="underline">
                Exit
              </Link>
            </button>
          </div>
          <div className="">
            <button className=" text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none px-2 mr-10 pl-2 pr-2 rounded-md ">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarTemplate;