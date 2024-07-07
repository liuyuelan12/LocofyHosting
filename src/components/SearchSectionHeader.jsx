import PropTypes from "prop-types";
import "./SearchSectionHeader.css";

const SearchSectionHeader = ({ className = "" }) => {
  return (
    <div className={`search-section-header ${className}`}>
      <div className="location-info">
        <h3 className="stays-nearby">Stays nearby:</h3>
        <h3 className="toronto-ontario">Toronto Ontario</h3>
      </div>
      <div className="layout-selection">
        <div className="view-options">
          <img className="bento-menu-1-icon" alt="" src="/bento-menu1.svg" />
        </div>
        <div className="view-options1">
          <img className="map-icon" alt="" src="/map.svg" />
        </div>
      </div>
    </div>
  );
};

SearchSectionHeader.propTypes = {
  className: PropTypes.string,
};

export default SearchSectionHeader;
