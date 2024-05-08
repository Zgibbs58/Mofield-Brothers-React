"use client";
import { AnimationProps, motion } from 'framer-motion';
import { SVGProps } from 'react';

interface PathProps extends Omit<SVGProps<SVGPathElement>, 'ref'> {
  isOpen?: boolean;
}

interface PathProps extends Omit<SVGProps<SVGPathElement>, 'ref'> {
  isOpen?: boolean;
  variants?: any; // Add the 'variants' property to the 'PathProps' interface
  initial?: boolean; // Add the 'initial' property to the 'PathProps' interface
  transition?: any; // Add the 'transition' property to the 'PathProps' interface
}

const Path: React.FC<PathProps> = ({ isOpen, d, variants, initial, transition }) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="rgb(243 244 246)"
    strokeLinecap="round"
    animate={isOpen ? 'open' : 'closed'}
    d={d}
    variants={variants}
    initial={initial}
    transition={transition}
  />
);

interface ToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({ toggle, isOpen }) => (
  <button className="p-3 rounded-full z-20 relative" onClick={toggle} aria-label="Toggle Menu">
    <svg width="26" height="26" viewBox="0 1 22 18" className="block mx-auto">
      <Path
        d="M 2 2.5 L 20 2.5"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5", opacity: 1 },
          open: { d: "M 3 16.5 L 17 2.5", opacity: 1 },
        }}
        initial={false}
        transition={{ duration: 0.1 }}
        isOpen={isOpen}
      />
      {/* Add isOpen prop to the other Path components */}
      <Path
        d="M 11 9.423 L 20 9.423"
        variants={{
          closed: { d: "M 11 9.423 L 20 9.423", opacity: 1 },
          open: { d: "M 3 2.5 L 17 16.346", opacity: 0 },
        }}
        initial={false}
        transition={{ duration: 0.1 }}
        isOpen={isOpen}
      />
      <Path
        d="M 2 16.346 L 20 16.346"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346", opacity: 1 },
          open: { d: "M 3 2.5 L 17 16.346", opacity: 1 },
        }}
        initial={false}
        transition={{ duration: 0.1 }}
        isOpen={isOpen}
      />
    </svg>
  </button>
);