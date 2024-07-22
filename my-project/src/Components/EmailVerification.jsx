import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import envelop from '../assets/envelope.png';
import Emailverification from '../assets/email-verification.png';
import arrow from '../assets/arrow.png';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm(
        {mode: 'onChange'}
    );

    const onSubmit = data => {
        console.log(data)
        navigate(`/otp?email=${encodeURIComponent(data.email)}`)
        
    };

    return (
        <>
            <div className="background"></div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="login email-verification flex flex-col justify-center  mx-auto my-14 border-2 border-gray-200 rounded-lg shadow-2xl">
                    <img src={Emailverification} alt="" className='w-[25%] mx-auto my-4' />
                    <h1 className='text-center my-2'>Email Verification</h1>

                    <div className="email flex flex-col text-[14px] gap-2 mx-6 ">
                        <div className='font-medium text-center my-2 w-[90%] mx-auto' htmlFor="">Enter your email and we'll send an OTP to this email</div>
                        <div className="input flex items-center">
                            <i className='w-[15px] relative z-10 m-2'><img src={envelop} alt="" /></i>
                            <input {...register("email", { required: { value: true, message: "*This field is required" }, pattern: {value: /^[^\s@]+@gmail\.com$/, message: "*email must end with @gmail.com"} })} placeholder="Enter Email Address" type="text" id='email' className='p-2 px-8 border-2 border-gray-200 w-[90%] rounded-md absolute' />
                            {errors.email && <div className='text-red-500 relative z-10 top-[30px] w-full'>{errors.email.message}</div>}
                        </div>
                    </div>

                    
                    
                        <input disabled={!isValid} type='submit' className="login_btn mx-28 disabled:bg-gray-400 disabled:cursor-not-allowed text-center p-2 w-[280px] mt-14 bg-blue-500 hover:bg-blue-700 text-white rounded-lg" value="Submit" />
                    
                    <Link to="/" className="backTOLogin  text-blue-500 hover:text-blue-600 flex justify-center items-center gap-1 my-2 text-sm">
                        <span><img className='w-[20px]' src={arrow} alt="" /></span>
                        <span className='text-center hover:underline hover:underline-offset-1'>Back to login</span>
                    </Link>

                </div>
            </form>
        </>
    );
}

export default EmailVerification;
