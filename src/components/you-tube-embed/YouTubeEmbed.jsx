import React from "react";
import "./YouTubeEmbed.css";

export default function YouTubeEmbed({ videoId, videoTitle }) {
  return (
    <div className="youtube-embed__main">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        loading="lazy"
        title={videoTitle}
        className="youtube-embed__iframe"
      />
    </div>
  );
}
