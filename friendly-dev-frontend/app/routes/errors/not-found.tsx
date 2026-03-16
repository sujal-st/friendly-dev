import React from 'react'
import { Link } from 'react-router'

function NotFounfPage() {
  return (
    <div  className='flex flex-col items-center justify-center text-center px-6 min-h-[70vh]'>
      <h1 className='font-extrabold text-6xl text-blue-400 mb-2'>404</h1>
      <h2 className="text-2xl font-semibold text-gray-100 mb-2">Page Not Found</h2>    
      <p className="text-gray-400 mb-2">Page you are looking for doee not exist</p>
      <Link to="/" className='bg-blue-600 text-white font-semibold rounded p-1 hover:bg-blue-800 transition'>Go Home</Link>
      </div>
  )
}

export default NotFounfPage
