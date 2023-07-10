import { restrautList } from "../constant";
import { RestrauntCard } from "../RestaurantCard";
import { useState } from "react";
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}
const Body=()=>{
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restrautList);
    return (
<>    

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