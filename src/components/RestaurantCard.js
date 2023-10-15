import {CARD_LOGO} from "../utils/constants";
const RestaurantCard = (props) => {
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img className="rounded-lg"
          src={
            CARD_LOGO +
            props.cloudinaryImageId
          }
        />
        <h2 className="font-bold py-4 text-lg">{props.name}</h2>
        <h4>{props.cuisines.join(", ")}</h4>
        <h4>{props.area}</h4>
        <span>
        <h4>{props.avgRating}</h4>
          <h4>{props.lastMileTravelString}</h4>
          <h4>{props.costForTwoString}</h4>
        </span>
      </div>
    );
  };

  export const withPromtedLabel = (RestaurantCard) => {
    return (props) => {
      console.log(RestaurantCard,props)
      return (
        <div>
          <label>
            Promoted
          </label>
          <RestaurantCard {...props} />
        </div>
      );
    };
  };

  export default RestaurantCard