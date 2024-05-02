// import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { BiUser } from "react-icons/bi";
// import { AiOutlineLock } from "react-icons/ai";

const Register = () => {
    // useEffect(() => {
    //     const TextInput = document.getElementById('Text');
    //     const TextLabel = document.querySelector('label[for="Text"]');

        
    //     TextInput.addEventListener('input', event => {
    //         if (event.target.value) {
    //             TextInput.classList.add('border-blue-600', 'border-b-2');
    //             TextLabel.classList.add('text-xs', '-top-4', 'text-blue-200');
    //         } else {
    //             TextInput.classList.remove('border-blue-600', 'border-b-2');
    //             TextLabel.classList.remove('text-xs', '-top-4', 'text-blue-200');
    //         }
    //     });
    // }, []);
    return (
        <div className='text-white h-screen flex justify-center items-center bg-cover' style={{"backgroundImage" : "url('../../public/background.jpg')"}}>
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg background-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-4xl text-white fornt-black text-center mb-6">Register</h1>
                <form action="">
                    <div className="relative my-6">
                        {/* <div className="w-72">
                            <input type="text" 
                                id="Text" 
                                className="border-b w-72 py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 bg-transparent transition-colors peer duration-200" 
                                autoComplete="off"/>
                            <label htmlFor="Text" className="absolute left-0 top-1 cursor-text focus:text-xs peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-200 transition-all duration-200">Email</label>
                            <BiUser className="absolute top-2 right-4"/>
                        </div> */}
                            <div className="relative h-10 w-full min-w-[200px]">
                                <div className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
                                <i className="fas fa-heart" aria-hidden="true"></i>
                                </div>
                                <input
                                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" " type="email"
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-200 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                                </label>
                            </div>
                    </div>
                    <div className="relative my-6">
                        {/* <div className="w-72">
                            <input type="password" 
                                id="Text" 
                                className="block border-b w-72 py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 bg-transparent transition-colors peer duration-200" 
                                autoComplete="off"/>
                            <label htmlFor="Text" className="absolute left-0 top-1 cursor-text focus:text-xs peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-200 transition-all duration-200">Password</label>
                            <AiOutlineLock className="absolute top-2 right-4"/>
                        </div> */}
                            <div className="relative h-10 w-full min-w-[200px]">
                                <div className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
                                <i className="fas fa-heart" aria-hidden="true"></i>
                                </div>
                                <input
                                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" " type="password"
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-200 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                                </label>
                            </div>
                    </div>
                    <div className="relative my-6">
                        {/* <div className="w-72">
                            <input type="password" 
                                id="Text" 
                                className="block border-b w-72 py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 bg-transparent transition-colors peer duration-200" 
                                autoComplete="off"/>
                            <label htmlFor="Text" className="absolute left-0 top-1 cursor-text focus:text-xs peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-200 transition-all duration-200">Confirm Password</label>
                            <AiOutlineLock className="absolute top-2 right-4"/>
                        </div> */}
                            <div className="relative h-10 w-full min-w-[200px]">
                                <div className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
                                <i className="fas fa-heart" aria-hidden="true"></i>
                                </div>
                                <input
                                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" " type="password"
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-200 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Confirm Password
                                </label>
                            </div>
                    </div>

                    <button className="w-full mb-4 text-[18px] mt-2 rounded-full bg-white text-sky-600 hover:bg-sky-600 hover:text-white py-2 transition-colors duration-300" type="submit">Register</button>
                    <div className="">
                        <span className="m-4" >Already have an Account?<Link className="text-blue-300" to='/login'> Sign in</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register