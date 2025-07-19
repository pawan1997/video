import { z } from 'zod';

export const testimonialSchema = z.object({
  text: z.string(),
  author: z.string().optional(),
});

export const badgeSchema = z.object({
  title: z.string(),
  imageUrl: z.string().url(),
});

export const topmateRecapSchema = z.object({
  profilePicUrl: z.string().url(),
  username: z.string(),
  firstName: z.string(),
  bookingCount: z.number(),
  avgRating: z.number(),
  mostBookedServiceTitle: z.string(),
  mostBookedServiceType: z.enum(['1:1', 'Digital Product', 'Webinar', 'Package', 'Priority DM']),
  testimonialCount: z.number(),
  testimonials: z.array(testimonialSchema),
  dateOfJoining: z.string(), // ISO date string e.g., "2025-01-15T10:00:00Z"
  badges: z.array(badgeSchema),
  percentileRank: z.number(),
  userCategory: z.string(),
});

export type TopmateRecapProps = z.infer<typeof topmateRecapSchema>;