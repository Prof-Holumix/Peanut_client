import React from 'react'
import AppBar from '../components/AppBar';
import NavBar from '../components/NavBar';
import questionmark from '../assets/questionmark.png';
import megaphone from '../assets/megaphone.png';
import searchuser from '../assets/searchuser.png';

const friends = () => {
  return (
    <>
    <AppBar />
    <div className='Invites-header'>
      <img src={megaphone}
        className="mega-phone" 
        alt="mega phone"
      />
      <div className='invite-text'>Invites</div>
    </div>
    <div className="card-point-earned" style={{ width: '18rem' }}>
      <div className="card-body">
        <div className='card-body-point-earned-text'>
          <h2 classname='point-earned'>Points Earned</h2>
          <p className='points-number'>0</p>
        </div>
        <button className="btn-invite btn-dark  btn-lg w-100" type="button">
          Invite friends
        </button>
        <p 
          class="card-text"
          style= {{ color:'#000000'}}
        >
          Get 15% from your friends +5% from their referrals.
        </p>
      </div>
    </div>
    <div className="card-friends-referrals" style={{ width: '18rem' }}>
      <div class="card-body">
        <div className='card-titles'>
          <h5 class="card-title">0 Friends</h5>
          <img src={questionmark}
            className="question-mark" 
            alt="question mark"
          />
          <h5 class="card-title">0 Referrals</h5>
          <img src={questionmark}
            className="question-mark" 
            alt="question mark"
          />
        </div>
        <img src={searchuser}
        className="search-user" 
        alt="search user"
      />
        <p class="card-text-friends-referrals">We haven't found any users that joined with your invite. Invite to receive points</p>
      </div>
    </div>
    <NavBar />
    </>
  )
}

export default friends