import React from 'react'
import logo from "../assets/images/Brand/logo.png"
import usericon from "../assets/images/Brand/user.svg"
import carticon from "../assets/images/Brand/cart.svg"

function Navbar() {
  return (
    <>
      <div className='bg-red-500 sm:bg-gray'>
        <ul className='flex pl-20 pt-5 pb-5'>
          <li className='p-4'>
            <img src={logo} alt="todo" className='w-40' />
          </li>
          <li className='p-4'>
            <input type="search" placeholder='Searching for' className='p-2 rounded-l-3xl' />
            <input type="text" name="" id="" className='p-2 rounded-r-3xl w-36 bg-slate-400' />
          </li>
          <li className='p-4 flex justify-end'>
            <a>
              <img src={usericon} alt="usericon" className='w-10' />
            </a>
            <a>
              <img src={carticon} alt="carticon" className='w-10' />
            </a>
          </li>
        </ul>
      </div>

    </>
  )
}

export default Navbar