'use client';

import React, { useEffect, useRef, useState } from 'react';

export function HeroVideo({ src }: { src: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.error("Video autoplay failed:", e));
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-brand-black">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ pointerEvents: 'none' }}
      />
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
      {/* Additional gradient for a smoother transition to content */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
    </div>
  );
}
