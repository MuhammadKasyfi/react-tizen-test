import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <header className='flex flex-col items-center gap-4 p-4 text-center'>
        <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl">
            Food Menu Display
        </h1>
        <h2 className="m-auto text-center">
            A basic template of Samsung Tizen TV
        </h2>
        </header>
        <nav className="w-full">
        <ul className="w-full items-center gap-2 p-4">
            <li>
            <Link to="/" className='text-2xl sm:text-3xl md:text-4xl'>Home</Link>
            </li>
            <li>
            <Link to="/edit" className='text-2xl sm:text-3xl md:text-4xl'>Edit</Link>
            </li>
        </ul>
        </nav>
    </>
  )
}
