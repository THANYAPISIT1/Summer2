import { Link } from "react-router-dom";
import Sidebar from "../../Components/Layouts/Sidebar";
import TopNav from "../../Components/Layouts/TopNav";
const Template = () => {
  return (
    <div>
      <Sidebar />
      <TopNav />
      <div className=" mt-16">
        <div className="ml-64 flex justify-between items-center bg-white text-black text-3xl font-bold p-8 ">
          <h1>Let’s create your template</h1>
        </div>
        <div className="border-b border-gray-200 ml-64"></div>
        <div>
          <div className="ml-64  text-black flex flex-row">
            <div class="basis-5/6 pl-8 p-2 mt-2">Your <span class="text-green-500">template</span>
            </div>
            <div className="flex content-center mt-2 ">
              <div className="">
                <button className=" text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 mb-2 p-2 mr-10 rounded-full">
                  <Link to="/Template_editor">Create new template</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200 ml-72 mr-5"></div>
          <div className="ml-64 flex text-center">
            <div className="flex-none m-14 text-blue-700 hover:text-white border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none box-border p-14 border-4 rounded-lg">
              iouios
            </div>
            <div className="flex-none m-14 text-blue-700 hover:text-white border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none box-border p-14 border-4 rounded-lg">
              iouios
            </div>
            <div className="flex-none m-14 text-blue-700 hover:text-white border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none box-border p-14 border-4 rounded-lg">
              iouios
            </div>
            <div className="flex-none m-14 text-blue-700 hover:text-white border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none box-border p-14 border-4 rounded-lg">
              iouios
            </div>
          </div>
          <div className="border-b border-gray-200 ml-72 mr-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Template;
