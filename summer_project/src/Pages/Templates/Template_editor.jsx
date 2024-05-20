import Sidebar from "../../Components/Layouts/Sidebar.jsx";
import TopNav from "../../Components/Layouts/TopNav.jsx";
import Editor from "../../Components/Layouts/Editor.jsx";
import NavbarTemplate from "../../Components/Layouts/NavbarTemplate.jsx";


const Template_editor = () => {
  return (
    <div >
      <Sidebar />
      <TopNav />
      <div className="mt-16">
        <NavbarTemplate/>
      <Editor />
      </div>
      </div>
  );
};

export default Template_editor;