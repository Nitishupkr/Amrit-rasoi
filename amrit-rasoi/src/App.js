import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"

const root = ReactDOM.createRoot(document.getElementById('root'));




// // make a javascript object to make the card dyanamic
//  const restaurantCard=[{
//     name:"Burger King",
//     image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/db40cb52b0f5a2d3753356c5a88c09ce",
//     cuisines:["Burger,American"],
//     rating:"4.2"
 

//  },
//  {
//     name:"Burger King",
//     image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/db40cb52b0f5a2d3753356c5a88c09ce",
//     cuisines:["Burger,American"],
//     rating:"4.2" 
//  },
//  {
//     name:"Burger King",
//     image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/db40cb52b0f5a2d3753356c5a88c09ce",
//     cuisines:["Burger,American"],
//     rating:"4.2" 
//  }
// ]
 


const AppLayout=()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>    
        </>
    )
}
root.render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
);
