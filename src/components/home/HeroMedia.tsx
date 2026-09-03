'use client';

import React from 'react';

export function HeroMedia() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">

      {/* Premium dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-brand-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-transparent opacity-80" />
    </div>
  );
}
