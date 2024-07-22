import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import envelop from '../assets/envelope.png';
import lock from '../assets/lock.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange'
  });

  const onSubmit = data => {
    console.log(data);
    navigate('/dashboard')
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const validateEmailOrUsername = (value) => {
    const gmailPattern = /^[^\s@]+@gmail\.com$/; 
    const usernamePattern = /^(?=.*[a-zA-Z].*[a-zA-Z])[a-zA-Z0-9._-]{3,}$/;

    if (gmailPattern.test(value) || usernamePattern.test(value)) {
      return true;
    }

    return "*Must be a valid username or email ending with @gmail.com";
  };

  return (
    <>
      <div className="background"></div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="login mx-auto my-14 border-2 border-gray-200 rounded-lg shadow-2xl">
          <h1 className='text-center my-2'>Login to your account</h1>

          <div className="email flex flex-col text-[13px] gap-2 mx-6 my-6">
            <label className='font-medium text-blue-500' htmlFor="">Email Address/ Username</label>
            <div className="input flex items-center">
              <i className='w-[15px] relative z-10 m-2'><img src={envelop} alt="" /></i>
              <input {...register("email", { required: { value: true, message: "*This field is required" }, validate: validateEmailOrUsername })} placeholder="Enter Email Address/ Username" type="text" id='email' className='p-2 px-8 border-2 border-gray-200 w-[90%] rounded-md absolute' />
              {errors.email && <div className='text-red-500 relative z-10 top-[30px] w-full'>{errors.email.message}</div>}
            </div>
          </div>

          <div className="password flex flex-col text-[13px] gap-2 mx-6 my-6">
            <label className='font-medium text-blue-500' htmlFor="">Password*</label>
            <div className="input flex items-center justify-between">
              <i className='w-[15px] relative z-10 m-2'><img src={lock} alt="" /></i>
              <input {...register("password", { required: { value: true, message: "*This field is required" }, minLength: { value: 8, message: "*password must contain at least 6 chars" } })} placeholder="Password" type={passwordShown ? 'text' : 'password'} className='p-2 px-8 border-2 border-gray-200 w-[90%] rounded-md absolute focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ' />
              {errors.password && <div className='text-red-500 relative z-10 top-[30px] w-full'>{errors.password.message}</div>}
              <button onClick={togglePasswordVisibility} type="button" className="relative top-0 end-0 p-3.5 rounded-e-md">
                {passwordShown ? (
                  <svg className="flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                ) : (
                  <svg className="flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                    <line x1="2" x2="22" y1="2" y2="22"></line>
                  </svg>
                )}
              </button>
            </div>
            <Link to="/forget-password" className="forget text-blue-500 flex justify-end hover:cursor-pointer hover:text-blue-700">
              <span>Forget Password?</span>
            </Link>
          </div>

          <input disabled={!isValid} type='submit' className="login_btn disabled:bg-gray-400 disabled:cursor-not-allowed text-center p-2 w-[280px] mx-28 mt-6 bg-blue-500 hover:bg-blue-700 text-white rounded-lg" value="Login" />
          <div className="signup flex justify-center my-2 text-[13px] gap-1">
            <span>Don't have an account?</span>
            <Link to="/email-verification" className='text-blue-500 hover:text-blue-700'>Signup</Link>
          </div>

          <div className="partition flex justify-center items-center gap-2 my-1">
            <span className='h-[1px] w-[150px] bg-gray-400'>

            </span>
            <span className='text-sm'>OR Login with</span>
            <span className='h-[1px] w-[150px] bg-gray-400'>

            </span>
          </div>

          <div className="google_signup"></div>
        </div>
      </form>
    </>
  );
}

export default Login;
