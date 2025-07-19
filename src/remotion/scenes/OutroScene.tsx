import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

interface OutroSceneProps {
  dateOfJoining: string;
}

export const OutroScene: React.FC<OutroSceneProps> = ({ dateOfJoining }) => {
  const frame = useCurrentFrame();
  
  // Parse date to determine if new or veteran user
  const joinDate = new Date(dateOfJoining);
  const joinMonth = joinDate.getMonth(); // 0-11
  const isNewUser = joinMonth >= 3; // April (3) or later
  
  // Fade in animation
  const fadeIn = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  // Logo animation
  const logoScale = interpolate(frame, [60, 80], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const message = isNewUser
    ? "Welcome to the Topmate family! 🎉"
    : "Thank you for being with us from the start! 🙏";

  return (
    <AbsoluteFill className="bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
      <div className="text-center text-white">
        <h2
          className="text-4xl font-medium mb-8"
          style={{ opacity: fadeIn }}
        >
          {message}
        </h2>
        
        <div
          className="mb-12"
          style={{
            transform: `scale(${logoScale})`,
          }}
        >
          <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center">
            <span className="text-5xl font-bold text-purple-600">T</span>
          </div>
        </div>
        
        <h1
          className="text-5xl font-bold"
          style={{ opacity: fadeIn }}
        >
          Here's to an amazing
          <br />
          second half of 2025!
        </h1>
      </div>
    </AbsoluteFill>
  );
};