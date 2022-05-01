export default function Navbar(){
  return(
    <nav className="nav">
      <img src="../images/talia.jpg" alt="Talia" className="nav--img"/>
      <h1 className="nav--title">Talia Carver</h1>
      <button className="nav--toggler" aria-controls="nav--menu" aria-expanded="false">
        <span className="sr-only">Menu</span>
        </button>

      <ul className="nav--menu">
        <li>About Me</li>
        <li>Samples</li>
        <li>Reviews</li>
        <li>Contact Me</li>
      </ul>
    </nav>
  )
}