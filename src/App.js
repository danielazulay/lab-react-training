import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ids from "./Intaration1"
import Greetings from "./Greetings"
import Random from "./Random"
import "bootstrap/dist/css/bootstrap.min.css"
import BoxColor from './BoxColor'
import Cards from "./Cards"
import LikeButton from './LikeButton';
import ClickablePicture from "./ClickablePicture"
import master from "./img/master-card.svg"
import visa from  "./img/visa.png"
import Dice from "./Dice"
import Carousel from "./Carousel"

function App() {

  let card = [
{
  type:visa,
  number:"0123456789018845",
  expirationMonth:3,
  expirationYear:2021,
  bank:"BNP",
  owner:"Maxence Bouret",
  bgColor:"#11aa99",
  color:"white" },
  {
  type:master,
  number:"0123456789010995",
  expirationMonth:3,
  expirationYear:2021,
  bank:"N26",
  owner:"Maxence Bouret",
  bgColor:"#eeeeee",
  color:"#222222" },
{
  type:visa,
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

            <div class="container2">
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




<div className="container">
  <div className="row">
   {card.map((cards)=>{
return (
     <Cards
     type={cards.type}
     number={cards.number}
     expirationMonth={cards.expirationMonth}
     expirationYear={cards.expirationYear}
     bank={cards.bank}
     owner={cards.owner}
     bgColor={cards.bgColor}
     color={cards.color}
     />
   );
   })}

   
 
  </div>
</div>



<LikeButton /> <LikeButton />

<ClickablePicture
  img='/img/persons/maxence.png'
  imgClicked='/img/persons/maxence-glasses.png'
/>

<Dice/>


<Carousel
  imgs={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>

    </div>
  );
}

export default App;
