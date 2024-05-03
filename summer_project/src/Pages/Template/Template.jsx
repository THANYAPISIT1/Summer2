import { Link } from "react-router-dom";
import Sidebar from "../../Components/Layouts/Sidebar";
import TopNav from "../../Components/Layouts/TopNav";
const Template = () => {
  return (
    <div>
      <Sidebar />
      <TopNav />
      <div className=" mt-16">
        <div className="">
          <div className="ml-64  p-6">
            <h1>Let’s create your template</h1>
          </div>
          <div>
            <div className=" ml-64 border-2 text-black flex flex-row">
              <div className="basis-5/6 pl-8 p-2 ">Your template</div>
              <div className="flex content-center mt-2 ">
                <div className="">
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-2 mr-10">
                    <Link to="/Template_editor">Create new template</Link>
                  </button>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
      
      </div>

  );
};

export default Template;
