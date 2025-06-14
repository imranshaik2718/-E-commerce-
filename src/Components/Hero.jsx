import React, { useState, useRef } from 'react';
import vid2 from "../assets/Hero/vid2.mp4";
import vid1 from "../assets/Hero/vid1.mp4";

function Hero() {
  const [currentVideo, setCurrentVideo] = useState(vid1); // Start with vid2
  const videoRef = useRef(null);

  const handleEnded = () => {
    setCurrentVideo((prev) => (prev === vid1 ? vid2 : vid1));
  };

  return (
    <div className="mx-auto h-screen overflow-hidden ">
      <video
        ref={videoRef}
        key={currentVideo} // ensures video reloads on source change
        className="w-full border-b-2 shadow-lg"
        autoPlay
        muted
        onEnded={handleEnded}
      >
        <source src={currentVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Hero;
