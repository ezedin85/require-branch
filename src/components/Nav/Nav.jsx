import React from 'react'

function Nav() {
  return (
    <div className='z-10 w-64 sm:w-fit left-1/2 transform -translate-x-1/2 px-5 py-1 bg-white text-black  opacity-80 rounded-full fixed bottom-2 text-xl'>
        <a className='mr-1 sm:mr-4 fixed_buttons transition-all duration-500' href="#home"><i class="fa-solid fa-house"></i></a>
        <a className='mr-1 sm:mr-4 fixed_buttons transition-all duration-500' href="#about"><i class="fa-regular fa-user"></i></a>
        <a className='mr-1 sm:mr-4 fixed_buttons transition-all duration-500' href="#experience"><i class="fa-solid fa-kitchen-set"></i></a>
        <a className='mr-1 sm:mr-4 fixed_buttons transition-all duration-500' href="#projects"><i class="fa-solid fa-list-check"></i></a>
        <a className='fixed_buttons transition-all duration-500' href="#a"><i class="fa-solid fa-people-line"></i></a>
    </div>
  )
}

export default Nav