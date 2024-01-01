import { useState } from 'react'

import viteLogo from '/vite.svg'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PetDetail from './pages/PetDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter> 
        <Routes>
          <Route index element ={<Home/>}/>
          <Route path='petDetail' element={<PetDetail/>}/>
          {/* <Route path='about' element={<About/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='contact' element={<Contact/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
