const Card = (props) =>{
    return <div className="card">
        
        <h1 className="card-title">{props.name}</h1>
        <div className="img">
        <img src={props.image} alt="" />
        </div>
         
        {props.perN. map((perN)=> <div>{perN}</div>)}
        <p>{props.description}</p>
        <button onClick={() =>props.action(props.name, props.perN)} className="btn">button</button>

    </div>

}
export default Card