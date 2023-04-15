import Menu from "./Menu";
import Card from "./Card";
import meme from "../images/generador-meme.jpg"
import "../styles/style.scss"
const Gallery = ({titulo}) =>{
    return (
        <div className="gallery-container">
            <div className="gallery-background">
            <h1>{titulo}</h1>
            <div className="gallery-images">
              <Card 
              imagen = {meme}
              >
              </Card>
        
            </div>
            </div>
        </div>

    )
}
export default Gallery; 