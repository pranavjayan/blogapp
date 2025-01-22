import React from 'react'
import Navbar1 from './Navbar1'

const Main1 = ({child}) => {
  return (
    <div>
        <Navbar1/>
        {child}
    </div>
  )
}

export default Main1