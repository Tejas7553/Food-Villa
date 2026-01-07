import { restarauntList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

function filterData(searchText, filteredRestaurants) {
  const filterData = filteredRestaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );

  return filterData;
}

const Body = () => {
  // const [restaurantList, setRestaurantList] = useState([]);
   const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
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

    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

     setAllRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  }


  return (
    <                                                >
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
            <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
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
