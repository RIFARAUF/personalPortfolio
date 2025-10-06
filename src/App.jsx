import React from 'react';
import header from './components/header/header';
import about_me_section from './components/about_me_section/about_me_section';
import projects_section from './components/projects_section/projects_section';
import footer from './components/footer/footer';



function App() {
  return (
    <div>
      {header()}
      {about_me_section()}
      {projects_section()}
      {footer()}  
    </div>
  );
}

export default App;
  