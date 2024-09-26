import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import envelop from '../assets/envelope.png';
import lock from '../assets/lock.png';
import user from '../assets/user.png';
import edit from '../assets/edit.png';

const Signup = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
        mode: 'onChange',
        defaultValues: { email }
    });

    const onSubmit = data => {
        console.log('Signup data:', data);
        navigate(`/dashboard/?user=${encodeURIComponent(data.username)}`);
    };

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const password = watch('password');

    return (
        <>
            <div className="background"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="login signup mx-auto my-14 border-2 border-gray-200 rounded-lg shadow-2xl">
                    <h1 className='text-center my-2'>Create a new account</h1>

                    <div className="email flex flex-col text-[13px] gap-2 mx-6 my-6">
                        <label className='font-medium text-blue-500' htmlFor="">Email Address</label>
                        <div className="input flex items-center justify-between">
                            <i className='w-[15px] relative z-10 m-2'><img src={envelop} alt="" /></i>
                            <input {...register("email", {
                                required: { value: true, message: "*This field is required" },
                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "*Invalid email address" }
                            })} placeholder="Enter Email Address" disabled type="text" id='email' className='disabled:cursor-not-allowed disabled:bg-blue-100 p-2 px-8 border-2 border-gray-200 w-[90%] rounded-md absolute' />
                            {errors.email && <div className='text-red-500 relative z-10 text-[11px] top-[30px] w-full'>{errors.email.message}</div>}
                            <i onClick={() => navigate('/email-verification')} className=' relative z-10 m-2 mx-4 cursor-pointer bg-blue-300 rounded-full p-1'><img className='w-[20px]' src={edit} alt="edit" /></i>
                        </div>
                    </div>

                    <div className="username flex flex-col text-[13px] gap-2 mx-6 my-6 mb-2">
                        <label className='font-medium text-blue-500' htmlFor="">Create Username</label>
                        <div className="input flex items-center">
                            <i className='w-[15px] relative z-10 m-2'><img src={user} alt="" /></i>
                            <input {...register("username", {
                                required: { value: true, message: "*This field is required" },
                                minLength: { value: 4, message: "*Username must be at least 4 characters" },
                                pattern: { value: /^(?=.*[a-zA-Z].*[a-zA-Z])[a-zA-Z0-9._-]{3,}$/, message: "*Username must contain at least 2 alphabets" }
                            })} placeholder="Enter Username" type="text" id='username' className='p-2 px-8 border-2 border-gray-200 w-[90%] rounded-md absolute' />
                            {errors.username && <div className='text-red-500 relative z-10 text-[11px] sm:text-[13px] sm:text-left leading-none top-[39px] sm:top-[30px] pb-4 sm:pb-0 w-full'>{errors.username.message}</div>}
                        </div>
                    </div>

                    <div className="passwords sm:flex w-[100%] justify-between items-center">
                        <div className="password flex flex-col w-full text-[13px] gap-2 mx-6 my-6">
                            <label className='font-medium text-blue-500' htmlFor="">Create password</label>
                            <div className="input-wrapper relative w-[16vw]">
                                <i className='icon w-[15px] absolute z-10 m-2'><img src={lock} alt="" /></i>
                                <input {...register("password", {
                                    required: { value: true, message: "*This field is required" },
                                    minLength: { value: 6, message: "*Password must be at least 6 characters" }
                                })} placeholder="Password" type={passwordShown ? 'text' : 'password'} className='p-2 pl-8 pr-10 border-2 border-gray-200 w-full rounded-md focus:border-blue-500 focus:ring-blue-500' />
                                {errors.password && <div className='text-red-500 absolute px-6 py-2 z-10 text-[11px] sm:text-[13px] sm:text-left leading-none top-[40px]  pb-4 sm:pb-0 w-full'>{errors.password.message}</div>}
                                <button onClick={togglePasswordVisibility} type="button" className="show-password absolute inset-y-0 right-0 flex items-center px-2">
                                    {passwordShown ? (
                                        <svg className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    ) : (
                                        <svg className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                                            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                                            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                                            <line x1="2" x2="22" y1="2" y2="22"></line>
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="confirm-password flex flex-col w-full text-[13px] gap-2 mx-6 my-6">
                            <label className='font-medium text-blue-500' htmlFor="">Confirm password</label>
                            <div className="input-wrapper relative w-[16vw]">
                                <i className='icon w-[15px] absolute z-10 m-2'><img src={lock} alt="" /></i>
                                <input {...register("confirmPassword", {
                                    required: { value: true, message: "*This field is required" },
                                    validate: value =>
                                        value === password || "Passwords do not match"
                                })} placeholder="Password" type={passwordShown ? 'text' : 'password'} className='p-2 pl-8 pr-10 border-2 border-gray-200 w-full rounded-md focus:border-blue-500 focus:ring-blue-500' />
                                {errors.confirmPassword && <div className='text-red-500 absolute px-6 py-2 z-10 text-[11px] sm:text-[13px] sm:text-left leading-none top-[39px] sm:top-[40px] pb-4 sm:pb-0 w-full'>{errors.confirmPassword.message}</div>}
                                <button onClick={togglePasswordVisibility} type="button" className="show-password absolute inset-y-0 right-0 flex items-center px-2">
                                {passwordShown ? (
                                        <svg className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    ) : (
                                        <svg className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                                            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                                            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                                            <line x1="2" x2="22" y1="2" y2="22"></line>
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center'>
                        <input disabled={!isValid} type='submit' className="signup_btn disabled:bg-gray-400 disabled:cursor-not-allowed text-center p-2 w-[280px] mx-28 mt-10 bg-blue-500 hover:bg-blue-700 text-white rounded-lg" value="Signup" />
                    </div>

                    <div className="existing_login flex justify-center text-[13px] items-center gap-2 my-2">
                        <span className=''>Already have an account?</span>
                        <Link to="/" className='text-blue-500 hover:text-blue-700'>Login</Link>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Signup;
