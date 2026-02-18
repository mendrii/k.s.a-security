import React from 'react';
import '../style/VimeoVideo.css';

export const VimeoVideo = ({ videoId }) => {
  return (
    <div className="vimeo-wrapper">
      <iframe 
        src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`} 
        className="vimeo-iframe"
        frameBorder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowFullScreen
        title="Video KSA Security"
      ></iframe>
    </div>
  );
};