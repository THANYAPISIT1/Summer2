import { useState, useEffect } from "react";
import { IoPeople } from "react-icons/io5";
import { IoDocumentSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaClock } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";


const BCReview = ({ recipientTitle, contentName, onDateChange }) => {
  const [bschedule, setBSchedule] = useState(new Date());
  const [sqlDate, setSqlDate] = useState("");

  useEffect(() => {
    const toSqlDate = (date) => {
      const isoString = date.toISOString();
      const [datePart] = isoString.split("T");
      return `${datePart}`;
    };

    setSqlDate(toSqlDate(bschedule));
    onDateChange(sqlDate);
  }, [bschedule,onDateChange]);

  console.log(sqlDate);

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
          <hr />
          <div className="mt-4">
            <div className="flex items-center">
              <FaClock size="30px"/>
              <h1 className="text-xm font-bold ml-2">Schedule</h1>
            </div>
            <div className="flex items-center my-4 w-full max-w-auto border p-4 rounded-md">
              <div className="mr-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Select Date
                </label>
                <DatePicker
                  selected={bschedule}
                  onChange={(date) => setBSchedule(date)}
                  dateFormat="MMMM d, yyyy"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BCReview;
