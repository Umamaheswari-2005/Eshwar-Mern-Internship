import React from 'react';
// Ensure you have appropriate styling here
import '../CSS/Home.css'; // Ensure you have appropriate styling here
import MyPhoto from '../Assets/MyPhoto.png';
import HomeBG from '../Assets/HomeBG.gif';


function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div><img src={MyPhoto} alt="MyPhoto" className="home-photo" /></div>
        <div><div>
        <h1>Hi I'm Umamaheswari G</h1>
        </div>
        <div>
        <p className="home-intro">A passionate AI Engineer with a knack for creating engaging and dynamic user experiences.</p>
        </div></div>
      </div>
      <img className="react-gif" src={HomeBG} alt="Background GIF" />
    </div>
  );
}

export default Home;
