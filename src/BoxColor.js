import "bootstrap/dist/css/bootstrap.min.css"

function BoxColor(props){

  




return (



<h1 style={{ backgroundColor:`rgb(${props.r}, ${props.g}, ${props.b})`}} >  rgb({props.r}, {props.g}, {props.b})</h1>
  
     

);



}


export default BoxColor;