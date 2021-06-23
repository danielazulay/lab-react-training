import "bootstrap/dist/css/bootstrap.min.css"

function Cards(props){

  





return (

<div className="col" >

<div className="cards" style={ {backgroundColor:`${props.bgColor}`,Color:`${props.Color}`}} >
<img className="typecard" src={props.type}/>
<p className="numbercard">{props.number}</p>
<p className="exp">{`Expire: ${props.expirationMonth }/${props.expirationYear}   ${props.bank} `}</p>
<p className="name">{props.owner}</p>
</div>
</div>

);



}


export default Cards;