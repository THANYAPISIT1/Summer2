import { IoPeople } from "react-icons/io5";
import { IoDocumentSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";




const BCReview = () =>{


    return(
        <div>
            {/* Content */}
            <div className="mx-4 my-4">
                <div className="container mx-auto p-4 border border-gray-300 rounded-md">
                    <div>
                        <div className="flex items-center">
                            <IoPeople size='30px'/>
                            <h1 className="text-xm font-bold ml-2">Recipients</h1>
                        </div>
                        <div className="flex items-center my-3">
                            <div className="flex items-center my-4 w-full max-w-auto border p-4 rounded-md">
                                <h2 className="font-semibold">Select</h2>
                                <span className="ml-4 bg-gray-300 hover:bg-gray-400 bg-transparent hover: border p-2 rounded-lg underline underline-offset-4">
                                    Get from Recipients
                                </span>
                            </div>
                        </div>
                    </div>
                <hr />
                <div className="mt-4">
                    <div className="flex items-center">
                        <IoDocumentSharp size='30px'/>
                        <h1 className="text-xm font-bold ml-2">Content</h1>
                    </div>
                    <p className="text-xs my-4 font-normal">The following email will send to the above recipients:</p>
                    <div className="flex items-center my-4 w-full max-w-auto border p-4 rounded-md">
                        <div className=" flex items-center ml-4 p-2 underline underline-offset-4">
                            <HiOutlineMail size='30px'/>
                            <span className="ml-3">
                                Get from Content
                            </span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BCReview;