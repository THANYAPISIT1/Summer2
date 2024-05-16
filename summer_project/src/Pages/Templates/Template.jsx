import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../Components/Layouts/Sidebar";
import TopNav from "../../Components/Layouts/TopNav";

const Template = () => {
  const [templates, setTemplates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [highlightedTemplate, setHighlightedTemplate] = useState(null);

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
    // Implement your logic here, such as navigating to a template detail page
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
      <div className="mt-16">
        <div className="ml-64 p-6">
          <h1>Let’s create your template</h1>
        </div>
        <div className="border border-gray-200 ml-64"></div>
        <div>
          <div className="ml-64 text-black flex flex-row">
            <div className="basis-5/6 pl-8 p-2 mt-2">
              Your <span className="text-green-500">template</span>
            </div>
            <div className="flex content-center mt-2">
              <div>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white mb-2 p-2 mr-10 rounded-full">
                  <Link to="/Template_editor">Create new template</Link>
                </button>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Template;
