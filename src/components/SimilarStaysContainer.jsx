import StayCard from "./StayCard";
import PropTypes from "prop-types";
import "./SimilarStaysContainer.css";

const SimilarStaysContainer = ({ className = "" }) => {
  return (
    <section className={`similar-stays-container ${className}`}>
      <div className="similar-stays-section">
        <div className="similar-stays-header">
          <h3 className="similar-stays">Similar stays</h3>
          <a className="button2">View all</a>
        </div>
        <div className="stay-cards">
          <StayCard
            brightwoodsEstate="Missisuaga Aistream"
            bridlepathOntarioCanada="Missisauga, Ontario, Canada"
          />
          <StayCard
            brightwoodsEstate="Urban Loft"
            bridlepathOntarioCanada="Urban Loft"
          />
          <StayCard
            brightwoodsEstate="Forestville Cottages"
            bridlepathOntarioCanada="Simcoe, Ontario Canada"
          />
        </div>
      </div>
    </section>
  );
};

SimilarStaysContainer.propTypes = {
  className: PropTypes.string,
};

export default SimilarStaysContainer;
