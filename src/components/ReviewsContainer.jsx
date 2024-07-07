import ReviewCard from "./ReviewCard";
import PropTypes from "prop-types";
import "./ReviewsContainer.css";

const ReviewsContainer = ({ className = "" }) => {
  return (
    <section className={`reviews-container ${className}`}>
      <div className="review-section">
        <div className="reviews-header">
          <h3 className="reviews1">Reviews</h3>
          <a className="button1">View all</a>
        </div>
        <div className="review-cards">
          <ReviewCard
            reviewerAvatar="/ellipse-12@2x.png"
            johnnyCash="Johnny Cash"
            june2023="June 2023"
            reviewContent="5.0"
            michellesPlaceWasSoGreatA="Michelle’s place was so great and definitely the perfect place for our long weekend. The lake is amazing!"
          />
          <ReviewCard
            reviewerAvatar="/ellipse-12-1@2x.png"
            johnnyCash="Yuta Watanabe"
            june2023="May 2023"
            reviewContent="4.5"
            michellesPlaceWasSoGreatA="The location is perfect. I love the lake so much!!! This is one of the best stays we had for a while. Definitely recommended."
          />
          <ReviewCard
            reviewerAvatar="/ellipse-12-2@2x.png"
            johnnyCash="Shane Willis"
            june2023="December 2022"
            reviewContent="4.8"
            michellesPlaceWasSoGreatA="A great place overall. One of the nicest place in town for sure. I will come back in the next few months with my family :)"
          />
        </div>
      </div>
    </section>
  );
};

ReviewsContainer.propTypes = {
  className: PropTypes.string,
};

export default ReviewsContainer;
