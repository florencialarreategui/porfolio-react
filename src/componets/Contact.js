import Menu from "./Menu";
import "../styles/style.scss";
import instagram from "../images/instagram.svg";
import mail from "../images/mail.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg"
const Contact = () =>{
    return (
        <div className="contact-container">
            <div className="contact-background">
            <div className="contact-div">
                <h1>Contacto</h1>
                <div className="div-contact-icons">
                    <div className="contact-icons">
                    <img src={instagram}/>
                    <p>floress.santas</p>
                    </div>
                    <div className="contact-icons">
                    <img src={linkedin}/>
                    <p>florencia-larreategui</p>
                    </div>
                    <div className="contact-icons">
                    <img src={github}/>
                    <p>florencialarreategui</p>
                    </div>
                    <div className="contact-icons">
                    <img src={mail}/>
                    <p>florencialarreategui@gmail.com</p>
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}
export default Contact; 