import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Layouts/Sidebar";
import TopNav from "../../Components/Layouts/TopNav";
import axios from "axios";

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
                console.log(response.data);

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
  return (
    <div>
            <Sidebar />
            <TopNav />
            <div className="mt-16 ml-64 p-6">
                <h1>Let’s create your template</h1>
            </div>
            <div className="ml-64 border-2 text-black flex flex-row">
                <div className="basis-5/6 pl-8 p-2">
                    <h2>Your templates</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {templates.map(template => (
                            <button
                                key={template.TID}
                                className="focus:outline-none"
                                onMouseEnter={() => setHighlightedTemplate(template.TID)}
                                onMouseLeave={() => setHighlightedTemplate(null)}
                                onClick={() => handleTemplateClick(template.TID)}
                                style={{
                                    backgroundColor: highlightedTemplate === template.TID ? 'lightblue' : 'transparent',
                                    padding: '8px', // Adjusted padding for smaller highlight
                                    height: '90px', // Fixed height for each box
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <div className="bg-gray-200 p-4 rounded-md">
                                    <h3>{template.TName}</h3>
                                    {/* You can add more details here */}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex content-center mt-2">
                    <div className="">
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-2 mr-10">
                            <Link to="/Template_editor">Create new template</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Template;
