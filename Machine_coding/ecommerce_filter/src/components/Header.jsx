import React from 'react'

const Header = () => {
  return (
    <nav className='h-5 flex items-center justify-between'>
        <h2 className='text-2xl font-mono'>RoadsideCoder store</h2>
        <input type="text"  placeholder='search a product'/>
    </nav>
  )
}

export default Header