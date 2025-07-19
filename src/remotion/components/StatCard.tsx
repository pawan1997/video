import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

interface StatCardProps {
  number: number;
  label: string;
  delay?: number;
  icon?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ number, label, delay = 0, icon }) => {
  const frame = useCurrentFrame();
  
  // Animate entry with slide and fade
  const progress = interpolate(
    frame - delay,
    [0, 20],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );
  
  // Count up animation
  const displayNumber = Math.round(
    interpolate(frame - delay, [0, 30], [0, number], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );

  return (
    <div
      className="bg-white rounded-2xl p-8 shadow-xl"
      style={{
        transform: `translateY(${(1 - progress) * 50}px)`,
        opacity: progress,
      }}
    >
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <div className="text-5xl font-bold text-gray-900 mb-2">
        {frame > delay ? displayNumber : 0}
      </div>
      <div className="text-gray-600 text-lg">{label}</div>
    </div>
  );
};