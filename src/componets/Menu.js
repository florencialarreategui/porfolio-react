import "../styles/style.scss"
import { BrowserRouter, Link } from "react-router-dom"
const Menu = () => {
    return (
        <div className="menu-home">
            <ul className="menu-list">
              <BrowserRouter>
                <li>
                  <Link to="/about-me"> Sobre mi</Link> 
                </li>
                <li>
                    Skills
                </li>
            
                <li>
                    Formación
                </li>
                <li>
                    Contacto
                </li>
                <li>
                <Link to="/proyectos-web"> Proyectos web</Link> 
                </li>
                </BrowserRouter>
            </ul>
        </div>
    )
} 

export default Menu; 