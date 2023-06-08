import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltIcon} Title="Like" Color="gray" />
        <InputOption Icon={ChatOutlinedIcon} Title="Comment" Color="gray" />
        <InputOption Icon={ShareOutlinedIcon} Title="Share" Color="gray" />
        <InputOption Icon={SendOutlinedIcon} Title="Send" Color="gray" />
      </div>
    </div>
  );
}

export default Post;
