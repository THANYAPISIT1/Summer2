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

  const handleChange = (event) => {
    setStringValue(event.target.value);
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
