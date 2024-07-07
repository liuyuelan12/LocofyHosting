import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header1 ${className}`}>
      <div className="header-content1">
        <img className="logo-icon1" loading="lazy" alt="" src="/logo.svg" />
        <nav className="nav-links1">
          <a className="home1">Home</a>
          <a className="stays1">Stays</a>
          <a className="become-a-host1">Become a host</a>
        </nav>
        <div className="login-section1">
          <img
            className="notifications-icon1"
            loading="lazy"
            alt=""
            src="/notifications@2x.png"
          />
          <img
            className="avatar-icon1"
            loading="lazy"
            alt=""
            src="/avatar@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
