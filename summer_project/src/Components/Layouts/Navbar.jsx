import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';

function useString(Untitle) {
  const [stringValue, setStringValue] = useState(Untitle);

  const updateStringValue = (newValue) => {
    setStringValue(newValue);
  };

  return [stringValue, updateStringValue];
}

const Navbar= () => {
  const [stringValue, setStringValue] = useString("Untitle");

  const handleChange = (event) => {
    setStringValue(event.target.value);
  };
  return (
    <div class=" p-2 mt-10">
      <div className=" text-black flex flex-row">
        <div className="basis-5/6 pl-8 p-2 ml-64">
          <input type="text" value={stringValue} onChange={handleChange} />
          <p>Current value: {stringValue}</p>
        </div>
        <div className="flex content-center mt-2 ">
          <div className=" ">
            <button className="mr-2">
              <Link to="/Template">Exit</Link>
            </button>
          </div>
          <div className="">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-2 mr-10">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;