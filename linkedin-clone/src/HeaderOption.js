import React from "react";
import "./HeaderOption.css";

function HeaderOption({ Avatar, Icon, Title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {Avatar && <Avatar className="headerOption__icon" src={Avatar} />}
      <h3 className="headerOption__title">{Title}</h3>
    </div>
  );
}

export default HeaderOption;
