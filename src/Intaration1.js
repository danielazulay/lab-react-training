import "bootstrap/dist/css/bootstrap.min.css"

function Intaration1(props){

return (


    <div className="row2">
    <img className="foto" src={props.picture}/>
    
    <ul>
       <li> <b>First name: </b> {props.firstName}</li>
       <li><b>Last name:</b> {props.LastName}</li>
       <li><b>Gender:</b> {props.gender}</li>
       <li><b>Height: </b>{props.height}</li>
       <li> <b>Birth: </b>{props.birth}</li>
    </ul>
 
    </div>

);

}


export default Intaration1;