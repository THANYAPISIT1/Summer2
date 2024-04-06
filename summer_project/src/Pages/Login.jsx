import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";

const LoginForm = () => {
    useEffect(() => {
        const TextInput = document.getElementById('Text');
        const TextLabel = document.querySelector('label[for="Text"]');

        
        TextInput.addEventListener('input', event => {
            if (event.target.value) {
                TextInput.classList.add('border-blue-600', 'border-b-2');
                TextLabel.classList.add('text-xs', '-top-4', 'text-blue-200');
            } else {
                TextInput.classList.remove('border-blue-600', 'border-b-2');
                TextLabel.classList.remove('text-xs', '-top-4', 'text-blue-200');
            }
        });
    }, []);
    return (
        <div className='text-white h-screen flex justify-center items-center bg-cover' style={{"backgroundImage" : "url('../src/assets/background.jpg')"}}>
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg background-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-4xl text-white fornt-black text-center mb-6">Login</h1>
                <form action="">
                    <div className="relative my-6">
                        <div className="w-72">
                            <input type="text" 
                                id="Text" 
                                className="border-b w-72 py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 bg-transparent transition-colors peer duration-200" 
                                autoComplete="off"/>
                            <label htmlFor="Text" className="absolute left-0 top-1 cursor-text focus:text-xs peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-200 transition-all duration-200">Email</label>
                            <BiUser className="absolute top-2 right-4"/>
                        </div>
                    </div>
                    <div className="relative my-6">
                        <div className="w-72">
                            <input type="password" 
                                id="Text" 
                                className="block border-b w-72 py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 bg-transparent transition-colors peer duration-200" 
                                autoComplete="off"/>
                            <label htmlFor="Text" className="absolute left-0 top-1 cursor-text focus:text-xs peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-200 transition-all duration-200">Password</label>
                            <AiOutlineLock className="absolute top-2 right-4"/>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="Remember Me">Remember Me</label>
                        </div>
                        <Link className="text-blue-300">Forgot Password?</Link> 
                    </div>
                    <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-sky-600 hover:bg-sky-600 hover:text-white py-2 transition-colors duration-300" type="submit">Login</button>
                    <div className="">
                        <span className="m-4" >New Here? <Link className="text-blue-300" to='/register'>Create an Account</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default LoginForm

