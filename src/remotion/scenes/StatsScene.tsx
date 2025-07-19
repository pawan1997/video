import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { StatCard } from '../components/StatCard';

interface StatsSceneProps {
  bookingCount: number;
  avgRating: number;
  testimonialCount: number;
}

export const StatsScene: React.FC<StatsSceneProps> = ({
  bookingCount,
  avgRating,
  testimonialCount,
}) => {
  return (
    <AbsoluteFill className="bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-16">
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">
          Your Impact in Numbers
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <Sequence from={0}>
            <StatCard
              number={bookingCount}
              label="Total Bookings"
              icon="📅"
              delay={0}
            />
          </Sequence>
          <Sequence from={15}>
            <StatCard
              number={avgRating}
              label="Average Rating"
              icon="⭐"
              delay={15}
            />
          </Sequence>
          <Sequence from={30}>
            <StatCard
              number={testimonialCount}
              label="Testimonials"
              icon="💬"
              delay={30}
            />
          </Sequence>
        </div>
      </div>
    </AbsoluteFill>
  );
};