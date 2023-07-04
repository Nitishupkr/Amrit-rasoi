import { restrautList } from "../constant";
import { RestrauntCard } from "../RestaurantCard";
import { useState } from "react";
const Body=()=>{
  const [searchText,setsearchText]=useState("jbcdj");
    return (
<>    
<div className="search-container">
  <input
   type="text"
    placeholder="search the text you want" 
    className="search-input"
    value={searchText}
    onChange={(e)=>{
setsearchText(e.target.value)
    }}
    ></input>
  </div> 
  <div className="restaurant-list">
         {restrautList.map((restaurant)=>{
           return <RestrauntCard {...restaurant.data}/>
         }
 
         )
 
         }
 
       
    
     </div></>

    )
 }
 export default Body;