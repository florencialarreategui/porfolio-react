import "../styles/style.scss"
import { BrowserRouter, Link } from "react-router-dom"
const MenuFixed = () => {
    return (
        <div className="menu-home">
            <ul className="menufixed-list">
              <BrowserRouter>
              <li>|</li>
                <li>
                  <Link to="/about-me">Sobre mi </Link> 
                </li>
                <li>|</li>
                <li>
                    Skills  
                </li>
                <li>|</li>
            
                <li>
                    Formación 
                </li>
                <li>|</li>
                <li>
                    Contacto 
                </li>
                <li>|</li>
                <li>
                <Link to="/proyectos-web"> Proyectos web</Link> 
                </li>
                <li>|</li>
                </BrowserRouter>
            </ul>
        </div>
    )
} 

export default MenuFixed; 