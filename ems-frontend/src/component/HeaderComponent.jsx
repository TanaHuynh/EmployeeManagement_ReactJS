import React from 'react'
import { NavLink } from 'react-router-dom'
function HeaderComponent() {
  return (
    <div>
        <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="https://www.javaguides.net">Employee Management System</a>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/employees'>Employees</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink className='nav-link' to='/departments'>Departments</NavLink>
          </li>

        </ul>
  </div>
        </nav>
        </header>
    </div>
  )
}

export default HeaderComponent