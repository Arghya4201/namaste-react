import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRatingString } = resData?.info;
    return (
      <div className="m-4 p-4 w-[200px] bg-gray-50 hover:bg-gray-200">
        <img
          className="rounded-lg"
          src={CDN_URL
           +
            cloudinaryImageId
          }
        ></img>
        <h3 className="font-bold py-4 text-xl">{name}</h3>
        {/* Cuisines */}
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString} Stars</h4>
        <h4>{resData.info.sla.deliveryTime} Minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;

  //#ReadMe_HigherOrderComponent
  export const withPromotedLabel =(RestaurantCard)=>{
      return (props)=>{
        <div>
          <label>Promoted</label>
          <RestaurantCard {...props}></RestaurantCard>
        </div>
      }
  }