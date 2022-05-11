import { useState } from "react"

export default function Navbar(props){

  const [isShown, setIsShown] = useState(false)

  function toggleMenu(){
    setIsShown(prevShown => !isShown)

  }

  return(
    <nav className="nav">
      <img src="../images/talia.jpg" alt="Talia" className="nav--img"/>
      <h1 className="nav--title">Talia Carver</h1>
      <button className="nav--toggler" aria-controls="nav--menu" aria-expanded={isShown ? "true" : "false"} onClick={toggleMenu}>
        <span className="sr-only">Menu</span>
        </button>

      {isShown && <ul className="nav--menu">
        <li onClick={() => props.changeComponent("about")} >About Me</li>
        <li onClick={() => props.changeComponent("samples")} >Samples</li>
        <li onClick={() => props.changeComponent("reviews")} >Reviews</li>
        <li onClick={() => props.changeComponent("contact")} >Contact Me</li>
      </ul>}
    </nav>
  )
}