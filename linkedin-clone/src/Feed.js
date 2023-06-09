import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "./Firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Madhavi Sapkota",
      description: "This is a test",
    });
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} Title="Photo" Color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} Title="Video" Color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} Title="Event" Color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            Title="Write Article"
            Color="#7FC15E"
          />
        </div>
      </div>
      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name="Madhavi Sapkota"
        description="this is a test description"
        message="Wow this worked"
      />
    </div>
  );
}

export default Feed;
