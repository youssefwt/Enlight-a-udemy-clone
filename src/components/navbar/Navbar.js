import React, {  useEffect } from "react";
import "./Navbar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useSelector,useDispatch } from "react-redux";
import { logOut } from "../../features/auth/authSlice";

function Navbar() {
  const [showContent, setShowContent] = useState(false);

  function Toggle() {
    setShowContent(!showContent);
  }

  const history = useHistory();
  const dispatch = useDispatch();

 
  const user = useSelector((state) => state.auth.user)

  const signOut = () => {
    localStorage.removeItem("accessToken");
    dispatch(logOut());
    history.push("/login");
  };

  const [searchInput, setSearchInput] = useState("");

  const handleEnter = (event) => {
    if (event.keyCode === 13 && searchInput.length > 0) {
      history.push(`/search/${searchInput}`);
      setSearchInput("");
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleEnter);
    return () => window.removeEventListener("keyup", handleEnter);
  });

  return (
    <div className="navbar">
      <MenuIcon className="navbar__menuIcon" onClick={Toggle} />
      <div className={showContent ? "navbar__hidden" : "hide"}>
        {!user && (
          <>
            <hr />
            <Link to="/login">
              <h3 style={{ marginTop: "15px" }}>Login</h3>
            </Link>
            <Link to="/signup">
              <h3>Sign Up</h3>
            </Link>
            <hr />
          </>
        )}

        {user && (
          <>
            <hr />
            <button className="m-signOut" onClick={signOut}>
              <h3 style={{ marginTop: "15px" }}>Log Out</h3>
            </button>
            <hr />
          </>
        )}
        <h3 style={{ marginTop: "10px" }}>Learn</h3>
        <h4>My learning</h4>
        <h3>Most popular</h3>
        <h4>Web Development</h4>
        <h4>Mobile Development</h4>
        <h4>Game development</h4>
        <h4>Entrepreneurship development</h4>
        <h4>Business Analytics</h4>
        <h4>Digital Marketing</h4>
        <h4>Graphic Design</h4>
        <h4>IT Certification</h4>
        <h4>Personal Transformation</h4>
        <h3>More from Udemy</h3>
        <h4>Udemy Business</h4>
        <h4>Get the app</h4>
        <h4>Invite friends</h4>
        <h4>Help</h4>
      </div>
      <Link to="/">
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt="logo"
          className="navbar__logo"
        />
      </Link>
      <p className="navbar__text">Categories</p>
      <input
        type="text"
        placeholder="Search for anything"
        className="navbar__input"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyPress={handleEnter}
      />
      <p className="navbar__text navbar__ub">Udemy Business</p>
      {user && (
        <>
          <button onClick={signOut} className="navbar__logout">
            <p className="navbar__text navbar__ins">Log-Out</p>
          </button>
          <p className="navbar__text">My learning</p>
          <FavoriteBorderIcon className="navbar__icon navbar__favIcon" />
          <div className="navbar__mediaSet">
            <SearchIcon className="navbar__searchIcon" />
            <ShoppingCartOutlinedIcon className="navbar__icon" />
          </div>
          <NotificationsNoneIcon className="navbar__icon navbar__notificationIcon" />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </>
      )}
      {!user && (
        <div className="navbar__user">
          <Link to={`/search/python`}>
            <SearchIcon className="navbar__searchIcon" />
          </Link>
          <ShoppingCartOutlinedIcon className="navbar__icon" />
          <Link to="/login">
            <p className="navbar__login">Log in</p>
          </Link>
          <Link to="/signup">
            <p className="navbar__signup">Sign up</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
