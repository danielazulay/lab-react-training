import "bootstrap/dist/css/bootstrap.min.css"

function Greetings(props){

    const gret={
        de:"Hej",
        fr:"salut",
        pr:"ola",
        es:"Hola",
        Hola:"hey"

    };
    function classnameRender(){
        let className = "";
    for(let key in gret){
      
        if (props.lang===key) {
            className = gret[key];
         
          }
        
    }
return className
}

return (


    <h1 className="lang">
    {` ${classnameRender()} ${props.children} `}  
  
  </h1>
  
  
 
   

);



}


export default Greetings;