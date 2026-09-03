'use client';

import React, { useRef, useState, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  withArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', withArrow = false, children, onClick, ...props }, ref) => {
    const internalRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    
    // Ripple state
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
      const el = internalRef.current;
      if (!el) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } = el.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
    };

    const reset = () => {
      setPosition({ x: 0, y: 0 });
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const el = internalRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setRipples((prev) => [...prev, { x, y, id: Date.now() }]);
      }
      if (onClick) onClick(e);
    };

    // Clean up ripples
    useEffect(() => {
      if (ripples.length > 0) {
        const timer = setTimeout(() => {
          setRipples((prev) => prev.slice(1));
        }, 1000);
        return () => clearTimeout(timer);
      }
    }, [ripples]);

    const baseStyles = 'relative overflow-hidden inline-flex items-center justify-center font-bold uppercase tracking-[0.12em] rounded-[9999px] px-[36px] py-[18px] text-sm group cursor-pointer transition-colors duration-500';
    
    const variants = {
      primary: 'bg-black text-white border border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]',
      secondary: 'bg-transparent text-white border border-white/20 hover:border-white',
      outline: 'bg-transparent text-white border border-white',
      ghost: 'bg-transparent text-white border border-transparent',
    };

    return (
      <motion.div
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="inline-block"
      >
        <motion.button
          ref={(node) => {
            // @ts-ignore
            internalRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={cn(baseStyles, variants[variant], className)}
          onClick={handleClick}
          {...props}
        >
          {/* Fill Animation Background */}
          <div className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />
          
          {/* Ripple Effect Container */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px] z-10">
            <AnimatePresence>
              {ripples.map((ripple) => (
                <motion.span
                  key={ripple.id}
                  initial={{ scale: 0, opacity: 0.3 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    left: ripple.x,
                    top: ripple.y,
                    width: 100,
                    height: 100,
                    marginLeft: -50,
                    marginTop: -50,
                    borderRadius: "50%",
                    backgroundColor: 'rgba(0,0,0,0.1)',
                  }}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Button Content */}
          <span className="relative z-20 flex items-center gap-3 transition-colors duration-500 group-hover:text-black">
            {children as React.ReactNode}
            {withArrow && (
              <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-2" />
            )}
          </span>
        </motion.button>
      </motion.div>
    );
  }
);
Button.displayName = 'Button';
