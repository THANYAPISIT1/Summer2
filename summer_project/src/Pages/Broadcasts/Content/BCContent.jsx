import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BCContent = ({ setContentName, setSelectedTemplate  }) => {
  const [templates, setTemplates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [highlightedTemplate, setHighlightedTemplate] = useState(null);
  const [selectedTID, setSelectedTID] = useState(null);
  const [selectedTName, setSelectedTName] = useState(null);

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

  const handleTemplateClick = (templateId, templateName) => {
    const selectedTemplate = templates.find(
      (template) => template.TID === templateId
    );
    setSelectedTID(templateId);
    setSelectedTName(templateName);
    setSelectedTemplate({ TID: templateId, TName: templateName });
    setHighlightedTemplate(templateId);
    setContentName(selectedTemplate.TName);
  };

  const handleTemplateDoubleClick = (templateId) => {
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
      <div className="p-6">
        <h1>Let’s create your template</h1>
      </div>
      <div>
        <div className="border-2 text-black flex flex-row">
          <div className="flex content-center mt-2">
            <div>
              <div className="text-black flex flex-row">
                <div className="basis-5/6 pl-8 p-2 mt-2">
                  Your <span className="text-green-500">template</span>
                </div>
                <div className="flex content-center mt-2">
                  <div>
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white mb-2 p-2 mr-10 rounded-full">
                      <Link to="/create-broadcast/createtemplate">
                        Create new template
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-wrap">
                {templates.map((template) => (
                  <div
                    key={template.TID}
                    className={`flex-none m-14 text-cyan-700 hover:text-white border-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none box-border p-10 border-4 rounded-lg cursor-pointer ${
                      highlightedTemplate === template.TID
                        ? "bg-blue-200"
                        : ""
                    }`}
                    onClick={() => handleTemplateClick(template.TID)}
                    onDoubleClick={() => handleTemplateDoubleClick(template.TID)}
                  >
                    {template.TName}
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center p-4 mt-4">
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
    </div>
  );
};

export default BCContent;
