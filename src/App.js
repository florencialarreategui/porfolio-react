import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutMe from './componets/AboutMe';
import Home from "./componets/Home";
import Gallery from "./componets/Gallery"
import Contact from './componets/Contact';


const App = ()=> {
  return (
  <div>
   <Home></Home>
    <AboutMe></AboutMe>
    <Gallery titulo="Habilidades"></Gallery>
    <Gallery titulo="Proyectos web"></Gallery>
    <Contact></Contact>

    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about-me" element={<AboutMe/>}/>
      <Route path="/proyectos-web" element={<Gallery titulo="Proyectos web"/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
