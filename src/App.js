import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <About />
        <Reviews />
        <Contact />
      </header>
    </div>
  );
}

export default App;
