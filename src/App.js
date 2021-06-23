import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ids from "./Intaration1"
import Greetings from "./Greetings"
import Random from "./Random"
import "bootstrap/dist/css/bootstrap.min.css"
import BoxColor from './BoxColor'


function App() {

  let card = [
{
  type:"Visa",
  number:"0123456789018845",
  expirationMonth:3,
  expirationYear:2021,
  bank:"BNP",
  owner:"Maxence Bouret",
  bgColor:"#11aa99",
  color:"white" },
  {
  type:"Master Card",
  number:"0123456789010995",
  expirationMonth:3,
  expirationYear:2021,
  bank:"N26",
  owner:"Maxence Bouret",
  bgColor:"#eeeeee",
  color:"#222222" },
{
  type:"Visa",
  number:"0123456789016984",
  expirationMonth:12,
  expirationYear:2019,
  bank:"Name of the Bank",
  owner:"Firstname Lastname",
  bgColor:"#ddbb55",
  color:"white"
  }
]

  let arrIds=[
    {
  lastName:'Doe',
  firstName:'John',
  gender:'male',
  height:178,
  birth:Date("1992-07-14"),
  picture:"https://randomuser.me/api/portraits/men/44.jpg"
    },

{
  lastName:'Delores ',
  firstName:'Obrien',
  gender:'female',
  height:172,
  birth:Date("1988-05-11"),
  picture:"https://randomuser.me/api/portraits/women/44.jpg"
}
  ]

  return (
    <div className="App">
      <header className="App-header">
       
       

            </header>

            <div class="container">
  <div className="row">
   {arrIds.map((id)=>{
return (
     <Ids 
     lastName={id.lastName}  
     firstName={id.firstName}
     gender={id.gender}
     height={id.height}
     birth={id.birth}
     picture={id.picture}
     />
   );
   })}

   
 
  </div>
</div>


<Greetings lang="de">Ludwig</Greetings>

<Greetings lang="fr">François</Greetings>


<Random min={1} max={6}/>
<Random min={1} max={100}/>


<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />



    </div>
  );
}

export default App;
