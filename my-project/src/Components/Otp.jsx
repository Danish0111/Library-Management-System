import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import insurance from '../assets/insurance.png';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Otp = () => {
  const navigate = useNavigate();
  const { handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });

  const [otp, setOtp] = useState('');
  const handleOtpChange = (otp) => {
    setOtp(otp);
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');

  const onSubmit = data => {
    console.log(data)
    navigate(`/signup?email=${encodeURIComponent(email)}`)

  };

  return (
    <>
      <div className="background"></div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="login mx-auto my-14 border-2 border-gray-200 rounded-lg shadow-2xl">
          <img src={insurance} alt="" className='w-[20%] mx-auto mt-8' />
          <h1 className='text-center my-2 '>OTP Varification</h1>
          <p className='text-center'>Enter the otp which we have sended to your email</p>
          <div className="otp flex flex-col text-[14px] gap-2 mx-6">
            <div className="input flex justify-center items-center gap-4 my-6">
              <OtpInput
                value={otp}
                onChange={handleOtpChange}
                numInputs={6}
                separator={<span>-</span>}
                isInputNum={true}
                shouldAutoFocus={true}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  width: '3rem',
                  height: '3rem',
                  margin: '0 0.5rem',
                  fontSize: '1rem',
                  borderRadius: 4,
                  border: '1px solid rgba(0,0,0,0.3)'
                }}
              />
            </div>
          </div>

          <input
            type='submit'
            className="login_btn disabled:bg-gray-400 disabled:cursor-not-allowed text-center p-2 w-[280px] mx-28 mt-10 bg-blue-500 hover:bg-blue-700 text-white rounded-lg"
            value="Verify OTP"
            disabled={!isValid || otp.length !== 6}
          />
          <div className="resend flex justify-center items-center gap-1 my-1">
            <span>did'nt receive otp?</span>
            <a href="" className='text-blue-500 hover:text-blue-700 hover:underline hover:underline-offset-1'>resend</a>
          </div>
        </div>
      </form>
    </>
  );
}

export default Otp;
