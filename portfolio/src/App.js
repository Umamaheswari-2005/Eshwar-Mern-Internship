import './CSS/App.css';
import './CSS/index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Home from './Components/Home';
import Loginpage from './Components/Loginpage';
import Register from "./Components/Register";
import TodoList from './Components/TodoList';
import TaskView from './Components/TaskView';
import NavigationBar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavigationBar />
        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="/tasks" element={<TaskView />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
