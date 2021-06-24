import react from 'react'

class Carousel extends react.Component{

    state = {
status:'https://randomuser.me/api/portraits/women/1.jpg',
imgs:[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ],

 count:0
    }


    handlePicR = () => {
        let arr =[...this.state.imgs]
       if(this.state.count===3){

        this.setState({  count: 0});  
       }
          this.setState({ status: arr[this.state.count++]});  
        

        };

handlePicL = () => {
    let arr =[...this.state.imgs]
    if(this.state.count===0){

        this.setState({count: 3});  
       }
       
    this.setState({ status: arr[this.state.count--]});  
     
        };

    render(){

        return(
            <div className="carrosel">
<button className="btn btn-primary" onClick={this.handlePicR }>Right</button>
<img src={this.state.status}/>
<button className="btn btn-primary" onClick={this.handlePicL }>Left</button>
</div>
        )
    }

}


export default Carousel