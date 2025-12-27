import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({ restaurant }) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = restaurant.info;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      {/* {This is a comment} */}
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating} ⭐</h4>
    </div>
  );
};

export default RestaurantCard;