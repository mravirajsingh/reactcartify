import React from 'react'
import logo from "../assets/images/Brand/logo white.svg"
import download1 from "../assets/images/Brand/play-store.png"
import download2 from "../assets/images/Brand/app-store.png"

function Footer() {
  return (
    <div className='bg-gray-800 max-h-96'>
      <div className='container flex justify-end p-20 pt-0'>
        <ul className='text-white p-4 text-sm'>
          <li>
            <img src={logo} alt="todo" className='app-logo' />
          </li>
          <li className='mt-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
            Auctor libero id et, in gravida. Sit diam duis mauris nulla<br/> cursus.
            Erat et lectus vel ut sollicitudin elit at amet.
          </li>
          <li className='flex mt-8'>
            <a>
            <img src={download1} alt="download1" className='w-40' />
            </a>
            <a>
            <img src={download2} alt="download1" className='w-40' />
            </a>
          </li>
        </ul>
        <ul className='text-white p-4'>
          <li>About Us</li>
          <li>Careers</li>
          <li>Our Stores</li>
          <li>Our Cares</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className='text-white p-4'>
          <li>Customer Care</li>
          <li>Help Center</li>
          <li>Track Your Order</li>
          <li>Corporate & Bulk Purchasing</li>
          <li>Returns & Refunds</li>
        </ul>
        <ul className='text-white p-4'>
          <li>Contact Us</li>
          <li>70 Washington Square South, New York,<br />
            NY 10012, United States</li>
          <li>Email: uilib.help@gmail.com</li>
          <li>Phone: +1 1123 456 780</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer