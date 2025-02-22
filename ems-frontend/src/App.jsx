import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ListEmployeeComponent from './component/ListEmployeeComponent'
import FooterComponent from './component/FooterComponent'
import HeaderComponent from './component/HeaderComponent'
import EmployeeComponent from './component/EmployeeComponent'
import ListDepartmentComponent from './component/ListDepartmentComponent'
import DepartmentComponet from './component/DepartmentComponet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path='/' element = {<ListEmployeeComponent/>}></Route>
        <Route path='/employees' element = {<ListEmployeeComponent/>}></Route>
        <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>
        <Route path='/edit-employee/:id' element = {<EmployeeComponent/>}></Route>

        <Route path='/departments' element = {<ListDepartmentComponent/>}></Route>
        <Route path='/add-department' element = {<DepartmentComponet/>}></Route>
        <Route path='/edit-department/:id' element = {<DepartmentComponet/>}></Route>

      </Routes>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
