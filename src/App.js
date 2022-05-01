import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <header className="app--header">
        <Navbar />
      </header>
      <main className="app--main">
        <About />
        <Reviews />
        <Contact />
      </main>
    </div>
  );
}

export default App;
