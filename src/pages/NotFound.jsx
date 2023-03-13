
import React from 'react'
import '@styles/NotFound.css'
import NoEncontrado from '@icons/robot-404-error.svg';

const NotFound = () => {
  return (
    <div className='principal'>
      <h1>Error 404</h1>
      <p class="zoom-area">
        <b>Bad Luck</b> Page not found
      </p>
       <section class="error-container">
        <span>
          <span>4</span>
        </span>
        <span>0</span>
        <span>
          <span>4</span>
        </span>
      </section> 

     {/*  <img src={NoEncontrado} alt="logo" className="NoEncontrado" /> */}

      <div class="link-container">            
        <a
          target="_blank"
          href="/"
          class="more-link"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default NotFound
