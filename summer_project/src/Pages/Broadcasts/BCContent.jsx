import { Link } from "react-router-dom";



const BCContent = () =>{

    return (
        <div>
            <div className="p-6">
                <h1>Let’s create your template</h1>
            </div>
            <div>
                <div className="border-2 text-black flex flex-row">
                    <div className="basis-5/6 pl-8 p-2 ">Your template</div>
                    <div className="flex content-center mt-2 ">
                    <div className="">
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-2 mr-10">
                        <Link to="/broadcast/content/create">Create new template</Link>
                        </button>
                        <div></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
};

export default BCContent;