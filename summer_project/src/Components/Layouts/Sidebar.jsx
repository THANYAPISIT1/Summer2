import { RiBroadcastLine } from "react-icons/ri";
import { GoRepoTemplate } from "react-icons/go";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { IoPeople } from "react-icons/io5";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white fixed h-full px-4 py-2">
            <div className='my-2 mb-4'>
                <h1 className="text">Test</h1>
            </div>
            <hr />
            <ul className='mt-3 text-white font-bold'>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <RiBroadcastLine className='inline-block w-6 h-6 mr-2 -mt-2 '/>
                        BroadCast
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <GoRepoTemplate className='inline-block w-6 h-6 mr-2 -mt-2 ' />
                        <span><Link to='/Template'>Template</Link></span>
                    </a>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <HiOutlineArrowsRightLeft className='inline-block w-6 h-6 mr-2 -mt-2 '/>
                        Transection
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <IoPeople className='inline-block w-6 h-6 mr-2 -mt-2 '/>
                        Customers
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                    <IoPeopleCircleSharp className='inline-block w-6 h-6 mr-2 -mt-2 '/>
                        Admins
                    </a>
                </li>
            </ul>
        </aside>
      );
};

export default Sidebar;