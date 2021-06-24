import react from  "react"




class ClickablePicture extends react.Component{

    state = {
        sem:'/img/persons/maxence.png' ,
        com:'/img/persons/maxence-glasses.png'
      };

    handleIncrement = () => {
        this.setState({ sem: this.state.com});
        this.setState({ com: this.state.sem});
      
      
      };

      render() {
        console.log(this.state);
        return (

 <img onClick={this.handleIncrement} src={this.state.sem}/>
 


        );
      }
    }
export  default ClickablePicture