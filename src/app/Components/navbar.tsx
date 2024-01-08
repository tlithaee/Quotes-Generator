import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-gray-500/20 backdrop-filter backdrop-blur-lg bg-opacity-30 fixed w-full h-20 z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div className='text-white font-bold text-2xl px-10 opacity-70'>
          <h1>
            Quotes Generator
          </h1>
        </div>
          <div>
            <ul className='hidden md:flex sm:flex sm:items-center sm:justify-between'>
              <Link href='#Main'>
                <li className=' text-white ml-6 font-semibold text-sm uppercase hover:border-b px-4'>
                  genres
                </li>
              </Link>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar