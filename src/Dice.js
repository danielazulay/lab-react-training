import react from "react";
import dice0 from "./dice/dice-empty.png";
import dice1 from "./dice/dice1.png";
import dice2 from "./dice/dice2.png";
import dice3 from "./dice/dice3.png";
import dice4 from "./dice/dice4.png";
import dice5 from "./dice/dice5.png";
import dice6 from "./dice/dice6.png";



class Dice extends react.Component{


    state = {
        diceIncicial:dice3,
        dice: [dice0,dice1,dice2,dice3,dice4,dice5,dice6]

      };

      handldice = () => {
        this.setState({ diceIncicial:dice0});
        var delayInMilliseconds = 1000;
        setTimeout(()=> {

          let aux =[...this.state.dice]
          let rand = Math.floor(Math.random()*aux.length)
         
         
        this.setState({ diceIncicial:aux[rand]});
    }, delayInMilliseconds);
      };

      render() {
       
        return (

 <img onClick={this.handldice } src={this.state.diceIncicial }/>
 


        );
      }



}


export default Dice 