// YouTubeVideo.jsx
import React from "react";
import ReactPlayer from "react-player";

export default function YouTubeVideo() {
  return (
    <div style={{ position: "relative", paddingTop: "56.25%" }}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // replace with your YouTube link
        controls
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </div>
  );
}
