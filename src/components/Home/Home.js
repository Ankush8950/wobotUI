import React from 'react'
import "./Home.css"

const Home = () => {
    return (
        <>
          <div className='homecontainer'>
          <div className='container'>
            <div className='logo'>
              <img src="image/wobot-logo.png" alt="wobot" /> 
            </div>
            <div className='rectangle'>
              <div className='leftreactangle'> </div>
              <div className='rightreactange'></div>
            </div>
          </div>
          <div className='terms'>
            <h3>Terms of use  |  Privacy policy </h3>
          </div>
          </div>     
        </>
    )
}

export default Home
