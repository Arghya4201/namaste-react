import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRatingString } = resData?.data;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={CDN_URL
           +
            cloudinaryImageId
          }
        ></img>
        <h3>{name}</h3>
        {/* Cuisines */}
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString} Stars</h4>
        <h4>{resData.data.sla.deliveryTime} Minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;