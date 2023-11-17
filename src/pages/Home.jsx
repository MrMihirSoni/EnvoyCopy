import React, { useContext } from 'react';
import StartDemo from '../components/MainComponents/StartDemo';
import FirstSlider from '../components/MainComponents/FirstSlider';
import { AuthContext } from '../context/AuthContextProvider';

const Home = () => {
  const {isLoggedIn} = useContext(AuthContext)
  return (
    <>
      {
        isLoggedIn?
    <div>
        <StartDemo/>
        <FirstSlider/>
    </div>:<h1 style={{
      textAlign:'center',
      margin:'20rem'
    }}>You need to log in first</h1>
      }
    </>
  )
}

export default Home
