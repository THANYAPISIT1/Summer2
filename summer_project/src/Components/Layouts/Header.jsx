import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { IoPencil } from "react-icons/io5";

const Header = ({ broadcastName, handleOpenModal, stepCompletion }) => {
  return (
    <header className="flex justify-between items-center py-8 px-6 border-b-2">
      <div className="flex items-center cursor-pointer" onClick={handleOpenModal}>
        <span className="text-base font-medium">{broadcastName}</span>
        <IoPencil className='w-6 h-6 ml-2' />
      </div>
      {/* stepper */}
      <div className="flex items-center">
        <ol className="items-center w-full space-y-2 sm:flex sm:space-x-4 sm:space-y-0 rtl:space-x-reverse mr-4">
          <li className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <span className={`flex items-center justify-center w-6 h-6 border rounded-full shrink-0 text-sm ${stepCompletion.recipients ? 'bg-green-500 text-white' : 'border-blue-600 text-blue-600 dark:text-blue-500'}`}>
              {stepCompletion.recipients ? <IoCheckmarkSharp /> : '1'}
            </span>
            <span>
              <h3 className="font-medium leading-tight text-sm">Recipients</h3>
            </span>
          </li>
          <li className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <span className={`flex items-center justify-center w-6 h-6 border rounded-full shrink-0 text-sm ${stepCompletion.content ? 'bg-green-500 text-white' : 'border-gray-500 text-gray-500 dark:text-gray-400'}`}>
              {stepCompletion.content ? <IoCheckmarkSharp /> : '2'}
            </span>
            <span>
              <h3 className="font-medium leading-tight text-sm">Content</h3>
            </span>
          </li>
          <li className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <span className={`flex items-center justify-center w-6 h-6 border rounded-full shrink-0 text-sm ${stepCompletion.review ? 'bg-green-500 text-white' : 'border-gray-500 text-gray-500 dark:text-gray-400'}`}>
              {stepCompletion.review ? <IoCheckmarkSharp /> : '3'}
            </span>
            <span>
              <h3 className="font-medium leading-tight text-sm">Review</h3>
            </span>
          </li>
        </ol>
        {/* ---------------------------------- */}
        <div className="inline-flex">
          <Button
            className="underline underline-offset-auto inline-block px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
            onClick={() => {
              // Add functionality for Save button
            }}
          >
            Save
          </Button>

            <Button
              isDisabled 
              className="mx-2 inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
              onClick={() => {
                // Add functionality for Prev button
              }}
            >
              Prev
            </Button>

          <Link to='/broadcast/content'>
            <Button
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              onClick={() => {
                // Add functionality for Next button
              }}
            >
              Next
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
