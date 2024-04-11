import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="nav-items">
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login">Login</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
