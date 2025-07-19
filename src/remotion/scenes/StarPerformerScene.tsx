import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

interface StarPerformerSceneProps {
  mostBookedServiceTitle: string;
  mostBookedServiceType: string;
}

export const StarPerformerScene: React.FC<StarPerformerSceneProps> = ({
  mostBookedServiceTitle,
  mostBookedServiceType,
}) => {
  const frame = useCurrentFrame();
  
  // Reveal animation for title
  const titleReveal = interpolate(frame, [10, 40], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  // Slide in for service
  const serviceSlide = interpolate(frame, [30, 60], [-100, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const getServiceIcon = (type: string) => {
    const icons: Record<string, string> = {
      '1:1': '👥',
      'Digital Product': '📦',
      'Webinar': '🎥',
      'Package': '🎁',
      'Priority DM': '💌',
    };
    return icons[type] || '🌟';
  };

  return (
    <AbsoluteFill className="bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-16">
      <div className="text-center max-w-4xl">
        <h2
          className="text-4xl font-medium text-gray-700 mb-12"
          style={{
            opacity: titleReveal,
            transform: `translateY(${(1 - titleReveal) * 20}px)`,
          }}
        >
          Your community's favorite:
        </h2>
        <div
          className="bg-white rounded-3xl p-12 shadow-2xl"
          style={{
            transform: `translateX(${serviceSlide}%)`,
          }}
        >
          <div className="text-6xl mb-6">{getServiceIcon(mostBookedServiceType)}</div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {mostBookedServiceTitle}
          </h3>
          <p className="text-xl text-gray-600">{mostBookedServiceType}</p>
        </div>
      </div>
    </AbsoluteFill>
  );
};