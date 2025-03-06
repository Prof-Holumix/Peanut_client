import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faClipboardList, faUsers } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <nav className='bottom-navbar'>
      <div className='bottom-container-fluid'>
        <div className='hi'>
          <a className='bottom-navbar-brand' href='/'>
            <FontAwesomeIcon icon={faHome} size="lg" />  
          </a>
          <span style={{ fontSize: '15px' }}>Home</span>
        </div>
        <div className='hi'>
          <a className='bottom-navbar-brand' href='/tasks'>
            <FontAwesomeIcon icon={faClipboardList} size="lg" />
          </a>
          <span style={{ fontSize: '15px' }}>Tasks</span>
        </div>
        <div className='hi'>
          <a className='bottom-navbar-brand' href='/friends'>
            <FontAwesomeIcon icon={faUsers} size="lg" />
          </a>
          <span style={{ fontSize: '15px' }}>Friends</span>
        </div>
      </div>
   </nav>
  )
}

export default NavBar