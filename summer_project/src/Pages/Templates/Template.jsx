import { useState, useEffect } from "react";
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
        const authToken = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8000/templates?page=${currentPage}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        const data = response.data;
        setTemplates(data.templates);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    };

    fetchTemplates();
  }, [currentPage]);

  const handleTemplateClick = (templateId) => {
    console.log(`Template ${templateId} clicked`);
    const selectedTemplate = templates.find(
      (template) => template.TID === templateId
    );
    navigate(`/template/edit/${templateId}`, {
      state: { template: selectedTemplate },
    });
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
        <div className="ml-64 flex justify-between items-center bg-white text-black text-3xl font-bold p-8">
          Let’s create your template
        </div>
        <div className="border-b border-gray-200 ml-64"></div>
        <div>
          <div className="ml-64 text-black flex flex-row">
            <div className="basis-5/6 pl-8 mt-4">
              Your <span className="text-green-500">template</span>
            </div>
            <div className="flex content-center p-2">
              <div>
                <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 rounded-full">
                  <Link to="/template/create">Create new template</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 ml-64"></div>
          <div className="ml-64 flex flex-wrap">
            {templates.map((template) => (
              <div
                key={template.TID}
                className="flex-none m-14 text-cyan-700 hover:text-white border-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none box-border p-10 border-4 rounded-lg"
                onClick={() => handleTemplateClick(template.TID)}
              >
                {template.TName}
              </div>
            ))}
          </div>
          <div className="ml-64">
            <div className="border-b border-gray-200"></div>
            <div className="flex justify-between items-center p-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ width: "100px", height: "50px" }}
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ width: "100px", height: "50px" }}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
