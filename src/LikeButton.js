
import React from "react";
import Random from "./Random";


class LikeButton extends React.Component {

    state = {
        likes: 0,
        colorstatus:'blue',
        color:['purple','blue','green','yellow','orange','red']
      };

      handleIncrement = () => {
      let   arr=[...this.state.color]
        
        this.setState({ likes: this.state.likes + 1 });

        let rand=Math.floor(Math.random()*arr.length)

  
      this.setState({ colorstatus: arr[rand]});
   
      };

    

      render() {

       return(

        <div>
        <button className="btn btn-primary" onClick={this.handleIncrement } style={{ fontSize: "2rem", backgroundColor:this.state.colorstatus  }} >
         <span>{this.state.likes}</span> Like
        </button>
        </div>
       );
      }

}

export default LikeButton;