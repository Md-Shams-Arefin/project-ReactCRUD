import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      Made with React by Md. Shamsul Arefin
      <Link to="/">
      <button>Home?</button></Link>
    </div>
  )
}

export default Footer
