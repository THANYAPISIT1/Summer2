import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";

const Register = () => {
    useEffect(() => {
        const emailInput = document.getElementById('email');
        const emailLabel = document.querySelector('label[for="email"]');
        const passwordInput = document.getElementById('password');
        const passwordLabel = document.querySelector('label[for="password"]');
        
        emailInput.addEventListener('input', event => {
            if (event.target.value) {
                emailInput.classList.add('border-blue-600', 'border-b-2');
                emailLabel.classList.add('text-xs', '-top-5', 'text-blue-200');
            } else {
                emailInput.classList.remove('border-blue-600', 'border-b-2');
                emailLabel.classList.remove('text-xs', '-top-5', 'text-blue-200');
            }
        });

        passwordInput.addEventListener('input', event => {
            if (event.target.value) {
                passwordInput.classList.add('border-blue-600', 'border-b-2');
                passwordLabel.classList.add('text-xs', '-top-5', 'text-blue-200');
            } else {
                passwordInput.classList.remove('border-blue-600', 'border-b-2');
                passwordLabel.classList.remove('text-xs', '-top-5', 'text-blue-200');
            }
        });
    }, []);
    return (
        <div className='text-white h-screen flex justify-center items-center bg-cover' style={{"backgroundImage" : "url('../src/assets/background.jpg')"}}>
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg background-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-4xl text-white fornt-black text-center mb-6">Register</h1>
                <form action="">
                    <div className="relative my-6">
                        <div className="w-72">
                            <input type="text" 
                                id="email" 
                                className="border-b w-72 py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 bg-transparent transition-colors peer duration-200" 
                                autoComplete="off"/>
                            <label htmlFor="email" className="absolute left-0 top-1 cursor-text focus:text-xs peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-200 transition-all duration-200">Email</label>
                            <BiUser className="absolute top-2 right-4"/>
                        </div>
                    </div>
                    <div className="relative my-6">
                        <div className="w-72">
                            <input type="password" 
                                id="password" 
                                className="block border-b w-72 py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 bg-transparent transition-colors peer duration-200" 
                                autoComplete="off"/>
                            <label htmlFor="password" className="absolute left-0 top-1 cursor-text focus:text-xs peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-200 transition-all duration-200">Password</label>
                            <AiOutlineLock className="absolute top-2 right-4"/>
                        </div>
                    </div>
                    <div className="relative my-6">
                        <div className="w-72">
                            <input type="password" 
                                id="password" 
                                className="block border-b w-72 py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 bg-transparent transition-colors peer duration-200" 
                                autoComplete="off"/>
                            <label htmlFor="password" className="absolute left-0 top-1 cursor-text focus:text-xs peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-200 transition-all duration-200">Confirm Password</label>
                            <AiOutlineLock className="absolute top-2 right-4"/>
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