import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />

          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} Title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} Title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} Title="Jobs" />
        <HeaderOption Icon={ChatIcon} Title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} Title="Notifications" />
        <HeaderOption Avatar={AccountCircleIcon} Title="me" />
      </div>
    </div>
  );
}

export default Header;
