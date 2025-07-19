import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface EliteStatusSceneProps {
  percentileRank: number;
  userCategory: string;
}

export const EliteStatusScene: React.FC<EliteStatusSceneProps> = ({
  percentileRank,
  userCategory,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Fade in for setup text
  const setupOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  // Spring animation for dramatic reveal
  const revealSpring = spring({
    frame: frame - 50,
    fps,
    config: {
      damping: 10,
      stiffness: 200,
    },
  });
  
  // Glow effect
  const glowIntensity = interpolate(frame, [50, 70, 90], [0, 1, 0.7], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill className="bg-black flex items-center justify-center">
      <div className="text-center">
        <h2
          className="text-3xl text-gray-400 mb-8"
          style={{ opacity: setupOpacity }}
        >
          Among all {userCategory}s...
        </h2>
        <div
          style={{
            transform: `scale(${revealSpring})`,
            filter: `drop-shadow(0 0 ${glowIntensity * 50}px rgba(253, 224, 71, 0.8))`,
          }}
        >
          <h1 className="text-7xl font-black text-yellow-300 leading-tight">
            YOU ARE IN THE
            <br />
            TOP {percentileRank}%
          </h1>
        </div>
      </div>
    </AbsoluteFill>
  );
};
