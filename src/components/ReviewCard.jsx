import PropTypes from "prop-types";
import "./ReviewCard.css";

const ReviewCard = ({
  className = "",
  reviewerAvatar,
  johnnyCash,
  june2023,
  reviewContent,
  michellesPlaceWasSoGreatA,
}) => {
  return (
    <div className={`reviewcard ${className}`}>
      <div className="review-card-content">
        <div className="reviewer-info">
          <img
            className="reviewer-avatar-icon"
            loading="lazy"
            alt=""
            src={reviewerAvatar}
          />
          <div className="reviewer-name-date">
            <div className="johnny-cash">{johnnyCash}</div>
            <div className="june-2023">{june2023}</div>
          </div>
        </div>
        <div className="review-rating">
          <div className="review-content">{reviewContent}</div>
          <img className="superhost-badge-icon" alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className="michelles-place-was">{michellesPlaceWasSoGreatA}</div>
    </div>
  );
};

ReviewCard.propTypes = {
  className: PropTypes.string,
  reviewerAvatar: PropTypes.string,
  johnnyCash: PropTypes.string,
  june2023: PropTypes.string,
  reviewContent: PropTypes.string,
  michellesPlaceWasSoGreatA: PropTypes.string,
};

export default ReviewCard;
