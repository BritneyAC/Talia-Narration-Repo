import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Samples from './components/Samples';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  const [current, setCurrent] = useState("about")
  
  function changeComponent(component){
    setCurrent(component)
  }

  let currentComponent

  if(current === "about"){
    currentComponent = <About />
  } else if(current === "samples"){
    currentComponent = <Samples />
  }else if(current === "reviews"){
    currentComponent = <Reviews />
  } else if (current === "contact"){
    currentComponent = <Contact />
  }
  return (
    <div className="app">
      <header className="app--header">
        <Navbar changeComponent={changeComponent} />
      </header>
      <main className="app--main">
        {currentComponent}
      </main>
    </div>
  );
}

export default App;
