import React from 'react';
import mail from '../assets/mail.png';
import { useNavigate } from 'react-router-dom';

const ResetPasswordEmail = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <div className="background flex justify-center items-center">
            <div className="resetEmail w-[100vw] sm:w-[40vw] relative z-10 h-[70vh] bg-white py-9 reset mx-auto my-10 border-2 border-gray-200 rounded-lg shadow-2xl flex flex-col justify-center items-center">
                <img src={mail} alt="" className='w-[20%] mx-auto ' />
                <h1 className='text-center my-2'>Recovery email sent</h1>
                <p className='text-sm text-center p-3'>A password recovery link has been sent to your email. Click on the link and reset your password</p>

                <button onClick={()=> navigate('/')} className="login_btn mx-28 disabled:bg-gray-400 disabled:cursor-not-allowed text-center p-2 w-[280px] my-3 bg-blue-500 hover:bg-blue-700 text-white rounded-lg" >Back to Login</button>


            </div>
            </div>
        </>
    );
}

export default ResetPasswordEmail;
