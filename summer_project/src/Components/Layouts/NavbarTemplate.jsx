<<<<<<< HEAD:summer_project/src/Components/Layouts/NavbarTemplate.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function useString(Untitle) {
  const [stringValue, setStringValue] = useState(Untitle);

  const updateStringValue = (newValue) => {
    setStringValue(newValue);
  };

  return [stringValue, updateStringValue];
}

const NavbarTemplate = () => {
  const [stringValue, setStringValue] = useString("Untitle");
=======
import React, { useState } from "react";

const Navbar = ({ defaultName, onDataChange, onPost }) => {
  const [TName, setTName] = useState(defaultName || ""); // Initialize with defaultName if provided
>>>>>>> e4fc2c6c2d297175a06b9bdc2a4134bebd41cb27:summer_project/src/Components/Layouts/Navbar.jsx

  const handleChange = (event) => {
    const newValue = event.target.value;
    setTName(newValue);
    onDataChange(newValue); // Pass the updated value to the parent component
  };

  const handleSave = () => {
    onPost(); // Trigger the post action in the parent component
  };

  return (
<<<<<<< HEAD:summer_project/src/Components/Layouts/NavbarTemplate.jsx
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
=======
    <div className="p-2 mt-10">
      <div className="text-black flex flex-row">
        <div className="basis-5/6 pl-8 p-2 ml-64">
          <input type="text" value={defaultName} placeholder="Name" onChange={handleChange} />
        </div>
        <div className="flex content-center mt-2">
          <div className="">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-2 mr-10" onClick={handleSave}>
>>>>>>> e4fc2c6c2d297175a06b9bdc2a4134bebd41cb27:summer_project/src/Components/Layouts/Navbar.jsx
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
<<<<<<< HEAD:summer_project/src/Components/Layouts/NavbarTemplate.jsx
export default NavbarTemplate;
=======

export default Navbar;
>>>>>>> e4fc2c6c2d297175a06b9bdc2a4134bebd41cb27:summer_project/src/Components/Layouts/Navbar.jsx
