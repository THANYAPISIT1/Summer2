import { RiBroadcastLine } from "react-icons/ri";
import { GoRepoTemplate } from "react-icons/go";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { BsPeople } from "react-icons/bs";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <aside className="w-64 text-cyan-700 fixed h-full px-4 py-2 mt-3 border-r-2">
            <ul className='mt-3 text-cyan-700 font-bold'>
                <li className='my-2 rounded hover:shadow hover:bg-gray-300 py-2'>
                    <Link to='/' className='px-3'>
                        <RiBroadcastLine className='inline-block w-6 h-6 mr-2 -mt-2 '/>
                        BroadCast
                    </Link>
                </li>
                <hr />
                <li className='my-2 rounded hover:shadow hover:bg-gray-300 py-2'>
                    <Link to='/template' className='px-3'>
                        <GoRepoTemplate className='inline-block w-6 h-6 mr-2 -mt-2 ' />
                        <span>Template</span>
                    </Link>
                </li>
                <hr />
                <li className='my-2 rounded hover:shadow hover:bg-gray-300 py-2'>
                    <Link to='/transection' className='px-3'>
                        <HiOutlineArrowsRightLeft className='inline-block w-6 h-6 mr-2 -mt-2 '/>
                        Transection
                    </Link>
                </li>
                <hr />
                <li className='my-2 rounded hover:shadow hover:bg-gray-300 py-2'>
                    <Link to='/customers' className='px-3'>
                        <BsPeople className='inline-block w-6 h-6 mr-2 -mt-2 '/>
                        Customers
                    </Link>
                </li>
                <hr />
                <li className='my-2 rounded hover:shadow hover:bg-gray-300 py-2'>
                    <Link to='/admins' className='px-3'>
                        <IoPeopleCircleSharp className='inline-block w-6 h-6 mr-2 -mt-2 '/>
                        Admins
                    </Link>
                </li>
                <hr />
            </ul>
        </aside>
      );
};

export default Sidebar;