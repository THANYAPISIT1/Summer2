import { Link } from "react-router-dom";


const Createbtn = () => {
  return (
    <div className="grid min-h-6 place-content-center p-4">
      <DrawOutlineButton></DrawOutlineButton>
      <Link to='/broadcast/recipient'/>
    </div>
  );
};

const DrawOutlineButton = ({ ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-blue-600 transition-colors duration-[400ms] hover:text-sky-600"
    >
      <span>Create BroadCast</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-sky-600 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-sky-600 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-sky-600 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-sky-600 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Createbtn;