import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface BadgeProps {
  title: string;
  imageUrl: string;
  index: number;
}

export const Badge: React.FC<BadgeProps> = ({ title, imageUrl, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Stagger the animation based on index
  const delay = index * 10;
  
  // Spring animation for entrance
  const springValue = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 10,
      stiffness: 100,
      mass: 0.5,
    },
  });
  
  const rotation = interpolate(springValue, [0, 1], [360, 0]);
  const scale = springValue;

  return (
    <div
      className="flex flex-col items-center"
      style={{
        transform: `rotate(${rotation}deg) scale(${scale})`,
      }}
    >
      <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full p-1 shadow-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <p className="mt-3 text-sm font-medium text-gray-700">{title}</p>
    </div>
  );
};
