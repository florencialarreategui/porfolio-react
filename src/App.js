import './App.css';
import AboutMe from './componets/AboutMe';
import Home from "./componets/Home";
import Gallery from "./componets/Gallery"
import Contact from './componets/Contact';
import meme from "./images/generador-meme.jpg"

const App = ()=> {
  return (
  <div>
    <Home></Home>
    <AboutMe></AboutMe>
    <Gallery
     titulo="Proyectos web"
     imagen={meme}
    >
    </Gallery>
    <Gallery titulo="Diseños | Ilustraciones"></Gallery>
    <Gallery titulo="Obras | Fotografías"></Gallery>
    <Contact></Contact>
  </div>
  );
}

export default App;
