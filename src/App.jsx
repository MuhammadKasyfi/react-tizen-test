import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import CarouselDisplay from './components/CarouselDisplay'
import EditDisplay from './components/EditDisplay'
import './css/FoodDisplay.css'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

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
