import { useState } from "react";
import { Link } from "react-router-dom";

const NavbarTemplate = ({ defaultName, onDataChange, onPost }) => {
  const [TName, setTName] = useState(defaultName || "");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setTName(newValue);
    onDataChange(newValue); // Pass the updated value to the parent component
  };

  const handleSave = () => {
    onPost(); // Trigger the post action in the parent component
  };

  return (
    <div className="  mt-10 pt-8 pb-4">
      <div className=" text-black flex flex-row">
        <div className="basis-5/6 pl-8  ml-64">
          <input type="text" value={defaultName} onChange={handleChange} />
        </div>
        <div className="flex content-center ">
          <div className=" ">
            <button className="mr-2 text-blue-700">
              <Link to="/Template" className="underline">
                Exit
              </Link>
            </button>
          </div>
            <button className=" text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none px-2 mr-10 pl-2 pr-2 rounded-md " onClick={handleSave}>
              Save
            </button>
        </div>
      </div>
    </div>
  );
};
export default NavbarTemplate;