import "../styles/style.scss"
const Card = ({imagen}) =>{
    return (
        <div className="card-container">
            <article className="card">
            <img src={imagen}/>
            </article>
        </div>

    )
}
export default Card; 