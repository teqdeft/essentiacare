"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoPlayer({ src, className }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        className={className}
        src={src}
        
        loop
        muted
        playsInline
      />
      <button
        onClick={toggleVideo}
        className="absolute bottom-6 right-6 z-[4] w-12 h-12 rounded-full bg-[#604376] backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 " />
        ) : (
          <Play className="w-5 h-5 ml-0.5" />
        )}
      </button>
    </>
  );
}