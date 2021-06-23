import "bootstrap/dist/css/bootstrap.min.css"

function Random(props){

  




return (


    <h1 class="random">
  { `Random value between ${props.min} and ${props.max} => ${parseInt(Math.random() * (props.max - props.min) + props.min )} `}
  
  </h1>
  
  
 
   

);



}


export default Random;