import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface IntroSceneProps {
  profilePicUrl: string;
  firstName: string;
}

export const IntroScene: React.FC<IntroSceneProps> = ({ profilePicUrl, firstName }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Spring animation for profile picture
  const scale = spring({
    frame,
    fps,
    config: {
      damping: 10,
      stiffness: 100,
    },
  });
  
  // Fade in for text
  const textOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill className="bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div
          className="w-40 h-40 mb-8 mx-auto"
          style={{
            transform: `scale(${scale})`,
          }}
        >
          <img
            src={profilePicUrl}
            alt={firstName}
            className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white"
          />
        </div>
        <h1
          className="text-6xl font-bold text-gray-900"
          style={{ opacity: textOpacity }}
        >
          Hey, {firstName}!
        </h1>
        <p
          className="text-2xl text-gray-600 mt-4"
          style={{ opacity: textOpacity * 0.8 }}
        >
          Ready for your Mid-Year Recap?
        </p>
      </div>
    </AbsoluteFill>
  );
};