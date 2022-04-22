import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/crwns.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
          <Link className="option" to="/contact">
            CONTACT
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
