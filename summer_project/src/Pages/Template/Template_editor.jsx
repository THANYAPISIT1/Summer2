import Sidebar from "../../Components/Layouts/Sidebar.jsx";
import TopNav from "../../Components/Layouts/TopNav.jsx";
import Editor from "../../Components/Layouts/Editor.jsx";
import Navbar from "../../Components/Layouts/Navbar.jsx";

const Template_editor = () => {
  return (
    <div >
      <Sidebar />
      <TopNav />
      <div className="mt-16">
        <Navbar/>
      <Editor />
      </div>
      </div>
  );
};

export default Template_editor;