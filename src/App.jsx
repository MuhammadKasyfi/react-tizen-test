import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import CarouselDisplay from './components/CarouselDisplay'
import EditDisplay from './components/EditDisplay'
import './css/FoodDisplay.css'
import supabase from './utils/supabase'
import { Navigate, Route, Routes } from 'react-router-dom'
import { set } from '@cloudinary/url-gen/actions/variable'

function App() {

  return (
    <>
      <section className='main-screen'>
        <Header />
        <Routes>
          <Route path='/' element={<CarouselDisplay />} />
          <Route path='/edit' element={<EditDisplay />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </section>
    </>
  )
}

export default App
