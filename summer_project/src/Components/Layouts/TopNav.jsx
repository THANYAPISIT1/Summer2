import {FaBell,FaUserCircle} from 'react-icons/fa'
import { Link,useLocation,useNavigate } from 'react-router-dom';

const TopNav = () => {

    const handlelogout = () =>{
        
        localStorage.removeItem('token');
        navigate('/login')
    }

    const navigate = useNavigate();

    const location = useLocation();

    // Function to get the page name from the path
    const getPageName = () => {
        const path = location.pathname;
        // If the path is just "/", return "Broadcast"
        if (path === "/") {
            return "Broadcast";
        } else {
            // Split the path and get the last part (page name)
            const parts = path.split('/');
            return parts[parts.length - 1];
        }
    };


    return (
        <nav className="fixed top-0 right-0 left-0 bg-gray-800 px-4 py-3 flex justify-between z-[100]">
            <div className='my-3 mb-4 ml-3 text-white font-bold'>
                <h1 className="text">{getPageName().toUpperCase()}</h1>
            </div>
            <hr /> 
            <div className='flex items-center gap-x-5'>

                <div className='text-white'><FaBell className='w-6 h-6'/></div>
                <div className='relative'>
                    <button className='text-white group'>
                        <FaUserCircle className='w-6 h-6 mt-1'/>
                        <div className='z-10 hidden absolute bg-white rouded-lg shadow w-32 group-focus:block top-full right-0'>
                            <ul className='py-2 text-sm text-gray-950'>
                                <li><Link to=''>Profile</Link></li>
                                <li><Link to=''>Setting</Link></li>
                                <li onClick={handlelogout}>Log out</li>
                            </ul>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
      );
};

export default TopNav;