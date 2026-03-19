import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const ForgetPassword = () => {
    const [step,setStep] = useState(1);
    const navigate = useNavigate();


  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-orange-50 via-white to-green-50'>
      {/* Decorative elements */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>

      {/* Main card */}
      <div className='relative z-10 bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border border-gray-100 backdrop-blur-sm'>

        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-4xl font-black text-center bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-2'>Pickify</h1>
          <p className='text-center text-gray-500 text-sm font-medium tracking-wide'>Forget Password</p>
        </div>

        {/* Form */}
        <form className='space-y-5'>
          {/* Email Input */}
          <div className='group'>
            <label htmlFor="email" className='block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-green-600 transition-colors'>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='you@example.com'
              className='w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-50 transition-all duration-200 text-gray-900 placeholder-gray-400'
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className='w-full px-4 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-green-700 hover:to-green-600 active:scale-95 transition-all duration-200 text-base tracking-wide'
          >
            Send Reset Link
          </button>
        </form>

        {/* Footer */}
        <p className='text-center text-gray-600 text-md mt-2'>
          Remember your password?
          <a href="#" className='font-semibold text-green-600 hover:text-green-700 ml-1 transition-colors' onClick={() => navigate("/signin")}>Sign In</a>
        </p>
      </div>
    </div>  
  )
}

export default ForgetPassword;