import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
    return (
        <div className='flex justify-between bg-[rgb(13,136,136)] text-2xl text-white p-7 '>
            <h1 className='cursor-pointer'>Umaima zainab</h1>
            <div className='flex gap-12 underline underline-offset-4 '>
                <Link to='/' className='hover:text-pink-300'>Home</Link>
                <Link to='/about' className='hover:text-pink-300'>About</Link>
                <Link to='/contact' className='hover:text-pink-300'>Contact</Link>
                <Link to='/product' className='hover:text-pink-300'>Products</Link>

            </div>
        </div>
    )
}

export default Navbar