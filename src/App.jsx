import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import CarouselDisplay from './components/CarouselDisplay'
import EditDisplay from './components/EditDisplay'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col mx-auto w-full'>
        <section className='min-h-screen flex flex-col'>
        <Header />
        <Routes>
          <Route path='/' element={<CarouselDisplay />} />
          <Route path='/edit' element={<EditDisplay />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        </section>
          

      </div>
    </>
  )
}

export default App
