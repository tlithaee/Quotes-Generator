import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='bg-gray-500/20 backdrop-filter backdrop-blur-lg bg-opacity-30 fixed w-full h-20 z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div className='text-white font-bold text-2xl px-10 opacity-70'>
          <h1>Quotes Generator</h1>
        </div>

        <div>
          <div className='hidden md:flex sm:flex sm:items-center sm:justify-between relative'>
            <div className="dropdown dropdown-end">
              <div 
                tabIndex={0} 
                role="button" 
                className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-white shadow-sm opacity-70"
                onClick={toggleDropdown}>
                Genres
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path 
                    fill-rule="evenodd" 
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" 
                    clip-rule="evenodd" />
                </svg>
              </div>

              {isDropdownOpen && (
                <ul tabIndex={0} className="text-sm menu dropdown-content z-[1] p-2 bg-gray-500/20 shadow bg-base-100 rounded-lg w-52 mt-4 absolute">
                  <li className='py-1'><a className='text-white'>Business</a></li>
                  <li className='py-1'><a className='text-white'>Change</a></li>
                  <li className='py-1'><a className='text-white'>Character</a></li>
                  <li className='py-1'><a className='text-white'>Competition</a></li>
                  <li className='py-1'><a className='text-white'>Education</a></li>
                  <li className='py-1'><a className='text-white'>Famous Quotes</a></li>
                  <li className='py-1'><a className='text-white'>Film</a></li>
                  <li className='py-1'><a className='text-white'>Freedom</a></li>
                  <li className='py-1'><a className='text-white'>Friendship</a></li>
                  <li className='py-1'><a className='text-white'>Future</a></li>
                  <li className='py-1'><a className='text-white'>Happiness</a></li>
                  <li className='py-1'><a className='text-white'>History</a></li>
                  <li className='py-1'><a className='text-white'>Humorous</a></li>
                  <li className='py-1'><a className='text-white'>Inspirational</a></li>
                  <li className='py-1'><a className='text-white'>Life</a></li>
                  <li className='py-1'><a className='text-white'>Motivational</a></li>
                  <li className='py-1'><a className='text-white'>Philosophy</a></li>
                  <li className='py-1'><a className='text-white'>Politics</a></li>
                  <li className='py-1'><a className='text-white'>Sports</a></li>
                  <li className='py-1'><a className='text-white'>Success</a></li>
                  <li className='py-1'><a className='text-white'>Technology</a></li>
                  <li className='py-1'><a className='text-white'>Wisdom</a></li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
