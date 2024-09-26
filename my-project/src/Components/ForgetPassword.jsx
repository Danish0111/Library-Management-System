import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import envelop from '../assets/envelope.png';
import lock from '../assets/lock.png';
import forget from '../assets/info.png';
import arrow from '../assets/arrow.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm(
        { mode: 'onChange' }
    );

    const onSubmit = data => {
        console.log(data);
        navigate('/reset-password-email')
    };

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <>
            <div className="background"></div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="login mx-auto flex flex-col py-9 justify-center my-14 border-2 border-gray-200 rounded-lg shadow-2xl">
                    <img src={forget} alt="" className='w-[20%] mx-auto my-2' />
                    <h1 className='text-center my-2'>Forgot Password</h1>

                    <div className="email flex flex-col text-[14px] gap-2 mx-6 ">
                        <div className='font-medium text-center my-2 w-[100%] mx-auto' htmlFor="">Enter your Email and we'll send you a link to reset your password</div>
                        <div className="input flex items-center">
                            <i className='w-[15px] relative z-10 m-2'><img src={envelop} alt="" /></i>
                            <input {...register("email", { required: { value: true, message: "*This field is required" }, pattern: { value: /^[^\s@]+@gmail\.com$/, message: "*email must end with @gmail.com" } })} placeholder="Enter Email Address" type="text" id='email' className='p-2 px-8 border-2 border-gray-200 w-[90%] rounded-md absolute' />
                            {errors.email && <div className='text-red-500 relative z-10 text-[11px] sm:text-[13px] sm:text-left leading-none top-[39px] sm:top-[30px] pb-4 sm:pb-0 w-full'>{errors.email.message}</div>}
                        </div>
                    </div>


                    <div className='flex justify-center items-center'>
                        <input disabled={!isValid} type='submit' className="login_btn disabled:bg-gray-400 disabled:cursor-not-allowed text-center p-2 w-[280px] mx-28 mt-14 bg-blue-500 hover:bg-blue-700 text-white rounded-lg" value="Submit" />
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

export default ForgetPassword;
