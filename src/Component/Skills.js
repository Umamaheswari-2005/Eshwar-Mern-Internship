import React from'react';
import '../CSS/App.css';
import '../CSS/Skills.css';
import SkillsBG from '../Assets/SkillsBG.gif';
const Skills = () => {
  return (
    <div className='skills'>
        <div className='skills-languages'><h1>Skills</h1>
        <ul>
          <li>C</li>
          <li>C++</li>
          <li>Python</li>
          <li>Java</li>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS</li>
          <li>MySQL</li>
          <li>Mongodb</li>
        </ul></div>
    
        <div className='skills-online-courses'><h2>Online Courses</h2>
        <p>The complete C developer course in Udemy at 2024</p>
        <p>Mastering Data Structures & Algorithms using C and C++ in Udemy at 2024</p>
        <p>Python Tutorial for Beginners in Simplilearn at 2024</p>
        <p>Python Matplotlib in GreatLearning at 2024</p>
        <p>Pandas in Kaggle at 2024</p>
        <p>AI Master Class - Tamil, a 4 weeks training in WiseLearnzn Pvt.Ltd at 2024</p>
        <p>SQL Basics(Standard) in Skill rack at 2024</p>
        <p>Java Basics Programming Course(Hands-On) in Skill rack at 2024</p></div>

        <img className="react-gif" src={SkillsBG} alt="Background GIF" />

    </div>
  );

}

export default Skills;