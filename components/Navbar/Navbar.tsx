import React from 'react'
import Logo from './Logo'
import List from './List'
const Navbar = () => {
  return (
    <div className='flex justify-around w-full px-32 pt-20'>
      <Logo/>
      <List/>
    </div>
  )
}

export default Navbar;