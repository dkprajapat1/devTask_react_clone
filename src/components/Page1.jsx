import React from 'react'

const Page1 = () => {
  return (
    <div className='flex items-center mt-3 justify-center px-4'>
      
      <div className='bg-gray-50 p-5 w-full sm:w-[60vw] md:w-[40vw] lg:w-[23vw] min-h-[90vh] rounded flex flex-col justify-end'>
        
        <div>
          <h1 className='text-3xl font-bold'>Welcome to PopX</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, nemo.</p>
        </div>

        <div className='flex flex-col gap-2 my-5'>
          <button className='bg-gradient-to-r from-violet-600 to-violet-700 text-white p-3 rounded'>
            <a href="/create">Create Account</a>
          </button>

          <button className='bg-violet-600/50 text-black font-bold p-3 rounded'>
            <a href="/login">Already registered? Login</a>
          </button>
        </div>

      </div>

    </div>
  )
}

export default Page1