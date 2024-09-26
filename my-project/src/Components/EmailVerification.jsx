import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import envelop from '../assets/envelope.png';
import Emailverification from '../assets/email-verification.png';
import arrow from '../assets/arrow.png';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Loader from './Loader';


const EmailVerification = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid, isSubmitting },
    } = useForm(
        { mode: 'onChange' }
    );

    const onSubmit = async (data) => {
        try {
            const r = await fetch('http://localhost:3000/', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = await r.text();
            console.log(data, res);
            navigate(`/otp?email=${encodeURIComponent(data.email)}`);
        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (
        <>
            <div className="background"></div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="login email-verification py-9 flex flex-col justify-center mx-auto my-12 border-2 border-gray-200 rounded-lg shadow-2xl">
                    <img src={Emailverification} alt="" className='w-[30%] sm:w-[25%] mx-auto my-4' />
                    <h1 className='text-center my-2'>Email Verification</h1>

                    <div className="email flex flex-col text-[14px] gap-2 mx-6 ">
                        <div className='font-medium text-center my-2 w-[90%] mx-auto' htmlFor="">Enter your email and we'll send an OTP to this email</div>
                        <div className="input flex items-center w-[100%]">
                            <i className='w-[15px] relative z-10 m-2'><img src={envelop} alt="" /></i>
                            <input {...register("email", { required: { value: true, message: "*This field is required" }, pattern: { value: /^[^\s@]+@gmail\.com$/, message: "*email must end with @gmail.com" } })} placeholder="Enter Email Address" type="text" id='email' className='p-2 px-8 border-2 border-gray-200 w-[90%] rounded-md absolute' />
                            {errors.email && <div className='text-red-500 relative flex z-10 text-[11px] sm:text-[13px] sm:text-left leading-none top-[39px] sm:top-[30px] pb-4 sm:pb-0 w-full'>{errors.email.message}</div>}
                        </div>
                    </div>


                    {/* {isSubmitting && <Loader/>} */}

                    {isSubmitting &&
                        <div className="absolute bg-white bg-opacity-60 z-10 h-[80vh] w-full flex items-center justify-center">
                            <div aria-label="Loading..." role="status" className="flex items-center relative top-24 text-[12px] space-x-2">
                                <svg className="h-8 w-8 animate-spin stroke-blue-600" viewBox="0 0 256 256">
                                    <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="24"></line>
                                    <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                                    </line>
                                    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="24"></line>
                                    <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                                    </line>
                                    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="24"></line>
                                    <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                                    </line>
                                </svg>
                                <span className="text-xl font-medium text-blue-600">Loading...</span>
                            </div>
                        </div>
                    }
                    <div className='flex justify-center items-center'>
                        <input disabled={!isValid || isSubmitting} type='submit' className="login_btn mx-28 disabled:bg-gray-400 disabled:cursor-not-allowed text-center p-2 w-[280px] mt-14 bg-blue-500 hover:bg-blue-700 text-white rounded-lg" value="Submit" />
                    </div>

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
