import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import { validateUsername, validatePassword } from "../validator/adminValidator";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        AUsername: '',
        APassword: ''
    });
    
    const [errors, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { AUsername, APassword } = formData;

        if (validateUsername(AUsername) !== true) {
            setError(validateUsername(AUsername));
            return;
        }
    
        if (!validatePassword(APassword) !== true) {
            setError(validatePassword(APassword));
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/login', { AUsername, APassword });
            
            localStorage.setItem('token', response.data.token);
        
            console.log('Login successful');
            console.log(response.data);

            navigate('/broadcasts')
        } catch (error) {
            console.error('Error:', error);
            if (error.response && error.response.data) {
                setError(error.response.data.message);
                console.log(error.response.data.message);

            } else {
                setError('Login failed. Please try again later.');
            }

            return
        }
    };

    return (
        <div className='text-white h-screen flex justify-center items-center bg-cover'  style={{"backgroundImage" : "url('../..//background.jpg')"}}>
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg background-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-4xl text-white fornt-black text-center mb-6">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="relative my-6">
                        <div className="w-72">
                            <div className="relative h-10 w-full min-w-[200px]">
                                <div className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
                                <i className="fas fa-heart" aria-hidden="true"></i>
                                </div>
                                <input
                                type="text"
                                name="AUsername"
                                value={formData.AUsername}
                                onChange={handleChange}
                                placeholder="Username"
                                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                required
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-200 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Username
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="relative my-6">
                            <div className="relative h-10 w-full min-w-[200px]">
                                <div className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
                                <i className="fas fa-heart" aria-hidden="true"></i>
                                </div>
                                <input
                                type="password"
                                name="APassword"
                                value={formData.APassword}
                                onChange={handleChange}
                                placeholder="Password"
                                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                required
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-200 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                                </label>
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