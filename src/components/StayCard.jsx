import PropTypes from "prop-types";
import "./StayCard.css";

const StayCard = ({
  className = "",
  brightwoodsEstate,
  bridlepathOntarioCanada,
}) => {
  return (
    <div className={`staycard ${className}`}>
      <div className="stay-favorite">
        <div className="vector-parent">
          <img className="vector-icon" alt="" src="/superhost-icon.svg" />
          <div className="superhost2">Superhost</div>
        </div>
        <div className="wrapper-heart-icon1">
          <img
            className="heart-icon2"
            loading="lazy"
            alt=""
            src="/hearticon-1.svg"
          />
        </div>
      </div>
      <div className="stay-details">
        <div className="stay-content">
          <div className="stay-heading">
            <div className="brightwoods-estate">{brightwoodsEstate}</div>
            <div className="bridlepath-ontario-canada1">
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className="stay-rating">
            <div className="stay-review-score">4.8</div>
            <img
              className="star-rating-icon"
              loading="lazy"
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className="stay-pricing">
          <div className="stay-price">
            <div className="price-per-night1">$502</div>
            <div className="night2">/night</div>
          </div>
          <img
            className="price-indicator-icon"
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
          <div className="stay-guests">
            <img className="user-icon" loading="lazy" alt="" src="/user.svg" />
            <div className="guests">2 guests</div>
          </div>
        </div>
      </div>
    </div>
  );
};

StayCard.propTypes = {
  className: PropTypes.string,
  brightwoodsEstate: PropTypes.string,
  bridlepathOntarioCanada: PropTypes.string,
};

export default StayCard;
