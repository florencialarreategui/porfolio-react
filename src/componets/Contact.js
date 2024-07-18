import MenuFixed from "./MenuFixed";
import "../styles/style.scss";
// import instagram from "../images/icons/instagram.svg";
import mail from "../images/icons/mail.svg";
import linkedin from "../images/icons/linkedin.svg";
import github from "../images/icons/github.svg"
const Contact = () =>{
    return (
        <div className="contact-container">
            <div className="contact-background">
            <div className="contact-div">
                <h1>Contacto</h1>
                <div className="div-contact-icons">
                    <a href="https://www.linkedin.com/in/florencia-larreategui/">
                        <div className="contact-icons">
                             <img src={linkedin}/>
                             <p>florencia-larreategui</p>
                         </div>
                    </a>
                    <a href="https://github.com/florencialarreategui">
                    <div className="contact-icons">
                    <img src={github}/>
                    <p>florencialarreategui</p>
                    </div>
                    </a>
                    <div className="contact-icons">
                    <img src={mail}/>
                    <p>florencialarreategui@gmail.com</p>
                    </div>
                </div>
            </div>
            
            </div>
        
           <div className="menufixedContact"><MenuFixed/></div>
            
        </div>

    )
}
export default Contact; 