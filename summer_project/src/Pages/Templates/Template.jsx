import { Link } from "react-router-dom";
import Sidebar from "../../Components/Layouts/Sidebar";
import TopNav from "../../Components/Layouts/TopNav";
const Template = () => {
  return (
    <div>
      <Sidebar />
      <TopNav />
      <div className=" mt-16">
        <div className="ml-64  p-6">
          <h1>Let’s create your template</h1>
        </div>
        <div className="border border-gray-200 ml-64"></div>
        <div>
          <div className="ml-64  text-black flex flex-row">
            <div class="basis-5/6 pl-8 p-2 mt-2">Your <span class="text-green-500">template</span>
            </div>
            <div className="flex content-center mt-2 ">
              <div className="">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white mb-2 p-2 mr-10 rounded-full">
                  <Link to="/Template_editor">Create new template</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 ml-72 mr-5"></div>
          <div className="ml-64 flex text-center">
            <div className="flex-none m-14 box-border p-14 border-4">
              iouios
            </div>
            <div className="flex-none m-14 box-border p-14 border-4">
              iouios
            </div>
            <div className="flex-none m-14 box-border p-14 border-4">
              iouios
            </div>
            <div className="flex-none m-14 box-border p-14 border-4">
              iouios
            </div>
          </div>
          <div className="border border-gray-200 ml-72 mr-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Template;
