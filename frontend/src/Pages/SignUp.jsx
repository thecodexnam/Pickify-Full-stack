import React from 'react'

const SignUp = () => {
  const primaryColor = "#22C55E";
  const hoverColor = "#16A34A";
  const bgColor = "#FFF7ED";
  const borderColor = "#E5E7EB";
  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4' style={{backgroundColor: bgColor}}>
      <div className={`bg-white rounded-xl shadow-lg p-8 max-w-md w-full border border-${borderColor}`}>
        <h1 className='text-2xl font-bold text-center mb-6' style={{color: primaryColor}}>Pickify</h1>
        <p className='text-center text-gray-600 mb-6'>Create your account</p>
        <form>
          <div className='mb-4'>
            <label htmlFor="name" className='block text-gray-700 mb-2'>Name</label>
            <input type="text" id="name" className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-${primaryColor}`}/>
          </div>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-gray-700 mb-2'>Email</label>
            <input type="email" id="email" className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-${primaryColor}`}/>
          </div>
          <div className='mb-4'>
            <label htmlFor="password" className='block text-gray-700 mb-2'>Password</label>
            <input type="password" id="password" className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-${primaryColor}`}/>
          </div>
          <div>
            <label>role</label>
            <select name="role" id="role" className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-${primaryColor}`}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="delivery_boy">Delivery Boy</option>  
            </select>
          </div>
          <button type="submit" className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-${primaryColor}`} style={{backgroundColor: primaryColor, color: "white"}} onMouseEnter={(e) => e.target.style.backgroundColor = hoverColor} onMouseLeave={(e) => e.target.style.backgroundColor = primaryColor}>Sign Up</button>
        </form>
        <p className='text-center text-gray-600 mt-6'>Already have an account? <a href="#" className='text-blue-500 hover:underline'>Sign In</a></p>
      </div>
    </div>
  )
}

export default SignUp
