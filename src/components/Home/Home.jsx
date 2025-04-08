import React from 'react';
import "../Home/Home.css";
import FirstSection from './Sections/firstSection/firstSection.jsx';
import SecondSection from './Sections/secondSection/secondSection.jsx';

const Home = () => {
  return (
    <div className='home-container'>
      <FirstSection/>
      <SecondSection/>

    </div>
  )
}
export default Home