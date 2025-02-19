import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ListEmployeeComponent from './component/ListEmployeeComponent'
import FooterComponent from './component/FooterComponent'
import HeaderComponent from './component/HeaderComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path='/' element = {<ListEmployeeComponent/>}></Route>
        <Route path='/employees' element = {<ListEmployeeComponent/>}></Route>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
