import MenuFixed from "./MenuFixed";
import Card from "./Card";
import meme from "../images/proyectos-web/generador-meme.jpg"
import gilda from "../images/proyectos-web/gilda.png"
import rick from "../images/proyectos-web/rick.png"
import ahorrada from "../images/proyectos-web/ahorrada.png"
import market from "../images/proyectos-web/market.png"
import peli from "../images/proyectos-web/peli.png"

import "../styles/style.scss"
const Gallery = ({titulo}) =>{
    return (
        <div className="gallery-container">
            <div className="gallery-background">
            <h1>{titulo}</h1>
            <div className="gallery-images">
                <a href="https://generadormemes.netlify.app/">
                <Card 
                 imagen = {meme}
                 >
                </Card>
              </a>
              <Card 
              imagen = {gilda}
              >
              </Card>
              <Card 
              imagen = {rick}
              >
              </Card>
              <Card 
              imagen = {ahorrada}
              >
              </Card>
              <Card 
              imagen = {market}
              >
              </Card>
              <Card 
              imagen = {peli}
              >
              </Card>
        
            </div>
            </div>
            <MenuFixed/>
        </div>

    )
}
export default Gallery; 