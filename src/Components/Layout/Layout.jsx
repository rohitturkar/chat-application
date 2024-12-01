import React from 'react'
import Navbar from '../Navbar'

const Layout = ({element}) => {
  return (
    <div className='mx-2'>
      <Navbar/>
      {element}
    </div>
  )
}

export default Layout