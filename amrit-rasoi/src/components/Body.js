import { restrautList } from "../constant";
import { RestrauntCard } from "../RestaurantCard";
import { useState } from "react";
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}
const Bodies = () => {
  return (
    <div className="Bodies">
      <div className="running-text">
        <h1 className="main-heading">DELICIOUS FOOD</h1>
      </div>
      <div className="running-text">
        <h2 className="main-heading2">Order food from favourite restaurants near you.</h2>
        <button class="button-49" role="button">Learn More</button>
      </div>
      <h3 className="main-heading1">Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai<br/> Pune & more.</h3>
      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="img" className="bodies-img" />
      <img src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000" alt="img" className="bodies-img1" />
      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="img" className="bodies-img3" />
      <img src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000" alt="img" className="bodies-img2" />
    </div>
  );
};

const Body=()=>{
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restrautList);
    return (
<>    
<Bodies/>
<div className="search-container">
<i class="fa fa-search"></i>
        <input
          type="text"
          className="search-input"
          placeholder=""
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, restaurants);
            // update the state of restaurants list
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div></>

    )
 }
 export default Body;