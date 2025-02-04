import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import '../CSS/App.css';
import '../CSS/Project.css';

import LMASbg from '../Assets/LMASbg.gif';
import CGbg from '../Assets/CGbg.gif';
import EMDRbg from '../Assets/EMDRbg.gif';
import VMbg from '../Assets/VMbg.gif';
import ProjectBG from '../Assets/ProjectBG.gif';

const projects = [
  {
    id: 1,
    name: 'EcoSwap: Innovative Plastic Recycling Solution',
    intro: "EcoSwap's vending machines are equipped with advanced software capable of recognizing and accepting only plastic bottles. By providing incentives, these machines not only encourage participation in recycling but also promote environmental awareness. Unlike existing solutions, EcoSwap offers a comprehensive and accessible approach to plastic recycling, ensuring the integrity of the process through accurate plastic waste identification. EcoSwap proposes the installation of vending machines that reward users with chocolates, and coins in exchange for plastic bottles. The project is expected to have a significant impact on the recycling industry and the environmental impact of plastic waste.",
    details: `
      <h3>Project Overview</h3>
      <p>EcoSwap is a groundbreaking project designed to combat plastic pollution by incentivizing plastic recycling. The project, led by Abinandhana C and mentored by Arun R, with team member Umamaheswari G, is affiliated with Sri Eshwar College of Engineering.</p>
      <h3>Project Objectives</h3>
      <p>Plastic pollution is a critical environmental issue, exacerbated by inadequate recycling practices and limited public participation. Current recycling solutions are often inaccessible, lacking user engagement and accurate waste sorting. EcoSwap addresses these challenges by introducing innovative vending machines that incentivize plastic recycling through rewards, fostering a culture of environmental stewardship, and promoting sustainable waste management practices.</p>
      <h3>Technologies Used</h3>
      <h4>Hardware : </h4>  
      <p>LCD Display, Hx711, Servo Motor, Load Cell, Button, Microcontroller, 5V Power Supply, Slider, Arduino Uno (ESP32).
      <h4>Software : </h4>
      <p>Arduino (C Programming).
      <h3>Key Objectives</h3>
      <ul>
        <li>Promoting Recycling: Increase recycling rates by providing a convenient and rewarding way to recycle plastic bottles.</li>
        <li>Environmental Benefits: Reduce environmental pollution and the carbon footprint associated with plastic production by diverting plastic bottles from landfills and oceans.</li>
        <li>Incentivizing Behavior: Motivate people to participate in recycling efforts through rewards such as chocolates, coupons, and coins.</li>
        <li>Education and Awareness: Educate users about recycling benefits, proper disposal methods, and the environmental impacts of plastic waste through interactive displays.</li>
        <li>Community Engagement: Encourage community involvement in environmental sustainability efforts by placing machines in public places like parks, schools, and shopping centers.</li>
        <li>Data Collection: Gather data on recycling habits and trends to inform local governments and businesses on waste management strategies.</li>
      </ul>
      <h3>Achievements</h3>
      <p>Successfully encouraged plastic recycling among children and the general public by offering rewards. Created awareness about the importance of recycling and its environmental benefits. Reduced the time required for factories to segregate plastic waste from non-biodegradable waste. Promoted a culture of environmental stewardship and sustainable waste management practices.</p>`,
    animationClass :VMbg
  },
  {
    id: 2,
    name: 'Learning Management and Assessment Scheduling System',
    intro: "This system offers a centralized platform for managing courses, assessments, enrollments, and student performance. It automates scheduling and record-keeping, enabling users to efficiently manage academic workflows. By incorporating features such as user authentication, detailed course and assessment tracking, and real-time updates, the system ensures accuracy and reliability in educational management.",
    details: `<h3>Project Overview</h3>
      <p>The Learning Management and Assessment Scheduling System is a comprehensive project designed to streamline academic management processes by integrating course management, student enrollment, assessment scheduling, and marks tracking. Developed to cater to modern educational institutions, this system ensures seamless interaction between students, faculty, and administrators.</p>
      <h3>Project Objectives</h3>
      <p>Educational institutions face challenges in managing student data, assessment schedules, and performance tracking due to manual or fragmented systems. This results in inefficiencies, errors, and delays. The Learning Management and Assessment Scheduling System addresses these issues by automating workflows, integrating processes, and improving accessibility and transparency.</p>
      <h3>System Features</h3>
      <ul>
        <li>User Authentication: Secure access for administrators, instructors, and students.</li> 
        <li>Course Management: Add, update, and display course details.</li>
        <li>Enrollment Management: Handle student registrations with real-time updates.</li>
        <li>Assessment Scheduling: Create and manage assessment schedules, including type, date, and time.</li>
        <li>Marks Tracking: Record and display marks with detailed analysis for both students and faculty.</li>
      </ul>
      <h3>Technologies Used</h3>
      <ul>
        <li>Backend: Database schema comprising tables for Users, Students, Courses, Enrollments, Assessments, and Marks.</li>
        <li>Frontend: Interactive interfaces for managing and accessing academic data.</li>
        <h4>Programming Tools:</h4>
        <li>Languages: Java, SQL </li>
        <li>Database: MySQL </li>
        <li>Frameworks: JavaFX/Servlets</li>
      <h3>Key Objectives</h3>
      <ul>
        <li>Streamline Course Management: Enable administrators and instructors to manage course details efficiently.</li>
        <li>Automate Assessment Scheduling: Ensure timely and accurate scheduling of assessments with clear communication to students.</li>
        <li>Enhance Enrollment Management: Simplify student registration and enrollment processes.</li>
        <li>Improve Performance Tracking: Provide detailed tracking of student marks and assessment outcomes.</li>
        <li>Promote Transparency: Allow users to access accurate academic data through a secure and user-friendly platform.</li> 
        <li>Support Data-Driven Decisions: Generate insightful reports to aid academic planning and decision-making.</li>
      </ul>
      <h3>Achievements</h3>
      <p>Automated academic management processes, saving time and reducing manual errors. Enhanced student engagement and academic transparency. Enabled administrators to track and manage academic workflows efficiently. Provided faculty with tools to monitor student performance and manage assessments effectively.</p>`,
    animationClass :LMASbg
  },
  {
    id: 3,
    name : 'Event Tracking and Reporting Dashboard System',
    intro: "This project aims to develop a smart home system that can monitor and control various devices in a home. The system will be able to detect and alert users of any intrusion or abnormal activity, and provide personalized recommendations based on user preferences. The system will also be able to control devices based on user preferences, such as turning on lights or heating the house.",
    details: `
      <h3>Project Overview</h3>
      <p>The Event Tracking and Reporting Dashboard System is a comprehensive solution designed to streamline the management of events by providing real-time monitoring, reporting, and visualization of key metrics such as attendee engagement, session popularity, and logistical efficiency. Tailored for event organizers, this system offers a centralized platform to manage event workflows, analyze data, and generate actionable insights, ensuring the smooth execution of events.</p>
      <h3>Project Objectives</h3>
      <p>Event organizers face challenges in managing multiple components of an event, including monitoring attendee engagement, tracking session effectiveness, and ensuring logistical efficiency. Existing systems often lack real-time capabilities, leading to delays and inefficiencies. The Event Tracking and Reporting Dashboard System addresses these challenges by automating workflows, providing live updates, and offering data-driven insights for better event management.</p>
      <h3>System Features</h3>
      <ul>
        <li>Event Management: Add, update, and manage event details. </li> 
        <li>Session Tracking: Monitor session popularity and attendance metrics.</li>
        <li>Dynamic Dashboard: Visualize data trends and metrics for real-time insights.</li>
        <li>Automated Reporting: Generate comprehensive reports for event analysis.</li>
        <li>Metric Analysis: Track key performance indicators to evaluate event success.</li>
        <li>User Roles: Assign permissions for administrators and organizers.</li>
      </ul>
      <h3>Technologies Used</h3>
      <ul>
        <li>Backend: Database schema including tables for Events, Sessions, Metrics, and Reports.  </li>
        <li>Frontend: Dynamic interfaces for event management and data visualization.  </li>
        <h4>Programming Tools: </h4> 
        <li>Languages: Java, SQL  </li>
        <li>Database: MySQL  </li>
        <li>Frameworks: JavaFX/Servlets </li>
      <h3>Key Objectives</h3>
      <ul>
        <li>Streamline Event Management: Enable organizers to manage event details effectively.  </li>
        <li>Provide Real-Time Monitoring: Track attendee engagement and session metrics in real time.  </li>
        <li>Enhance Decision-Making: Deliver actionable insights through dynamic dashboards and reports.  </li>
        <li>Automate Reporting: Generate detailed analytics to evaluate event performance.  </li>
        <li>Improve User Experience: Offer an intuitive interface for seamless navigation and accessibility.  </li>
        <li>Support Scalability: Accommodate diverse events, from small gatherings to large-scale conferences.  </li>
      </ul>
      <h3>Achievements</h3>
      <p>Automated event tracking and reporting processes, reducing manual effort and errors. Enhanced decision-making through real-time insights and analytics. Improved attendee engagement monitoring and session evaluation. Provided a scalable and modular solution adaptable for diverse event types. </p>`,
    animationClass :EMDRbg
  },
  {
    id: 4,
    name: 'Python Card Game with GUI',
    intro: "This project integrates the core mechanics of the 'War' card game with a GUI built using Tkinter. Players compete by drawing cards from a shuffled deck, with the higher card determining the winner of each round. The interface dynamically updates to display the drawn cards, game results, and player scores in real time, ensuring an immersive experience. The object-oriented design ensures modularity and scalability, while the Tkinter library ensures simplicity in GUI development. ",
    details: `
      <h3>Project Overview</h3>
      <p>The Python Card Game with GUI is an interactive implementation of the classic "War" card game, designed using Python and the Tkinter library. This project provides a digital, user-friendly version of the game with a visually appealing graphical user interface, making it engaging for players and educational for developers.  </p>
      <h3>Project Objectives</h3>
      <p>The traditional "War" card game lacks a digital platform for players to engage in a seamless and automated gaming experience. Existing implementations are often console-based or lack interactivity. The Python Card Game with GUI addresses these issues by offering a fully automated, visually interactive, and user-friendly solution. </p>
      <h3>System Features</h3>
      <ul>
        <li>Card Game Mechanics: Full implementation of the "War" card game rules. </li>
        <li>Dynamic GUI: Visual display of player cards, game outcomes, and score updates. </li>
        <li>Object-Oriented Design: Classes for managing cards, players, and the game logic. </li>
        <li>Fair Gameplay: Shuffled deck and randomized card distribution ensure unbiased results. </li>
        <li>Interactive Buttons: Enable players to play rounds and track game progress. </li>
      </ul>
      <h3>Technologies Used</h3>
      <ul>
        <h4>Backend: </h4>
        <li>Object-Oriented Programming (OOP) using Python. </li>
        <li>Card management logic, including card comparison and deck shuffling. </li>
        <h4>Frontend:<h4>
        <li>Tkinter library for creating the graphical user interface. </li>
        <li>Labels, buttons, and dynamic updates for an interactive experience. </li>
        <h4>Programming Tools:<h4>
        <li>Language : Python </li>
      </ul>
      <h3>Key Objectives</h3>
      <ul>
        <li>Digitize the "War" Card Game: Create a digital version of the classic game.  </li>
        <li>Interactive Gameplay: Provide a dynamic interface for engaging player interaction.  </li>
        <li>Real-Time Updates: Display game progress, player scores, and results instantly.  </li>
        <li>Educational Resource: Demonstrate object-oriented programming (OOP) concepts and GUI design.  </li>
        <li>Simplify Usability: Ensure an intuitive design accessible to all users.  </li>
      </ul>
      <h3>Achievements</h3>
      <p>Successfully created an interactive GUI for the "War" card game. Automated game mechanics, reducing manual effort and errors. Enhanced user engagement with real-time updates and visual elements. Demonstrated practical application of OOP and GUI programming in Python. </p>`,
    animationClass :CGbg
  }
];







// Component to render the detailed project page
const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));
  if (!project) {
    return <h2>Project not found</h2>;
  }
  return (
    <div className="project-details">
      <div className="react-gif">
        <div className="gif-background" style={{ backgroundImage: `url(${project.animationClass})` }} ></div>
      </div>
      <div className="details-content">
        <h1>{project.name}</h1>
        <p dangerouslySetInnerHTML={{ __html: project.details }} />
        <Link to="/projects" className="button">Back to Projects</Link>
      </div>
    </div>
  );
};

// Component to render the list of projects
const ProjectsList = () => (
  <div className="Projects">
    <h1>Projects</h1>
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <h2>{project.name}</h2>
          <p>{project.intro}</p>
          <Link to={`/projects/${project.id}`} className="button"> Click Me </Link>
          <img className="react-gif" src={ProjectBG} alt="Background GIF" />
        </div>
      ))}
    </div>
  </div>
);

// Main Projects component with routing
const Projects = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectsList />} />
      <Route path="/:id" element={<ProjectDetails />} />
    </Routes>
  );
};

export default Projects;











