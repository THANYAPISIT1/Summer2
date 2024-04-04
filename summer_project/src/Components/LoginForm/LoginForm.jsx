import { useEffect } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
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
        <div>
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg background-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-4*1 text-white fornt-bold text-center mb-6">Login</h1>
                <form action="">
                    <div className="relative my-6">
                        {/* <input type="email" name="" id="" className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer" placeholder=""/>
                        <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">Your Email</label> */}
                        <div className="w-72">
                            <input type="text" 
                                id="email" 
                                className="border-b w-72 py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 bg-transparent transition-colors peer duration-200" 
                                autoComplete="off"/>
                            <label htmlFor="email" className="absolute left-0 top-1 cursor-text focus:text-xs peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-200 transition-all duration-200">Email</label>
                        </div>
                    </div>
                    <div className="relative my-6">
                        {/* <input type="password" name="" id="" className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer" placeholder=""/>
                        <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">Your Password</label> */}
                        <div className="w-72">
                            <input type="password" 
                                id="password" 
                                className="block border-b w-72 py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 bg-transparent transition-colors peer duration-200" 
                                autoComplete="off"/>
                            <label htmlFor="password" className="absolute left-0 top-1 cursor-text focus:text-xs peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-200 transition-all duration-200">Password</label>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="Remember Me">Remember Me</label>
                        </div>
                        <span>Forgot Password?</span> 
                    </div>
                    <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-sky-600 hover:bg-sky-600 hover:text-white py-2 transition-colors duration-300" type="submit">Login</button>
                    <div>
                        <span>New Here? <Link to='/RegisterForm'></Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default LoginForm

