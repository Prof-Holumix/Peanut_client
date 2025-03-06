import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

const AppBar = () => {
  return (
    <nav className='appbar'>
      <div className='app-container-fluid'>
        <span className='appbar-brand'>
          PEANUTS
        </span>
        <i className="bi bi-chevron-down" />
      </div>
    </nav>
  )
}

export default AppBar