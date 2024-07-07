import Header from "../components/Header";
import PageContent from "../components/PageContent";
import ListingDescription from "../components/ListingDescription";
import LocationAmenities from "../components/LocationAmenities";
import ReviewsContainer from "../components/ReviewsContainer";
import SimilarStaysContainer from "../components/SimilarStaysContainer";
import Footer from "../components/Footer";
import "./PropertyDetails.css";

const PropertyDetails = () => {
  return (
    <div className="property-details">
      <Header />
      <PageContent />
      <section className="listing-details-section-wrapper">
        <div className="listing-details-section">
          <ListingDescription />
          <LocationAmenities />
        </div>
      </section>
      <ReviewsContainer />
      <SimilarStaysContainer />
      <Footer />
    </div>
  );
};

export default PropertyDetails;
