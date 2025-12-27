import { restarauntList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );

  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restarauntList);
  const [searchText, setSearchText] = useState("");

  const [searchClicked, setSearchClicked] = useState("false");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <h1>{searchClicked}</h1>
        <button 
        onClick={() => {
            if(searchClicked === "true"){
            setSearchClicked("false");
            }else{
                setSearchClicked("true");
            }
        }}>
            Search
        </button>
        {/* <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button> */}
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
