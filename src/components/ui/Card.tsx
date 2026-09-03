import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export function Card({ className, glass = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'border p-8 transition-all duration-500',
        glass ? 'glass-panel hover:bg-white/5 hover:border-white/20' : 'bg-brand-charcoal border-white/5 hover:border-white/10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
