import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AppBar from '../components/AppBar';
import NavBar from '../components/NavBar';
import peanutsImage from '../assets/peanuts.jpg'; // Adjust the path as necessary
import peanutslogo from '../assets/peanutslogo.png'; // Adjust the path as necessary
import increase from '../assets/increase.png';

const Home = () => {
  // State variable for balance and countdown
  const [balance, setBalance] = useState(0);
  const [countdown, setCountdown] = useState(null); // for countdown time

  // Function to fetch balance from backend
  const fetchBalance = async () => {
    try {
      const response = await axios.get('http://localhost:3500') // Update the endpoint as necessary
      setBalance(response.data.balance);
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  const handleStartFarming = () => {
    // Start the countdown or 5 hours(18000 seconds)
    setCountdown(18000);
  };

  // Effect for managing the countdown
  useEffect (() => {
    if (countdown === null) return;

    const interval = setInterval(() =>{
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0; // stop the countdown at 0
        }
        return prev - 1; // decrease by 1 second
      });
    }, 1000);

    return () => clearInterval(interval); //cleanup on unmount
  }, [countdown]
);

// Function to format the countdown time
  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };    

  return (
    <>
      <AppBar />
      <img 
        src={peanutsImage}
        className="peanuts-image" 
        alt="Peanuts Logo"
        style={{ width: '100%', height: 'auto' }} // Adjust the size as needed  
      />
      <div className='centered-text'>👋 Hi, Clement</div>
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <div className='card' style={{ width: '90%', maxWidth: '300px' }}>
          <div className='card-body'>
            <h5 className='text-center'>Your Balance</h5> {/* Add text-center class */}
            <img 
              src={peanutslogo}
              className="img-pics" 
              alt="Peanuts Logo"
              style={{ width: '20px', height: '20px' }} // Adjust the size as needed  
            />
            <span className='number'>{balance}</span> {/*Display the balance*/}
            <div className='button-center'>
              <button 
                className="btn btn-primary btn-lg" 
                type="button"
                onClick={() => { fetchBalance(); handleStartFarming(); }} //fetch balance
              >
                {countdown !== null ? `Get after ${formatTime(countdown)}`: 'Start farming'}
                {countdown !== null && (
                  <i className="bi bi-clock" style={{ marginLeft: '8px' }}></i>
                )}
                {!countdown && (
                  <img 
                    src={increase}
                    className="increase-image" 
                    alt="increase Logo"
                    style={{ width: '1rem', height: '1rem' }}  
                  />
                )}
              </button>   
            </div>
          </div>
        </div>
      </div>

      <NavBar />
    </>
  )
}

export default Home