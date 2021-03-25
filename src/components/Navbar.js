import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

/**
 * Creates a navbar in every page
 * @return {render}
 */
function Navbar(props) {
  console.log(props);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    return () => {
      // do cleanup
    };
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar-icon" />
              SS-1
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              {props.currentUser ? (
                <>
                  <li className="nav-item">
                    <Link
                      to="/profile"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="nav-btn">
                    {button ? (
                      <Link to="/" className="btn-link">
                        <Button
                          buttonStyle="btn--outline"
                          onClick={() => {
                            props.logout();
                            closeMobileMenu();
                          }}
                        >
                          Logout
                        </Button>
                      </Link>
                    ) : (
                      <Link
                        to="/"
                        className="btn-link"
                        onClick={() => {
                          closeMobileMenu();
                          props.logout();
                        }}
                      >
                        <Button
                          buttonStyle="btn--outline"
                          buttonSize="btn--mobile"
                        >
                          Logout
                        </Button>
                      </Link>
                    )}
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      to={"/login"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Log in
                    </Link>
                  </li>
                  <li className="nav-btn">
                    {button ? (
                      <Link to="/register" className="btn-link">
                        <Button buttonStyle="btn--outline">Register</Button>
                      </Link>
                    ) : (
                      <Link
                        to="/register"
                        className="btn-link"
                        onClick={closeMobileMenu}
                      >
                        <Button
                          buttonStyle="btn--outline"
                          buttonSize="btn--mobile"
                        >
                          Register
                        </Button>
                      </Link>
                    )}
                  </li>
                </>
              )}

              {/* <li className="nav-item">
                <Link
                  to="/profile"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Profile
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
