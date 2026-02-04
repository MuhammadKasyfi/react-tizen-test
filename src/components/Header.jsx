
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <header className='MenuHeader'>
        <h1 className="FontBold">
            Food Menu Display
        </h1>
        </header>
        <nav>
        <ul className="UList">
            {/* <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/edit">Edit</Link>
            </li> */}
        </ul>
        </nav>
    </>
  )
}
