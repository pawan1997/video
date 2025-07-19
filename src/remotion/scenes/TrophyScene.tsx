import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { Badge } from '../components/Badge';
import { TopmateRecapProps } from '../../types'; 

interface TrophySceneProps {
  badges: TopmateRecapProps['badges'];
}

export const TrophyScene: React.FC<TrophySceneProps> = ({ badges }) => {
  return (
    <AbsoluteFill className="bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center p-16">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-16">
          Your Trophy Collection
        </h2>
        <div className="flex gap-12 justify-center items-end">
          {badges.map((badge, index) => (
            <Sequence key={index} from={index * 10}>
              <Badge
                title={badge.title}
                imageUrl={badge.imageUrl}
                index={index}
              />
            </Sequence>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
