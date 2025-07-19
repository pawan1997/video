import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { TopmateRecapProps } from '../../types';

interface TestimonialSceneProps {
  testimonials: TopmateRecapProps['testimonials'];
}

export const TestimonialScene: React.FC<TestimonialSceneProps> = ({ testimonials }) => {
  const frame = useCurrentFrame();
  const testimonial = testimonials[0];
  
  if (!testimonial) return null;
  
  // 3D flip animation
  const flipProgress = interpolate(frame, [10, 40], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  const rotateY = interpolate(flipProgress, [0, 1], [90, 0]);
  const opacity = interpolate(flipProgress, [0, 0.5, 1], [0, 0, 1]);
  
  // Text fade in
  const textOpacity = interpolate(frame, [50, 80], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill className="bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-16">
      <div
        className="bg-white rounded-3xl p-12 shadow-2xl max-w-4xl"
        style={{
          transform: `perspective(1000px) rotateY(${rotateY}deg)`,
          opacity,
        }}
      >
        <div className="text-6xl text-purple-400 mb-6">"</div>
        <p
          className="text-2xl text-gray-800 leading-relaxed mb-8"
          style={{ opacity: textOpacity }}
        >
          {testimonial.text}
        </p>
        {testimonial.author && (
          <p
            className="text-lg text-gray-600 text-right"
            style={{ opacity: textOpacity * 0.8 }}
          >
            — {testimonial.author}
          </p>
        )}
      </div>
    </AbsoluteFill>
  );
};
