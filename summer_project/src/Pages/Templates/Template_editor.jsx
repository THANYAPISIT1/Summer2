import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Layouts/Sidebar.jsx";
import TopNav from "../../Components/Layouts/TopNav.jsx";
import Editor from "../../Components/Layouts/Editor.jsx";
import Navbar from "../../Components/Layouts/Navbar.jsx";

const Template_editor = () => {
  
  const [data, setData] = useState({
    editorData: "", 
    navbarData: "", 
  });

  const navigate = useNavigate(); 

  const handleEditorDataChange = (editorData) => {
    setData((prevData) => ({ ...prevData, editorData }));
  };

  const handleNavbarDataChange = (navbarData) => {
    setData((prevData) => ({ ...prevData, navbarData }));
  };

  const postData = async () => {

    try {

      // forbidden then complete
      const authToken = localStorage.getItem('token')
      
      const postData = {
        TName: data.navbarData, 
        TContent: data.editorData 
      };

      const response = await axios.post("http://localhost:8000/templates", postData, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });

      console.log("Template Created successfully:", response.data);
      alert("Template Created successfully!");
      navigate('/template');
      
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div>
      <Sidebar />
      <TopNav />
      <div className="mt-16">
        <Navbar onDataChange={handleNavbarDataChange} onPost={postData} />
        <Editor onDataChange={handleEditorDataChange} />
        
      </div>
    </div>

  );
};

export default Template_editor;