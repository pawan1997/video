import React from 'react';
import { Series } from 'remotion';
import { z } from 'zod';
import { topmateRecapSchema } from './types';
import { IntroScene } from './remotion/scenes/IntroScene';
import { StatsScene } from './remotion/scenes/StatsScene';
import { StarPerformerScene } from './remotion/scenes/StarPerformerScene';
import { EliteStatusScene } from './remotion/scenes/EliteStatusScene';
import { TestimonialScene } from './remotion/scenes/TestimonialScene';
import { TrophyScene } from './remotion/scenes/TrophyScene';
import { OutroScene } from './remotion/scenes/OutroScene';

export const Main: React.FC<z.infer<typeof topmateRecapSchema>> = (props) => {
  return (
    <Series>
      <Series.Sequence durationInFrames={90}>
        <IntroScene profilePicUrl={props.profilePicUrl} firstName={props.firstName} />
      </Series.Sequence>
      
      <Series.Sequence durationInFrames={120}>
        <StatsScene
          bookingCount={props.bookingCount}
          avgRating={props.avgRating}
          testimonialCount={props.testimonialCount}
        />
      </Series.Sequence>
      
      <Series.Sequence durationInFrames={150}>
        <StarPerformerScene
          mostBookedServiceTitle={props.mostBookedServiceTitle}
          mostBookedServiceType={props.mostBookedServiceType}
        />
      </Series.Sequence>
      
      <Series.Sequence durationInFrames={120}>
        <EliteStatusScene
          percentileRank={props.percentileRank}
          userCategory={props.userCategory}
        />
      </Series.Sequence>
      
      {props.testimonials.length > 0 && (
        <Series.Sequence durationInFrames={180}>
          <TestimonialScene testimonials={props.testimonials} />
        </Series.Sequence>
      )}
      
      {props.badges.length > 0 && (
        <Series.Sequence durationInFrames={150}>
          <TrophyScene badges={props.badges} />
        </Series.Sequence>
      )}
      
      <Series.Sequence durationInFrames={120}>
        <OutroScene dateOfJoining={props.dateOfJoining} />
      </Series.Sequence>
    </Series>
  );
};
