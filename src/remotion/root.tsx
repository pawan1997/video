import React from 'react';
import { Composition } from 'remotion';
import { Main } from './Video';
import { topmateRecapSchema } from '../types';

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
  // Calculate total duration based on scenes
  // Intro: 90 + Stats: 120 + StarPerformer: 150 + Elite: 120 + 
  // Testimonial: 180 + Trophy: 150 + Outro: 120 = 930 frames
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
