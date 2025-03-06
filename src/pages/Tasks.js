import React from 'react'
import NavBar from '../components/NavBar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import telegramlogo from '../assets/telegramlogo.png';
import youtubelogo from '../assets/youtubelogo.png';
import xlogo from '../assets/xlogo.png';

const Tasks = () => {
  return (
    <>
      <nav className='tasks-bar'>
        <div 
          className='tasks-text'
          style= {{ margin: '10px' }}
        >
          Tasks
        </div>
        <i className="bi bi-chevron-down" />
      </nav>
      <div className="tasks-card" style={{ width: '100%' }}>
      <div className="card-body" >
        <div className='tasks-icons'>
          <img 
            src={telegramlogo}
            className="telegram-logo" 
            alt="telegram Logo"
            style={{ width: '2rem', height: '2rem' }}  
          />
          <h5 className="tasks-card-title">Subscribe to TG</h5>
        </div>
        <hr className="task-divider" />
        <div className='card-point'>
          <p className="card-text">+300</p>
          <button 
            className="perform btn-lg" 
            type="submit"
            style= {{ border: 'none', background: 'transparent' }}
          >
            Perform
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
      <div className="tasks-card" style={{ width: '100%' }}>
      <div className="card-body">
        <div className='tasks-icons'>
          <img 
            src={youtubelogo}
            className="youtube-logo" 
            alt="youtube logo"
            style={{ width: '2rem', height: '2rem' }}  
          />
          <h5 className="tasks-card-title">Subscribe to Youtube</h5>
        </div>
        <hr className="task-divider" />
        <div className='card-point'>
          <p className="card-text">+300</p>
          <button 
            className="perform btn-lg" 
            type="submit"
            style= {{ border: 'none', background: 'transparent' }}
          >
            Perform
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
      <div className="tasks-card" style={{ width: '100%' }}>
      <div className="card-body">
        <div className='tasks-icons'>
          <img 
            src={xlogo}
            className="x-logo" 
            alt="x logo"
            style={{ width: '2rem', height: '2rem' }}  
          />
          <h5 className="tasks-card-title">Follow on X</h5>
        </div>
        <hr className="task-divider" />
        <div className='card-point'>
          <p className="card-text">+300</p>
          <button 
            className="perform btn-lg" 
            type="submit"
            style= {{ border: 'none', background: 'transparent' }}
          >
            Perform
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
      <div className="tasks-card" style={{ width: '100%' }}>
      <div className="card-body">
        <div className='tasks-icons'>
          <img 
            src={xlogo}
            className="x-logo" 
            alt="x logo"
            style={{ width: '2rem', height: '2rem' }}  
          />
          <h5 className="tasks-card-title">Like post on X</h5>
        </div>
        <hr className="task-divider" />
        <div className='card-point'>
          <p className="card-text">+300</p>
          <button 
            className="perform btn-lg" 
            type="submit"
            style= {{ border: 'none', background: 'transparent' }}
          >
            Perform
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
      <NavBar />
    </>
  )
}

export default Tasks