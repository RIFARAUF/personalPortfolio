import React from 'react';
export default function header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Rifa's Portfolio</h1>
        <p>Welcome to my personal portfolio website!</p>    
        <nav>
          <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        </div>
    </header>
  );
}   