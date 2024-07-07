import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./PageContent.css";

const PageContent = ({ className = "" }) => {
  return (
    <section className={`page-content ${className}`}>
      <div className="content-wrapper">
        <div className="main-content">
          <img
            className="left-sidebar-icon"
            loading="lazy"
            alt=""
            src="/frame-9@2x.png"
          />
          <div className="image-gallery">
            <img
              className="image-grid-icon"
              loading="lazy"
              alt=""
              src="/frame-46@2x.png"
            />
            <img
              className="image-grid-icon1"
              loading="lazy"
              alt=""
              src="/frame-47@2x.png"
            />
            <img
              className="image-grid-icon2"
              loading="lazy"
              alt=""
              src="/frame-48@2x.png"
            />
            <img
              className="image-grid-icon3"
              loading="lazy"
              alt=""
              src="/frame-49@2x.png"
            />
            <div className="image-grid">
              <img
                className="main-image-icon"
                alt=""
                src="/main-image@2x.png"
              />
              <img
                className="gallery-indicator-icon"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
        <div className="content-details">
          <div className="listing-info1">
            <div className="details-wrapper">
              <div className="listing-header">
                <div className="header-details">
                  <h2 className="brightwoods-cabin">Brightwoods Cabin</h2>
                  <div className="bridlepath-ontario-canada">
                    Bridlepath, Ontario, Canada
                  </div>
                </div>
                <img
                  className="heart-icon1"
                  loading="lazy"
                  alt=""
                  src="/hearticon.svg"
                />
              </div>
              <div className="listing-summary">
                <div className="summary-content">
                  <div className="rating-value">5.0</div>
                  <img
                    className="rating-stars-icon"
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <div className="review-count-wrapper">
                  <div className="reviews">200 Reviews</div>
                </div>
              </div>
            </div>
            <div className="welcome-to-our">{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
          </div>
          <div className="booking-info-parent">
            <div className="booking-info">
              <div className="price-details">
                <b className="price-value">$658</b>
                <div className="nightly-rate">
                  <a className="night1">/night</a>
                </div>
              </div>
              <div className="booking-trends">
                <div className="trend-info">
                  <div className="icontrend">
                    <div className="icon-parent">
                      <img className="icon" alt="" src="/icon.svg" />
                      <div className="trend-highlight" />
                    </div>
                  </div>
                  <div className="trend-label">
                    <div className="best-time-to">Best time to Book</div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="search-flights-button1"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#00c29f",
                borderRadius: "6px",
                "&:hover": { background: "#00c29f" },
                height: 58,
              }}
            >
              Book this home
            </Button>
          </div>
          <div className="host-info">
            <div className="hosted-by">Hosted by:</div>
            <div className="host-details">
              <img
                className="profile-picture-icon"
                loading="lazy"
                alt=""
                src="/ellipse-2@2x.png"
              />
              <div className="host-credentials">
                <div className="michelle-ward">Michelle Ward</div>
                <div className="joined-in-may">Joined in May 2021</div>
              </div>
              <button className="superhost-badge">
                <img className="badge-icon" alt="" src="/vector-2.svg" />
                <div className="superhost1">Superhost</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PageContent.propTypes = {
  className: PropTypes.string,
};

export default PageContent;
