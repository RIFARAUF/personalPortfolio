import React from 'react';
import Header from './components/header';
import About_me_section from './components/about_me_section';
import Projects_section from './components/projects_section';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About_me_section />
        <Projects_section />
      </main>
      <Footer />
    </div>
  );
}

export default App;
  