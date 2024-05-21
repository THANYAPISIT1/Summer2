import { useState, useEffect, } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../Components/Layouts/Sidebar";
import TopNav from "../../Components/Layouts/TopNav";

const Template = () => {
  const [templates, setTemplates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [highlightedTemplate, setHighlightedTemplate] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const authToken = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:8000/templates?page=${currentPage}`, {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        });
        const data = response.data;
        setTemplates(data.templates);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error fetching templates:', error);
      }
    };

    fetchTemplates();
  }, [currentPage]);

  const handleTemplateClick = (templateId) => {
    console.log(`Template ${templateId} clicked`);
    const selectedTemplate = templates.find(template => template.TID === templateId);
    navigate(`/template/edit/${templateId}`, {state : { template: selectedTemplate}})
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Sidebar />
      <TopNav />
<<<<<<< HEAD
      <div className=" mt-16">
        <div className="ml-64 flex justify-between items-center bg-white text-black text-3xl font-bold p-8 ">
=======
      <div className="mt-16">
        <div className="ml-64 p-6">
>>>>>>> e4fc2c6c2d297175a06b9bdc2a4134bebd41cb27
          <h1>Let’s create your template</h1>
        </div>
        <div className="border-b border-gray-200 ml-64"></div>
        <div>
          <div className="ml-64 text-black flex flex-row">
            <div className="basis-5/6 pl-8 p-2 mt-2">
              Your <span className="text-green-500">template</span>
            </div>
<<<<<<< HEAD
            <div className="flex content-center mt-2 ">
              <div className="">
                <button className=" text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 mb-2 p-2 mr-10 rounded-full">
                  <Link to="/Template_editor">Create new template</Link>
=======
            <div className="flex content-center mt-2">
              <div>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white mb-2 p-2 mr-10 rounded-full">
                  <Link to="/template/create">Create new template</Link>
>>>>>>> e4fc2c6c2d297175a06b9bdc2a4134bebd41cb27
                </button>
              </div>
            </div>
          </div>
<<<<<<< HEAD
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
=======
          <div className="border border-gray-200 ml-72 mr-5"></div>
          <div className="ml-64 flex flex-wrap">
            {templates.map((template) => (
              <div
                key={template.TID}
                className="flex-none m-4 box-border p-6 border-4 cursor-pointer"
                onClick={() => handleTemplateClick(template.TID)}
              >
                {template.TName}
              </div>
            ))}
          </div>
          <div className="border border-gray-200 ml-72 mr-5"></div>
          <div className="ml-64 flex justify-between mt-4">
            <button 
              className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-full"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button 
              className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-full"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
>>>>>>> e4fc2c6c2d297175a06b9bdc2a4134bebd41cb27
        </div>
      </div>
    </div>

  );
};

export default Template;