import React from 'react';
import { Composition } from 'remotion';
import { Main } from './remotion/Video';
import { topmateRecapSchema } from './types';

// Test data for development
const myTestData = {
  profilePicUrl: 'https://i.pravatar.cc/300',
  username: 'testuser',
  firstName: 'Pawan',
  bookingCount: 157,
  avgRating: 4.9,
  mostBookedServiceTitle: 'AI-Powered App Consultation',
  mostBookedServiceType: '1:1' as const,
  testimonialCount: 32,
  testimonials: [
    { text: 'This was a game-changer for my project!', author: 'Jane D.' }
  ],
  dateOfJoining: '2025-04-20T10:00:00Z',
  badges: [
    { title: 'Early Bird', imageUrl: 'https://example.com/badge1.png' },
    { title: 'Top Rated', imageUrl: 'https://example.com/badge2.png' }
  ],
  percentileRank: 5,
  userCategory: 'SaaS Builders',
};

export const RemotionRoot: React.FC = () => {
  const totalDuration = 930;

  return (
    <>
      <Composition
        id="TopmateRecap"
        component={Main}
        durationInFrames={totalDuration}
        fps={30}
        width={1920}
        height={1080}
        schema={topmateRecapSchema}
        defaultProps={myTestData}
      />
    </>
  );
};
