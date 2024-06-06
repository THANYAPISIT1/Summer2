import { IoPeople } from "react-icons/io5";
import { IoDocumentSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

const BCReview = ({ recipientTitle, contentName }) => {
  return (
    <div>
      {/* Content */}
      <div className="mx-4 my-4">
        <div className="container mx-auto p-4 border border-gray-300 rounded-md">
          <div>
            <div className="flex items-center">
              <IoPeople size="30px" />
              <h1 className="text-xm font-bold ml-2">Recipients</h1>
            </div>
            <div className="flex items-center my-3">
              <div className="flex items-center my-4 w-full max-w-auto border p-4 rounded-md">
                <h2 className="font-semibold">Select</h2>
                <button
                  className="flex items-center gap-3 rounded-lg bg-cyan-500 ml-3 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  {recipientTitle}
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="mt-4">
            <div className="flex items-center">
              <IoDocumentSharp size="30px" />
              <h1 className="text-xm font-bold ml-2">Content</h1>
            </div>
            <p className="text-xs my-4 font-normal">
              The following email will send to the above recipients:
            </p>
            <div className="flex items-center my-4 w-full max-w-auto border p-4 rounded-md">
              <HiOutlineMail size="30px" />
              <h2 className="font-semibold ml-2">Select</h2>
              <button
                className="flex items-center gap-3 rounded-lg bg-cyan-500 ml-3 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                {contentName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BCReview;
