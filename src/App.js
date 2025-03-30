import React,{Component} from 'react';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Card from './Components/Card'
import About from './Components/About'
import a from "./Assets/Images/burger1.avif"
import b from "./Assets/Images/burger2.avif"
import c from "./Assets/Images/burger3.avif"
import d from "./Assets/Images/burger4.avif"
import Footer from './Components/Footer';
export default class App extends Component{
  render(){
    return(
      <>
       <Navbar/>
       <Home/>
       
  <div className="wrapper">
  <div className='cards-container'>
  <Card
      key="user1"
      imgsrc={a}
      heading="The tastiest deal of the week"
      description="Today only! Get a great deal on the full-on flame-grilled flavor of a Whopper®. Order it  your
       way in the BK® App."
      buttonText="Order now"
    />
    <Card
      key="user2"
      imgsrc={b}
      heading="Your favorites, your way. For $5 or $7!"
      description="Save big with the $5 Duo or $7 Trio! Mix and match your faves—want 3 Bacon Cheeseburgers? You got it. Craving 2 Original Chicken Sandwiches? Go for it. It’s your choice—so Have It Your Way."
      buttonText="Order now"
    />
     <Card
      key="user3"
      imgsrc={c} 
      heading="Don't miss this swag drop!"
      description="The Whopper® Wearhouse is here with cozy winter merch from seasons past. Once these items disappear, they’ll be gone forever—so grab your favorites today!"
      buttonText="Visit the Shop"
    />
      <Card
      key="user4"
      imgsrc={d}
      heading="Warm up this winter with a Melt Meal!"
      description="Cozy days call for cozy flavors. Add some warm, cheesy goodness this winter with one of our digital-exclusive Melt Meals! "
      buttonText="Order now"
    />
  </div>
   </div>
   <About/>
   <Footer/>
       </>
       
     
    )
  }
}
