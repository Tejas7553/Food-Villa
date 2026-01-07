import { restarauntList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, filteredRestaurants) {
  const filterData = filteredRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  // const [restaurantList, setRestaurantList] = useState([]);
   const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // API call 
    getRestaurants();
  }, []);

  async function getRestaurants() {
    console.log("Tejas");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // setFilteredRestaurants(
    //   json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    //Optional Chaining
    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

     setAllRestaurants(restaurants);
     console.log(restaurants);
    setFilteredRestaurants(restaurants);
  }

  // Conditional Rendering
  // if restaurant is empty => Shimmer UI
  // if restaurant has data => actual data UI

  // not render component (Early return)
  if(!allRestaurants) return null;

  if(filteredRestaurants?. length === 0 )
    return <h1>No match found!</h1> 

  return allRestaurants.length === 0 ? (
    <Shimmer/>
  ) : (
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
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />
            // <RestaurantCard key={rest} restaurant={restaurant} />
          );
        })}
      </div>
    </>
  );
};

export default Body;

//   const [searchClicked, setSearchClicked] = useState("false");
{
  /* <h1>{searchClicked}</h1> */
}
{
  /* <button 
        onClick={() => {
            if(searchClicked === "true"){
            setSearchClicked("false");
            }else{
                setSearchClicked("true");
            }
        }}>
            Search
        </button> */
}
