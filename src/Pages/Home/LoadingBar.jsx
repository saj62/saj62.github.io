import React from 'react'

const LoadingBar = ({ progress }) => {
    return (
      <div className='bg-bg bg-opacity-75 h-screen flex items-center justify-center'>
        <div className="loading-bar bg-bg bg-opacity-75 flex">
          <div
            className="loading-bar-progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
    );
  };
  
  export default LoadingBar;