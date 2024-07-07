import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={`footer ${className}`}>
      <div className="footer-content2">
        <div className="footer-links-wrapper">
          <div className="footer-links">
            <div className="support-links">
              <div className="support">Support</div>
              <div className="help-centre">Help Centre</div>
              <div className="aircover">AirCover</div>
              <div className="combating-discrimination">
                Combating discrimination
              </div>
              <div className="supporting-people-with">
                Supporting people with disabilities
              </div>
              <div className="cencellation-options">Cencellation options</div>
              <div className="report-neighbourhood-concern">
                Report neighbourhood concern
              </div>
            </div>
            <div className="hosting-links">
              <div className="hosting">Hosting</div>
              <div className="local-home">Local home</div>
              <div className="cover-for-hosts">Cover for hosts</div>
              <div className="hosting-resources">Hosting resources</div>
              <div className="community-forum">Community forum</div>
              <div className="hosting-responsibly">Hosting responsibly</div>
            </div>
            <div className="hosting-links1">
              <div className="localhost">Localhost</div>
              <div className="newsroom">Newsroom</div>
              <div className="new-features">New Features</div>
              <div className="careers">Careers</div>
              <div className="investres">Investres</div>
              <div className="gift-cards">Gift cards</div>
            </div>
          </div>
        </div>
      </div>
      <footer className="copyright-content-wrapper">
        <div className="copyright-content">
          <div className="legal-info">
            <div className="localhost-inc-all2">
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className="legal-links1">
              <div className="privacy-policy2">Privacy Policy</div>
              <div className="terms-conditions2">{`Terms & Conditions`}</div>
              <div className="contact-us2">Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
